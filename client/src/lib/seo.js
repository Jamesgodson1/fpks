export function absoluteUrl(path = "/") {
  const origin = typeof window !== "undefined" ? window.location.origin : "";
  return `${origin}${path.startsWith("/") ? path : `/${path}`}`;
}

export function stripHtml(value = "") {
  return String(value).replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

export function truncate(value = "", length = 155) {
  const text = stripHtml(value);
  return text.length > length ? `${text.slice(0, length - 1).trim()}...` : text;
}

export function productAvailability(product, variant) {
  const inventory = Number(variant?.inventory ?? product?.inventory ?? 0);
  return inventory > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock";
}

export function buildOrganizationSchema(settings) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: settings.brandName || "FUELPACKS",
    url: absoluteUrl("/"),
    logo: absoluteUrl(settings.logoUrl || "/fuelpack-assets/logo.jpeg"),
    contactPoint: settings.contactEmail
      ? {
          "@type": "ContactPoint",
          email: settings.contactEmail,
          contactType: "sales"
        }
      : undefined
  };
}

export function buildWebsiteSchema(settings) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: settings.brandName || "FUELPACKS",
    url: absoluteUrl("/"),
    potentialAction: {
      "@type": "SearchAction",
      target: `${absoluteUrl("/menu")}?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };
}

export function buildBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.url)
    }))
  };
}

export function buildProductSchema(product, settings) {
  const variant = product.variants?.[0];
  const price = Number(variant?.price ?? product.price ?? 0);
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: truncate(product.seoDescription || product.description || `${product.title} from ${settings.brandName || "FUELPACKS"}.`, 500),
    image: (product.gallery?.length ? product.gallery : [product.image]).filter(Boolean).map((image) => absoluteUrl(image)),
    sku: product.sku || product.slug,
    category: product.category,
    brand: {
      "@type": "Brand",
      name: product.brand || settings.brandName || "FUELPACKS"
    },
    offers: {
      "@type": "Offer",
      url: absoluteUrl(product.canonicalUrl || `/products/${product.slug}`),
      priceCurrency: "USD",
      price,
      availability: productAvailability(product, variant),
      itemCondition: "https://schema.org/NewCondition"
    }
  };

  if (product.reviewRating && product.reviewCount) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: Number(product.reviewRating),
      reviewCount: Number(product.reviewCount)
    };
  }

  return schema;
}

export function scoreProductSeo(product, settings = {}) {
  const title = product.seoTitle || product.title || "";
  const description = product.seoDescription || product.description || "";
  const focus = (product.seoFocusKeyphrase || product.title || "").toLowerCase().trim();
  const imageAlt = product.imageAlt || product.title || "";
  const checks = [
    {
      label: "SEO title",
      passed: title.length >= 35 && title.length <= 65,
      hint: "Use a unique SEO title between 35 and 65 characters."
    },
    {
      label: "Meta description",
      passed: description.length >= 120 && description.length <= 160,
      hint: "Write a meta description between 120 and 160 characters."
    },
    {
      label: "Focus keyphrase",
      passed: Boolean(focus) && `${title} ${description}`.toLowerCase().includes(focus.split(" ")[0]),
      hint: "Add a focus keyphrase and use it in the title or description."
    },
    {
      label: "Product description",
      passed: stripHtml(product.description || "").split(/\s+/).filter(Boolean).length >= 80,
      hint: "Add at least 80 words of original product copy."
    },
    {
      label: "Image SEO",
      passed: Boolean(product.image) && imageAlt.length >= 8,
      hint: "Add a primary image and descriptive image alt text."
    },
    {
      label: "Clean slug",
      passed: /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(product.slug || ""),
      hint: "Use a readable lowercase slug with hyphens."
    },
    {
      label: "Structured data fields",
      passed: Boolean(product.price || product.variants?.[0]?.price) && Boolean(product.category) && Boolean(product.sku || product.slug),
      hint: "Make sure price, category, and SKU/slug are present."
    },
    {
      label: "Social sharing",
      passed: Boolean(product.image) && Boolean(settings.brandName),
      hint: "Use a strong product image and brand setting for social previews."
    }
  ];

  const passedCount = checks.filter((check) => check.passed).length;
  const score = Math.round((passedCount / checks.length) * 100);
  const status = score >= 85 ? "good" : score >= 60 ? "ok" : "poor";

  return { score, status, checks };
}

export function buildCollectionSchema(title, description, path, products) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description,
    url: absoluteUrl(path),
    mainEntity: {
      "@type": "ItemList",
      itemListElement: products.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: absoluteUrl(`/products/${product.slug}`)
      }))
    }
  };
}

export function buildFaqSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: stripHtml(faq.answer)
      }
    }))
  };
}
