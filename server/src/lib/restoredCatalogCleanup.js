export const mainStoreCategories = [
  {
    label: "TODAY'S DROP",
    slug: "todays-drop",
    href: "/menu/todays-drop",
    featured: true,
    sortOrder: 1,
    description: "Freshly restored products from the latest live catalog."
  },
  {
    label: "ALL",
    slug: "all",
    href: "/menu",
    featured: false,
    sortOrder: 2,
    description: "Browse every active restored product in the live catalog."
  },
  {
    label: "INDOOR",
    slug: "indoor",
    href: "/menu/indoor",
    featured: true,
    sortOrder: 3,
    description: "Indoor flower and indoor-labeled menu items."
  },
  {
    label: "DEPS",
    slug: "deps",
    href: "/menu/deps",
    featured: true,
    sortOrder: 4,
    description: "Deps and greenhouse supply from the restored catalog."
  },
  {
    label: "EXOTIC",
    slug: "exotic",
    href: "/menu/exotic",
    featured: true,
    sortOrder: 5,
    description: "Exotic and zaza menu items."
  },
  {
    label: "AAA",
    slug: "aaa",
    href: "/menu/aaa",
    featured: true,
    sortOrder: 6,
    description: "AAA flower options from the restored live menu."
  },
  {
    label: "SMALLS",
    slug: "smalls-mediums",
    href: "/menu/smalls-mediums",
    featured: true,
    sortOrder: 7,
    description: "Smalls and mediums from the restored live menu."
  },
  {
    label: "PREROLLS",
    slug: "prerolls",
    href: "/menu/prerolls",
    featured: true,
    sortOrder: 8,
    description: "Preroll items from the restored catalog."
  },
  {
    label: "EDIBLES",
    slug: "edibles",
    href: "/menu/edibles",
    featured: true,
    sortOrder: 9,
    description: "Edibles and infused items from the restored catalog."
  },
  {
    label: "CARTS",
    slug: "carts",
    href: "/menu/carts",
    featured: true,
    sortOrder: 10,
    description: "Carts, disposables, and vape items."
  },
  {
    label: "CONCENTRATES",
    slug: "concentrates",
    href: "/menu/concentrates",
    featured: true,
    sortOrder: 11,
    description: "Concentrates, live resin, rosin, and extracts."
  },
  {
    label: "SPECIAL DEALS",
    slug: "special-deals",
    href: "/menu/special-deals",
    featured: true,
    sortOrder: 12,
    description: "Special deal and value menu items."
  },
  {
    label: "SHROOMS",
    slug: "shrooms",
    href: "/menu/shrooms",
    featured: true,
    sortOrder: 13,
    description: "Shroom products from the restored live menu."
  },
  {
    label: "MOONROCKS/SNOWCAPS",
    slug: "moonrocks-snowcaps",
    href: "/menu/moonrocks-snowcaps",
    featured: true,
    sortOrder: 14,
    description: "Moonrocks and snowcaps from the restored catalog."
  },
  {
    label: "LIQUIDATION SALE",
    slug: "liquidation-sale",
    href: "/menu/liquidation-sale",
    featured: true,
    sortOrder: 15,
    description: "Liquidation sale items from the restored catalog."
  }
];

const categoriesBySlug = new Map(mainStoreCategories.map((category) => [category.slug, category]));

const categoryRules = [
  ["liquidation-sale", /\b(liquidation|clearance|closeout|sale)\b/i],
  ["moonrocks-snowcaps", /\b(moon\s*rock|moonrock|snow\s*cap|snowcap)\b/i],
  ["concentrates", /\b(concentrate|resin|rosin|sugar|wax|badder|shatter|diamonds?)\b/i],
  ["prerolls", /\b(pre\s*roll|preroll|joint)\b/i],
  ["edibles", /\b(edible|gummy|gummies|fruit|candy|chocolate)\b/i],
  ["carts", /\b(cart|carts|disposable|disposables|vape|pen|gram)\b/i],
  ["shrooms", /\b(shroom|mushroom|psilocybin)\b/i],
  ["smalls-mediums", /\b(small|smalls|medium|mediums)\b/i],
  ["special-deals", /\b(special|deal|personal special|come up)\b/i],
  ["exotic", /\b(exotic|zaza|za)\b/i],
  ["deps", /\b(dep|deps|greenhouse|light deps?)\b/i],
  ["aaa", /\baaa\b/i],
  ["indoor", /\b(indoor|indoors|licensed indoor)\b/i]
];

export function cleanRestoredProductRow(row, index = 0) {
  const category = resolveMainCategory(row);
  return {
    ...row,
    category: category.label,
    categorySlug: category.slug,
    tag: category.label,
    sortOrder: category.sortOrder * 10000 + index
  };
}

export function mainCategoryPayloads() {
  return mainStoreCategories.map((category) => ({
    label: category.label,
    slug: category.slug,
    href: category.href,
    featured: category.featured ? 1 : 0,
    sortOrder: category.sortOrder,
    seoTitle: `${category.label} Menu | FUELPACKS`,
    seoDescription: `Browse ${category.label.toLowerCase()} products from FUELPACKS with restored live product media, current variants, pricing, availability, and sales rep ordering.`,
    seoIntro: category.description,
    canonicalUrl: category.slug === "all" ? "/menu" : category.href
  }));
}

export function categoryLabel(slug) {
  return categoriesBySlug.get(slug)?.label || "SPECIAL DEALS";
}

function resolveMainCategory(row) {
  const existingSlug = normalizeSlug(row.categorySlug || row.category);
  if (categoriesBySlug.has(existingSlug) && existingSlug !== "all" && existingSlug !== "todays-drop") {
    return categoriesBySlug.get(existingSlug);
  }

  const haystack = [
    row.title,
    row.slug,
    row.category,
    row.categorySlug,
    row.tag,
    row.description,
    row.seoKeywords
  ].filter(Boolean).join(" ");
  const match = categoryRules.find(([, pattern]) => pattern.test(haystack));
  return categoriesBySlug.get(match?.[0] || "special-deals");
}

function normalizeSlug(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
