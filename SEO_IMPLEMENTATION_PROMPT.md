# Master Prompt: SEO & Performance Optimization For Fuelpacks E-Commerce Website

You are a Senior Software Engineer, Technical SEO Engineer, Web Performance Engineer, Accessibility Engineer, and E-Commerce Optimization Specialist.

Your task is to optimize the existing Fuelpacks e-commerce website for Google Search, Bing, AI search engines, Core Web Vitals, accessibility, crawlability, and production performance.

Do not rebuild the website from scratch. Do not redesign the UI unless a change is required for SEO, accessibility, performance, or semantic correctness. Preserve the current React/Vite frontend, Node.js backend, MySQL database integration, Cloudinary upload flow, admin authentication, product management, checkout request flow, and Telegram order notification support.

## Primary Goals

Optimize the site for:

- Google indexing and organic ranking
- Bing indexing
- AI search visibility and answer extraction
- Product rich results
- Core Web Vitals
- Lighthouse SEO, performance, accessibility, and best practices
- Mobile-first indexing
- Crawlability
- Fast product/category discovery
- Clean product and category URLs
- Secure, production-ready deployment

## Execution Rules

Before editing code:

1. Inspect the project structure.
2. Identify all frontend routes and backend API routes.
3. Identify SEO, performance, accessibility, and crawlability gaps.
4. Produce a concise audit report.
5. Create an implementation checklist.
6. Implement changes incrementally.
7. Verify with builds/tests after every major group of changes.
8. Do not expose server, database, Prisma, MySQL, or secret-related errors in the UI.
9. Do not remove existing functionality.

## Phase 1: Audit

Audit the app for:

- Missing or duplicate titles
- Missing or duplicate meta descriptions
- Missing canonical URLs
- Missing Open Graph tags
- Missing Twitter card tags
- Missing robots directives
- Missing H1 tags
- Multiple H1 tags per page
- Missing image alt text
- Broken internal links
- Product pages without unique URLs
- Category pages without indexable content
- Missing structured data
- Thin content
- Layout shifts
- Slow image loading
- Accessibility issues

Deliver:

- `docs/seo-audit.md`
- Prioritized issue list
- Implementation checklist

## Phase 2: Central SEO System

Implement or improve a centralized SEO component/system.

Every page should support:

- Unique title
- Unique description
- Canonical URL
- Robots metadata
- Open Graph title, description, image, and URL
- Twitter card title, description, and image
- Theme color
- Language metadata

Apply this to:

- Home page
- Menu page
- Category-filtered menu pages
- Product detail pages
- FAQ page
- Admin pages with `noindex`

## Phase 3: Structured Data

Add JSON-LD structured data for:

- `Organization`
- `WebSite`
- `SearchAction`
- `Product`
- `Offer`
- `BreadcrumbList`
- `FAQPage`
- `CollectionPage`

Product schema must include:

- Name
- Description
- Image
- SKU or slug
- Category
- Price
- Currency
- Availability
- URL

Admin and checkout/request pages must not be indexed.

## Phase 4: Sitemap And Robots

Generate:

- `/robots.txt`
- `/sitemap.xml`

Sitemap must include:

- Home
- Menu
- Category/menu URLs
- Product detail URLs
- FAQ

Exclude:

- `/admin`
- API routes
- Upload endpoints
- Private pages

If using a Node server, add backend routes to dynamically generate these from the current storefront data.

## Phase 5: Product Page SEO

Improve product detail pages with:

- One clear H1
- Breadcrumbs
- Product schema
- Descriptive product text
- Availability text
- Variant information
- Related products
- Image alt text
- Canonical URL
- Open Graph product image

Do not break the current variant selector or cart behavior.

## Phase 6: Category/Menu SEO

Improve category menu pages with:

- Unique category title
- Category intro copy
- Canonical URL
- CollectionPage schema
- Breadcrumbs
- Internal links to products
- Crawlable category links

Category URLs should remain clean, for example:

- `/menu`
- `/menu/carts`
- `/menu/edibles`
- `/menu/special-deals`

## Phase 7: Image SEO And Performance

Ensure all meaningful images have:

- Descriptive `alt`
- Stable dimensions or aspect-ratio
- Lazy loading where appropriate
- Eager loading only for above-the-fold critical images
- Optimized Cloudinary transformations where possible

Avoid layout shift from images.

## Phase 8: Core Web Vitals

Optimize:

- LCP under 2.5s
- INP under 200ms
- CLS under 0.1
- Lighthouse performance target 90+
- Lighthouse SEO target 100
- Lighthouse accessibility target 95+

Use:

- Code splitting where sensible
- Font preconnect/preload
- Image dimensions
- Reduced unused CSS
- Static asset caching
- API response caching where safe

## Phase 9: Accessibility

Fix:

- Missing accessible names
- Invalid nested interactive elements
- Keyboard navigation issues
- Color contrast issues
- Form labels
- Button labels
- Focus states
- Semantic landmarks

The cart drawer and checkout form must be keyboard usable.

## Phase 10: Security And Production Hardening

Add or verify:

- HTTPS expectation
- Security headers
- No sensitive backend errors in UI
- Admin pages are `noindex`
- Secure auth token handling
- Environment variables documented

Do not commit secrets.

## Phase 11: Analytics Readiness

Prepare non-breaking integration points for:

- Google Search Console verification
- GA4
- Bing Webmaster Tools

Add placeholder environment variables or documented setup steps, but do not hardcode tracking IDs.

## Phase 12: Verification

After implementation, run:

```bash
npm run build
node -e "import('./server/src/app.js').then(() => console.log('server import ok'))"
```

Also manually verify:

- Home page renders
- Menu page renders
- Product detail page renders
- Cart opens
- Checkout request submits
- Admin login still works
- Admin products still work
- Admin orders still work
- `/robots.txt` returns valid text
- `/sitemap.xml` returns valid XML

## Final Deliverables

Provide:

- Summary of changes
- Files changed
- SEO features implemented
- Remaining recommended work
- Commands run and results
- Any deployment notes

Do not finish until the build passes or clearly explain the blocker.
