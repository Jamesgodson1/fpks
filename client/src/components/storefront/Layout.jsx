import { Footer } from "./Footer";
import { Header } from "./Header";
import { Seo } from "./Seo";
import { CartDrawer } from "./CartDrawer";

export function Layout({
  children,
  storefront,
  seoPage,
  cart,
  cartCount,
  active,
  cartOpen,
  onCartOpen,
  onCartClose,
  onCartRemove,
  onCartQuantity,
  onOrderPlaced
}) {
  return (
    <>
      <Seo settings={storefront.settings} page={seoPage} />
      <Header
        settings={storefront.settings}
        categories={storefront.categories}
        cartCount={cartCount}
        active={active}
        onCartOpen={onCartOpen}
      />
      <main>{children}</main>
      <Footer settings={storefront.settings} />
      <CartDrawer
        cart={cart}
        open={cartOpen}
        onClose={onCartClose}
        onRemove={onCartRemove}
        onQuantity={onCartQuantity}
        onOrderPlaced={onOrderPlaced}
      />
    </>
  );
}
