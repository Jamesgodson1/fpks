import { ProductCard } from "./ProductCard";

export function Drops({ content, products, onAdd, variant = "default" }) {
  return (
    <section className={`fp-drops fp-drops-${variant}`}>
      <div className="fp-section-head">
        <div>
          <div className="fp-kicker small">
            <span />
            {content.dropsEyebrow}
          </div>
          <h2>{content.dropsTitle}</h2>
        </div>
        <a href="/menu">VIEW ALL -&gt;</a>
      </div>
      {products.length ? (
        <div className="fp-grid">
          {products.map((product) => (
            <ProductCard product={product} onAdd={onAdd} key={product.id || product.slug || product.title} />
          ))}
        </div>
      ) : (
        <div className="fp-empty-products">
          <strong>No products in this category yet.</strong>
          <p>Check the full menu for active drops, specials, and recently stocked products.</p>
          <a href="/menu">Browse all products -&gt;</a>
        </div>
      )}
    </section>
  );
}
