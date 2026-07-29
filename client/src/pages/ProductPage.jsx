import { useMemo, useState } from "react";
import { ProductCard } from "../components/storefront/ProductCard";

function formatPrice(price) {
  const amount = Number(price || 0);
  return `$${amount.toFixed(amount % 1 === 0 ? 0 : 2)}`;
}

function getVariants(product) {
  return product.variants?.length
    ? product.variants
    : [{ name: "Default", price: product.price, inventory: product.inventory }];
}

export function ProductPage({ storefront, slug, onAdd }) {
  const product = storefront.products.find((item) => item.slug === slug);
  const activeProduct = product || storefront.products[0];
  const gallery = activeProduct.gallery?.length
    ? activeProduct.gallery
    : [activeProduct.image].filter(Boolean);
  const variants = getVariants(activeProduct);
  const [imageIndex, setImageIndex] = useState(0);
  const [variantIndex, setVariantIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const selectedVariant = variants[variantIndex] || variants[0];
  const price = selectedVariant.price || activeProduct.price;
  const related = useMemo(
    () =>
      storefront.products
        .filter((item) => item.slug !== activeProduct.slug && item.categorySlug === activeProduct.categorySlug)
        .slice(0, 4),
    [storefront.products, activeProduct]
  );

  if (!activeProduct) {
    return null;
  }

  function addSelectedToCart() {
    for (let index = 0; index < quantity; index += 1) {
      onAdd({ ...activeProduct, selectedVariant });
    }
  }

  return (
    <>
      <section className="fp-product-detail">
        <div className="fp-product-detail-grid">
          <div className="fp-gallery">
            <nav className="fp-breadcrumbs" aria-label="Breadcrumb">
              <a href="/">Home</a>
              <span>/</span>
              <a href="/menu">Menu</a>
              <span>/</span>
              <a href={`/menu/${activeProduct.categorySlug}`}>{activeProduct.category}</a>
              <span>/</span>
              <span>{activeProduct.title}</span>
            </nav>
            <div className="fp-gallery-main">
              <img src={gallery[imageIndex] || activeProduct.image} alt={activeProduct.imageAlt || activeProduct.title} />
              {gallery.length > 1 ? (
                <>
                  <button
                    className="fp-media-arrow left"
                    type="button"
                    aria-label="Previous product image"
                    onClick={() => setImageIndex((index) => (index - 1 + gallery.length) % gallery.length)}
                  >
                    {"<"}
                  </button>
                  <button
                    className="fp-media-arrow right"
                    type="button"
                    aria-label="Next product image"
                    onClick={() => setImageIndex((index) => (index + 1) % gallery.length)}
                  >
                    {">"}
                  </button>
                </>
              ) : null}
              <div className="fp-badges">
                <span>{activeProduct.tag || "NEW"}</span>
              </div>
            </div>

            {gallery.length > 1 ? (
              <div className="fp-gallery-thumbs">
                {gallery.map((image, index) => (
                  <button
                    className={imageIndex === index ? "active" : ""}
                    type="button"
                    onClick={() => setImageIndex(index)}
                    key={`${image}-${index}`}
                  >
                    <img src={image} alt="" />
                  </button>
                ))}
              </div>
            ) : null}
          </div>

          <aside className="fp-product-info">
            <a className="fp-back-link" href="/menu">
              &lt; BACK TO MENU
            </a>
            <div className="fp-kicker small">
              <span />
              {activeProduct.category}
            </div>
            <h1>{activeProduct.title}</h1>
            <div className="fp-detail-price">{formatPrice(price)}</div>
            <div className="fp-detail-description">
              <p>
                {activeProduct.description ||
                  "Fresh active menu item. Select a variation, add it to cart, and send the request to the sales rep for confirmation."}
              </p>
            </div>

            <div className="fp-detail-meta">
              <span>{activeProduct.tag || "NEW"}</span>
              <span>{selectedVariant.inventory ?? activeProduct.inventory} in stock</span>
              <span>Request checkout</span>
            </div>

            <div className="fp-variant-panel">
              <h2>Pick your option</h2>
              <div>
                {variants.map((variant, index) => (
                  <button
                    className={variantIndex === index ? "active" : ""}
                    type="button"
                    onClick={() => setVariantIndex(index)}
                    key={`${variant.name}-${index}`}
                  >
                    <strong>{variant.name}</strong>
                    <span>{formatPrice(variant.price || activeProduct.price)}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="fp-detail-actions">
              <div className="fp-detail-qty" aria-label="Quantity">
                <button type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))}>
                  -
                </button>
                <span>{quantity}</span>
                <button type="button" onClick={() => setQuantity((value) => value + 1)}>
                  +
                </button>
              </div>
              <button className="fp-detail-cart" type="button" onClick={addSelectedToCart}>
                ADD TO CART
              </button>
            </div>

            <div className="fp-detail-note">NO PAYMENT PROCESSED ON-SITE - ORDERS HANDLED BY SALES REP</div>
          </aside>
        </div>
      </section>

      {related.length ? (
        <section className="fp-drops fp-related">
          <div className="fp-section-head">
            <div>
              <div className="fp-kicker small"><span />RELATED DROP</div>
              <h2>More gas</h2>
            </div>
            <a href="/menu">VIEW ALL -&gt;</a>
          </div>
          <div className="fp-grid">
            {related.map((item) => (
              <ProductCard product={item} onAdd={onAdd} key={item.slug} />
            ))}
          </div>
        </section>
      ) : null}
    </>
  );
}
