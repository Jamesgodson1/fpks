import { useEffect, useMemo, useState } from "react";
import {
  imageSizes,
  normalizeMediaUrl,
  productImageFormatSrcSet,
  productImageSrcSet
} from "../../lib/media";

const FALLBACK_IMAGE = "/fuelpack-assets/logo.jpeg";

export function ProductMediaImage({
  sources,
  alt,
  className,
  loading = "lazy",
  sizes = imageSizes.card,
  priority = false
}) {
  const candidates = useMemo(() => {
    const items = Array.isArray(sources) ? sources : [sources];
    return Array.from(
      new Set([...items.map(normalizeMediaUrl).filter(Boolean), FALLBACK_IMAGE])
    );
  }, [sources]);
  const candidateKey = candidates.join("|");
  const [index, setIndex] = useState(0);
  const src = candidates[index] || FALLBACK_IMAGE;

  useEffect(() => {
    setIndex(0);
  }, [candidateKey]);

  const avifSrcSet = productImageFormatSrcSet(src, "avif");
  const webpSrcSet = productImageFormatSrcSet(src, "webp");
  const img = (
    <img
      className={className}
      src={src}
      srcSet={productImageSrcSet(src)}
      sizes={sizes}
      alt={alt}
      loading={priority ? "eager" : loading}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
      onError={() => {
        setIndex((value) => Math.min(value + 1, candidates.length - 1));
      }}
    />
  );

  if (!avifSrcSet && !webpSrcSet) return img;

  return (
    <picture>
      {avifSrcSet ? <source type="image/avif" srcSet={avifSrcSet} sizes={sizes} /> : null}
      {webpSrcSet ? <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} /> : null}
      {img}
    </picture>
  );
}
