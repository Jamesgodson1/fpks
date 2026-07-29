import { Drops } from "../components/storefront/Drops";

export function MenuPage({ storefront, onAdd, categorySlug = "all" }) {
  const { content } = storefront;
  const activeCategory = storefront.categories.find((category) => category.slug === categorySlug);
  const products =
    categorySlug && categorySlug !== "all"
      ? storefront.products.filter((product) => product.categorySlug === categorySlug)
      : storefront.products;
  const title = activeCategory ? activeCategory.label : content.menuTitle;
  const copy = activeCategory
    ? activeCategory.seoIntro ||
      `Browse ${activeCategory.label.toLowerCase()} from today's active supply. Pick a product, choose a variation, and send your cart request to the sales rep.`
    : content.menuCopy;

  return (
    <>
      <section className="fp-menu-hero">
        <div className="fp-container">
          <div className="fp-kicker small">
            <span />
            FULL MENU
          </div>
          <h1>{title}</h1>
          <p>{copy}</p>
        </div>
      </section>
      <Drops content={content} products={products} onAdd={onAdd} />
    </>
  );
}
