import { useMemo, useState } from "react";
import { productMediaSources } from "../../lib/media";
import { trackAnalyticsEvent } from "../../lib/storefrontApi";
import { ProductMediaImage } from "./ProductMediaImage";

function formatPrice(price) {
  const amount = Number(price || 0);
  return `$${amount.toFixed(amount % 1 === 0 ? 0 : 2)}`;
}

function getVariants(product) {
  return product.variants?.length
    ? product.variants
    : [{ name: "Default", price: product.price, inventory: product.inventory }];
}

export function ProductCard({ product, onAdd }) {
  const variants = useMemo(() => getVariants(product), [product]);
  const [variantIndex, setVariantIndex] = useState(0);
  const selectedVariant = variants[variantIndex] || variants[0];
  const hasOptions = variants.length > 1;
  const hues = product.hues?.length ? product.hues : ["#321", "#743", "#c66"];
  const gradient = `repeating-linear-gradient(135deg, ${hues[0]} 0px, ${hues[0]} 18px, ${hues[1]} 18px, ${hues[1]} 36px, ${hues[2]} 36px, ${hues[2]} 54px)`;
  const mediaSources = useMemo(() => productMediaSources(product), [product]);

  return (
    <article className="fp-product-card">
      <a
        className="fp-product-media"
        href={`/products/${product.slug}`}
        aria-label={`View ${product.title}`}
        onClick={() =>
          trackAnalyticsEvent({
            type: "product_click",
            productSlug: product.slug,
            productName: product.title,
            path: `/products/${product.slug}`
          })
        }
      >
        <div className="fp-product-fallback" style={{ background: gradient }} />
        <ProductMediaImage sources={mediaSources} alt={product.imageAlt || product.title} />
        <div className="fp-badges">
          <span>{product.tag || "NEW"}</span>
        </div>
        <span className="fp-media-arrow left" aria-hidden="true">
          {"<"}
        </span>
        <span className="fp-media-arrow right" aria-hidden="true">
          {">"}
        </span>
        <div className="fp-media-dots" aria-hidden="true">
          <i className="active" />
          <i />
          <i />
        </div>
      </a>

      <div className="fp-product-body">
        <div className="fp-product-top">
          <h3>{product.title}</h3>
          <span>{formatPrice(selectedVariant.price || product.price)}</span>
        </div>
        <p>{product.category}</p>

        {hasOptions ? (
          <div className="fp-card-variants" aria-label={`${product.title} options`}>
            {variants.map((variant, index) => (
              <button
                className={variantIndex === index ? "active" : ""}
                type="button"
                onClick={() => setVariantIndex(index)}
                key={`${variant.name}-${index}`}
              >
                <span>{variant.name}</span>
                <b>{formatPrice(variant.price || product.price)}</b>
              </button>
            ))}
          </div>
        ) : null}

        <button onClick={() => onAdd({ ...product, selectedVariant })} type="button">
          ADD TO CART
        </button>
      </div>
    </article>
  );
}
