import { Helmet } from "react-helmet-async";
import { absoluteUrl, truncate } from "../../lib/seo";

export function Seo({ settings, page = {} }) {
  const brand = settings.brandName || "FUELPACKS";
  const title = page.title || settings.metaTitle || brand;
  const description = truncate(page.description || settings.metaDescription || settings.ogDescription || "", 160);
  const canonical = page.canonicalUrl ? absoluteUrl(page.canonicalUrl) : absoluteUrl(page.path || "/");
  const image = absoluteUrl(page.image || "/fuelpack-assets/og-image.jpeg");
  const robots = page.robots || "index,follow";
  const schemas = [page.schema, ...(page.schemas || [])].filter(Boolean);

  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      <meta name="theme-color" content="#0b0b0e" />
      <meta name="author" content={brand} />
      {page.keywords ? <meta name="keywords" content={page.keywords} /> : null}
      <link rel="canonical" href={canonical} />
      <link rel="icon" type="image/jpeg" href={settings.logoUrl || "/fuelpack-assets/logo.jpeg"} />

      <meta property="og:site_name" content={brand} />
      <meta property="og:title" content={page.ogTitle || title} />
      <meta property="og:description" content={page.ogDescription || description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={page.type || "website"} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={page.twitterTitle || page.ogTitle || title} />
      <meta name="twitter:description" content={page.twitterDescription || page.ogDescription || description} />
      <meta name="twitter:image" content={image} />

      {schemas.map((schema, index) => (
        <script type="application/ld+json" key={`${schema["@type"] || "schema"}-${index}`}>
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
