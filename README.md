# Fuelspack Clone

React/Vite frontend with a Node/Express API, direct MySQL persistence, seeded site content, Cloudinary upload support, and SEO metadata.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Copy `.env.example` to `.env` and update the MySQL and Cloudinary values.
   The app uses `DB_HOST`, `DB_PORT`, `DB_DATABASE`, `DB_USERNAME`, `DB_PASSWORD`, and `DB_PERSISTENT` directly through `mysql2`.
   Set `ADMIN_EMAIL`, `ADMIN_PASSWORD`, and `ADMIN_SESSION_SECRET` before using `/admin`.

3. Create/update the database schema and seed content:

```bash
npm run seed
```

The API also checks the required MySQL tables on startup requests and creates missing store/admin tables automatically.

4. Run the app:

```bash
npm run dev
```

Frontend: `http://localhost:5173`  
API: `http://localhost:5000`

Admin: `http://localhost:5000/admin`

## Useful Commands

```bash
npm run build
npm run lint
npm run audit:live-media
npm run verify:cloudinary
npm run restore:live
npm run cleanup:restored
npm start
```

## Live Product Restore

Before restoring scraped products, verify the CSV and Cloudinary credentials:

```bash
npm run audit:live-media
npm run verify:cloudinary
```

`npm run restore:live` requires every scraped product to have a valid image and requires Cloudinary to be configured. Product images and available product videos are uploaded to Cloudinary during restore; the restore stops before writing products if Cloudinary is missing or invalid.

## Notes

The frontend includes local fallback content so the design can still be previewed before MySQL is configured. The API will use seeded database content when available.
