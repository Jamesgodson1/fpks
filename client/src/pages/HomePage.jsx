import { Drops } from "../components/storefront/Drops";
import { ProductCard } from "../components/storefront/ProductCard";

function Stats({ productCount }) {
  return (
    <div className="fp-stats">
      <div>
        <strong>{productCount}</strong>
        <span>PRODUCTS IN STOCK</span>
      </div>
      <div>
        <strong>100%</strong>
        <span>DISCREET PACKAGING</span>
      </div>
      <div>
        <div className="fp-bars" aria-label="Gas level: full">
          {[40, 55, 70, 85, 100].map((height) => (
            <i style={{ height: `${height}%` }} key={height} />
          ))}
        </div>
        <span>GAS LEVEL · FULL</span>
      </div>
      <div>
        <strong>LA</strong>
        <span>BASED & OPERATED</span>
      </div>
    </div>
  );
}

function OrderBand() {
  const steps = [
    ["STEP 01", "Build your cart", "Browse the menu, pick your weights and quantities, and add them to your cart."],
    ["STEP 02", "Screenshot your cart", "Open your cart and take a screenshot so you have your order ready to send."],
    ["STEP 03", "Send to sales rep", "Send the screenshot directly to your sales rep to confirm. No payment on-site."]
  ];

  return (
    <section className="fp-order-band">
      <div className="fp-container">
        <div className="fp-order-head">
          <h2>How it works</h2>
          <span>No checkout - sales rep handoff</span>
        </div>
        <div className="fp-order-grid">
          {steps.map(([step, title, copy]) => (
            <article key={step}>
              <span>{step}</span>
              <h2>{title}</h2>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SpecialsBand({ products, onAdd }) {
  const specialProducts = products.filter((product) => product.categorySlug === "special-deals");
  const featured = (specialProducts.length ? specialProducts : products).slice(0, 4);

  if (!featured.length) {
    return null;
  }

  return (
    <section className="fp-specials-band">
      <div className="fp-special-stripes" aria-hidden="true" />
      <div className="fp-container">
        <div className="fp-special-head">
          <div>
            <div className="fp-kicker small">
              <span />
              SPECIAL DEALS - LIMITED SUPPLY
            </div>
            <h2>
              Make room
              <br />
              <span>for the refill</span>
            </h2>
          </div>
          <a href="/menu/special-deals">SEE ALL DEALS -&gt;</a>
        </div>
        <div className="fp-special-grid">
          {featured.map((product) => (
            <ProductCard product={product} onAdd={onAdd} key={product.id || product.slug || product.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryBand({ products, onAdd, categorySlug, title, href }) {
  const categoryProducts = products.filter((product) => product.categorySlug === categorySlug).slice(0, 4);

  if (!categoryProducts.length) {
    return null;
  }

  return (
    <section className="fp-category-band">
      <div className="fp-container">
        <div className="fp-section-head">
          <div>
            <div className="fp-kicker small">
              <span />
              FEATURED CATEGORY
            </div>
            <h2>{title}</h2>
          </div>
          <a href={href}>VIEW ALL -&gt;</a>
        </div>
        <div className="fp-grid">
          {categoryProducts.map((product) => (
            <ProductCard product={product} onAdd={onAdd} key={product.id || product.slug || product.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomePage({ storefront, onAdd }) {
  const { content, products } = storefront;

  return (
    <>
      <section className="fp-hero">
        <div className="fp-container">
          <div className="fp-kicker">
            <span />
            {content.heroEyebrow}
          </div>
          <h1>
            {content.heroLineOne}
            <br />
            {content.heroLineTwo}
            <br />
            <span>{content.heroLineThree}</span>
          </h1>
          <p>{content.heroCopy}</p>
          <div className="fp-hero-ctas">
            <a className="primary" href="/menu">
              {content.primaryCta}
            </a>
            <a className="secondary" href="/faq">
              {content.secondaryCta}
            </a>
          </div>
          <Stats productCount={products.length} />
        </div>
      </section>
      <Drops content={content} products={products} onAdd={onAdd} />
      <SpecialsBand products={products} onAdd={onAdd} />
      <CategoryBand
        products={products}
        onAdd={onAdd}
        categorySlug="indoor"
        title="TOP INDOOR"
        href="/menu/indoor"
      />
      <OrderBand />
    </>
  );
}
