import { useEffect, useMemo, useState } from "react";
import { Layout } from "./components/storefront/Layout";
import { fallbackStorefront } from "./data/storefrontData";
import { getStorefront, trackAnalyticsEvent } from "./lib/storefrontApi";
import {
  buildBreadcrumbSchema,
  buildCollectionSchema,
  buildFaqSchema,
  buildOrganizationSchema,
  buildProductSchema,
  buildWebsiteSchema,
  truncate
} from "./lib/seo";
import { AdminPage } from "./pages/AdminPage";
import { FaqPage } from "./pages/FaqPage";
import { HomePage } from "./pages/HomePage";
import { MenuPage } from "./pages/MenuPage";
import { ProductPage } from "./pages/ProductPage";

export default function App() {
  const [storefront, setStorefront] = useState(fallbackStorefront);
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartToast, setCartToast] = useState("");
  const path = window.location.pathname;

  useEffect(() => {
    getStorefront().then(setStorefront);
  }, []);

  useEffect(() => {
    trackAnalyticsEvent({
      type: path.startsWith("/products/") ? "product_view" : "page_view",
      title: document.title,
      productSlug: path.startsWith("/products/") ? path.split("/products/")[1] : undefined
    });
  }, [path]);

  useEffect(() => {
    if (!cartToast) return undefined;
    const timeout = window.setTimeout(() => setCartToast(""), 2400);
    return () => window.clearTimeout(timeout);
  }, [cartToast]);

  const cartCount = useMemo(() => cart.reduce((sum, item) => sum + item.quantity, 0), [cart]);
  const active = path.startsWith("/menu") ? "MENU" : path.startsWith("/faq") ? "FAQ" : "HOME";
  const categorySlug = path.startsWith("/menu/") ? path.split("/menu/")[1] : "all";
  const activeCategory = storefront.categories.find((category) => category.slug === categorySlug);
  const menuProducts =
    categorySlug && categorySlug !== "all"
      ? storefront.products.filter((product) => product.categorySlug === categorySlug)
      : storefront.products;
  const activeProduct = path.startsWith("/products/")
    ? storefront.products.find((item) => item.slug === path.split("/products/")[1])
    : null;
  const seoPage = buildSeoPage({
    path,
    storefront,
    activeProduct,
    activeCategory,
    products: menuProducts
  });

  function addToCart(product) {
    const selectedVariant = product.selectedVariant || product.variants?.[0] || {
      name: "Default",
      price: product.price,
      inventory: product.inventory
    };
    const productKey = product.id || product.slug || product.title;
    const variantKey = selectedVariant.name || "default";

    trackAnalyticsEvent({
      type: "add_to_cart",
      productSlug: product.slug,
      productName: product.title
    });
    const key = `${productKey}-${variantKey}`;
    setCart((items) => {
      const existing = items.find((item) => item.cartKey === key);
      if (existing) {
        return items.map((item) =>
          item.cartKey === key ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [
        ...items,
        {
          ...product,
          selectedVariant,
          cartKey: key,
          cartId: `${key}-${Date.now()}`,
          quantity: 1
        }
      ];
    });
    setCartToast(`${product.title || "Product"} added to cart successfully.`);
  }

  function removeFromCart(cartId) {
    setCart((items) => items.filter((item) => item.cartId !== cartId));
  }

  function updateQuantity(cartId, delta) {
    setCart((items) =>
      items
        .map((item) =>
          item.cartId === cartId
            ? { ...item, quantity: Math.max(0, item.quantity + delta) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  if (path.startsWith("/admin")) {
    return <AdminPage />;
  }

  return (
    <>
      <Layout
        storefront={storefront}
        seoPage={seoPage}
        cart={cart}
        cartCount={cartCount}
        active={active}
        cartOpen={cartOpen}
        onCartOpen={() => setCartOpen(true)}
        onCartClose={() => setCartOpen(false)}
        onCartRemove={removeFromCart}
        onCartQuantity={updateQuantity}
        onOrderPlaced={() => setCart([])}
      >
        {path.startsWith("/products/") ? (
          <ProductPage storefront={storefront} slug={path.split("/products/")[1]} onAdd={addToCart} />
        ) : path.startsWith("/faq") ? (
          <FaqPage storefront={storefront} />
        ) : path.startsWith("/menu") ? (
          <MenuPage storefront={storefront} onAdd={addToCart} categorySlug={categorySlug} />
        ) : (
          <HomePage storefront={storefront} onAdd={addToCart} />
        )}
      </Layout>
      {cartToast ? (
        <div className="fp-toast" role="status" aria-live="polite">
          {cartToast}
        </div>
      ) : null}
    </>
  );
}

function buildSeoPage({ path, storefront, activeProduct, activeCategory, products }) {
  const { settings, content } = storefront;
  const baseSchemas = [buildOrganizationSchema(settings), buildWebsiteSchema(settings)];

  if (path.startsWith("/products/") && activeProduct) {
    const description = truncate(
      activeProduct.seoDescription ||
        activeProduct.description ||
        `${activeProduct.title} from ${settings.brandName}. Browse images, variants, price, availability, and related products.`,
      155
    );
    return {
      path,
      canonicalUrl: activeProduct.canonicalUrl,
      title: activeProduct.seoTitle || `${activeProduct.title} | ${settings.brandName}`,
      description,
      keywords: activeProduct.seoKeywords,
      image: activeProduct.image,
      type: "product",
      schemas: [
        ...baseSchemas,
        buildBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Menu", url: "/menu" },
          { name: activeProduct.category, url: `/menu/${activeProduct.categorySlug}` },
          { name: activeProduct.title, url: `/products/${activeProduct.slug}` }
        ]),
        buildProductSchema(activeProduct, settings)
      ]
    };
  }

  if (path.startsWith("/menu")) {
    const title = activeCategory
      ? activeCategory.seoTitle || `${activeCategory.label} Menu | ${settings.brandName}`
      : `${content.menuTitle} | ${settings.brandName}`;
    const description = activeCategory
      ? activeCategory.seoDescription ||
        `Browse ${activeCategory.label.toLowerCase()} products from ${settings.brandName}. View pricing, availability, variants, and add items to your order request.`
      : content.menuCopy;
    const pagePath = activeCategory ? `/menu/${activeCategory.slug}` : "/menu";
    return {
      path: pagePath,
      canonicalUrl: activeCategory?.canonicalUrl,
      title,
      description,
      schemas: [
        ...baseSchemas,
        buildBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Menu", url: "/menu" },
          ...(activeCategory ? [{ name: activeCategory.label, url: pagePath }] : [])
        ]),
        buildCollectionSchema(title, description, pagePath, products)
      ]
    };
  }

  if (path.startsWith("/faq")) {
    return {
      path: "/faq",
      title: `${content.faqTitle} | ${settings.brandName}`,
      description: "Answers to common Fuelpacks ordering, cart, delivery, packaging, and sales rep handoff questions.",
      schemas: [
        ...baseSchemas,
        buildBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "FAQ", url: "/faq" }
        ]),
        buildFaqSchema(storefront.faqs)
      ]
    };
  }

  return {
    path: "/",
    title: settings.metaTitle || settings.brandName,
    description: settings.metaDescription,
    schemas: [
      ...baseSchemas,
      buildCollectionSchema(settings.metaTitle || settings.brandName, settings.metaDescription, "/", products)
    ]
  };
}
