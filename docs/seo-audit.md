# SEO Audit And Implementation Notes

## Baseline Issues Found

- The app had one global metadata component for all storefront pages.
- Product pages did not emit product-specific title, description, canonical URL, Open Graph tags, Twitter tags, or Product JSON-LD.
- Menu/category URLs were linked, but category pages rendered the full product list instead of category-specific content.
- FAQ content did not emit FAQ structured data.
- Product pages did not expose visible breadcrumbs or BreadcrumbList structured data.
- There was no dynamic `robots.txt`.
- There was no dynamic `sitemap.xml`.
- Admin pages were protected by login, but SEO directives were not centralized for private pages.
- The static `index.html` title still referenced the old packaging site.
- Some UI text contained bad encoded characters, which reduced polish and accessibility.

## Implemented

- Added a reusable SEO helper system in `client/src/lib/seo.js`.
- Rebuilt `Seo.jsx` to support:
  - Dynamic title
  - Dynamic description
  - Canonical URL
  - Robots metadata
  - Open Graph metadata
  - Twitter card metadata
  - JSON-LD schemas
- Added route-specific metadata in `App.jsx` for:
  - Home
  - Menu
  - Category menu pages
  - Product detail pages
  - FAQ
- Added JSON-LD schemas:
  - Organization
  - WebSite
  - SearchAction
  - Product
  - Offer
  - BreadcrumbList
  - FAQPage
  - CollectionPage
- Added visible product breadcrumbs.
- Updated category menu pages to filter by category slug.
- Added category empty state content.
- Added dynamic backend routes:
  - `/robots.txt`
  - `/sitemap.xml`
- Updated static HTML defaults for Fuelpacks.
- Added font/CDN preconnects.

## Still Recommended

- Move to SSR/SSG if maximum SEO indexing is required. Vite SPA metadata is still client-rendered.
- Add product review support and AggregateRating schema once real reviews exist.
- Add richer product descriptions from admin content rather than relying on fallback short text.
- Add category intro/buying-guide copy fields to the database.
- Add image transforms through Cloudinary for WebP/AVIF responsive delivery.
- Add Search Console, Bing Webmaster Tools, and GA4 verification IDs through env/config.
- Run Lighthouse/PageSpeed in a browser environment after deployment.
