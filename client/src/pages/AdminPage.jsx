import { useEffect, useMemo, useState } from "react";
import {
  cleanupAdminRestoredProducts,
  deleteAdminProduct,
  getAdminAnalytics,
  getAdminSession,
  getAdminStorefront,
  loginAdmin,
  logoutAdmin,
  restoreAdminLiveProducts,
  saveAdminCategory,
  saveAdminProduct,
  updateAdminOrderStatus,
  updateAdminContent,
  updateAdminSettings,
  uploadAdminAsset
} from "../lib/storefrontApi";
import { fallbackStorefront } from "../data/storefrontData";
import { scoreProductSeo } from "../lib/seo";
import { ProductMediaImage } from "../components/storefront/ProductMediaImage";

const emptyProduct = {
  title: "",
  slug: "",
  category: "Carts",
  categorySlug: "carts",
  price: 0,
  tag: "NEW",
  inventory: 0,
  status: "active",
  image: "",
  video: "",
  gallery: [],
  variants: [{ name: "Single", price: 0, inventory: 0 }],
  hues: ["hsl(342, 30%, 18%)", "hsl(342, 40%, 35%)", "hsl(342, 50%, 60%)"],
  seoTitle: "",
  seoDescription: "",
  seoKeywords: "",
  seoFocusKeyphrase: "",
  canonicalUrl: "",
  imageAlt: "",
  brand: "",
  sku: "",
  reviewRating: "",
  reviewCount: ""
};

const emptyAnalytics = {
  totals: { events: 0, pageViews: 0, productViews: 0, clicks: 0 },
  topPages: [],
  topProducts: [],
  clickTypes: [],
  recentEvents: []
};

const adminProductsPerPage = 20;
const tabs = ["Dashboard", "Orders", "Products", "Live Restore", "SEO Analytics", "Categories", "Content", "Settings"];

export function AdminPage() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [data, setData] = useState({ ...fallbackStorefront, orders: [] });
  const [status, setStatus] = useState("");
  const [admin, setAdmin] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(emptyProduct);
  const [analytics, setAnalytics] = useState(emptyAnalytics);
  const [restoreResult, setRestoreResult] = useState(null);
  const [productPage, setProductPage] = useState(1);
  const [categoryDraft, setCategoryDraft] = useState({
    id: null,
    label: "",
    slug: "",
    href: "",
    seoTitle: "",
    seoDescription: "",
    seoIntro: "",
    canonicalUrl: "",
    featured: false
  });

  useEffect(() => {
    getAdminSession()
      .then((session) => {
        setAdmin(session.admin);
        return refresh();
      })
      .catch(() => {
        setAdmin(null);
      })
      .finally(() => setAuthLoading(false));
  }, []);

  const metrics = useMemo(() => {
    const totalProducts = data.products.length;
    const activeProducts = data.products.filter((product) => product.status === "active").length;
    const draftProducts = data.products.filter((product) => product.status === "draft").length;
    const inventory = data.products.reduce((sum, product) => sum + Number(product.inventory || 0), 0);
    const catalogValue = data.products.reduce(
      (sum, product) => sum + Number(product.inventory || 0) * Number(product.price || 0),
      0
    );
    return { totalProducts, activeProducts, draftProducts, inventory, catalogValue };
  }, [data.products]);
  const productPageCount = Math.max(1, Math.ceil(data.products.length / adminProductsPerPage));
  const paginatedProducts = data.products.slice(
    (Math.min(productPage, productPageCount) - 1) * adminProductsPerPage,
    Math.min(productPage, productPageCount) * adminProductsPerPage
  );

  useEffect(() => {
    setProductPage((page) => Math.min(page, productPageCount));
  }, [productPageCount]);

  function refresh() {
    return Promise.all([
      getAdminStorefront(),
      getAdminAnalytics().catch(() => emptyAnalytics)
    ])
      .then(([payload, analyticsPayload]) => {
        setData({ ...payload, orders: payload.orders || [] });
        setAnalytics({ ...emptyAnalytics, ...analyticsPayload });
      })
      .catch(() => {
        setStatus("Admin data is temporarily unavailable. Check the server and database connection.");
      });
  }

  async function handleLogin(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    try {
      const session = await loginAdmin({
        email: form.get("email"),
        password: form.get("password")
      });
      setAdmin(session.admin);
      setStatus("Signed in.");
      await refresh();
    } catch (error) {
      setStatus(error.message);
    }
  }

  function handleLogout() {
    logoutAdmin();
    setAdmin(null);
    setStatus("");
  }

  async function submitSettings(event) {
    event.preventDefault();
    await updateAdminSettings(Object.fromEntries(new FormData(event.currentTarget).entries()));
    setStatus("Settings saved.");
    await refresh();
  }

  async function submitContent(event) {
    event.preventDefault();
    await updateAdminContent(Object.fromEntries(new FormData(event.currentTarget).entries()));
    setStatus("Content saved.");
    await refresh();
  }

  async function submitProduct(event) {
    event.preventDefault();
    const payload = {
      ...selectedProduct,
      slug: selectedProduct.slug || slugify(selectedProduct.title),
      price: Number(selectedProduct.price || 0),
      inventory: Number(selectedProduct.inventory || 0),
      gallery: Array.isArray(selectedProduct.gallery)
        ? selectedProduct.gallery
        : String(selectedProduct.gallery || "").split("\n").map((item) => item.trim()).filter(Boolean),
      variants: Array.isArray(selectedProduct.variants)
        ? selectedProduct.variants.map((variant) => ({
            name: variant.name,
            price: Number(variant.price || 0),
            inventory: Number(variant.inventory || 0)
          }))
        : String(selectedProduct.variants || "").split("\n").map(parseVariant).filter(Boolean),
      hues: Array.isArray(selectedProduct.hues)
        ? selectedProduct.hues
        : String(selectedProduct.hues || "").split(",").map((hue) => hue.trim()).filter(Boolean),
      seoTitle: selectedProduct.seoTitle || "",
      seoDescription: selectedProduct.seoDescription || "",
      seoKeywords: selectedProduct.seoKeywords || "",
      seoFocusKeyphrase: selectedProduct.seoFocusKeyphrase || "",
      canonicalUrl: selectedProduct.canonicalUrl || "",
      imageAlt: selectedProduct.imageAlt || "",
      video: selectedProduct.video || "",
      brand: selectedProduct.brand || "",
      sku: selectedProduct.sku || "",
      reviewRating: selectedProduct.reviewRating ? Number(selectedProduct.reviewRating) : null,
      reviewCount: selectedProduct.reviewCount ? Number(selectedProduct.reviewCount) : null
    };
    const saved = await saveAdminProduct(payload);
    setSelectedProduct(emptyProduct);
    setStatus(`Product saved: ${saved.title}`);
    await refresh();
    setActiveTab("Products");
  }

  async function removeProduct(product) {
    if (!product.id) {
      setStatus("Seed the database before deleting fallback products.");
      return;
    }
    await deleteAdminProduct(product.id);
    setStatus(`Product deleted: ${product.title}`);
    await refresh();
  }

  async function restoreLiveData() {
    setStatus("Restoring live products from CSV...");
    const result = await restoreAdminLiveProducts();
    setRestoreResult(result);
    setStatus(`Live restore complete: ${result.created} created, ${result.updated} updated.`);
    await refresh();
  }

  async function cleanupRestoredData() {
    setStatus("Cleaning restored products into the main categories...");
    const result = await cleanupAdminRestoredProducts();
    setRestoreResult(result);
    setStatus(`Cleanup complete: ${result.updated} products organized into ${result.categories} categories.`);
    await refresh();
  }

  async function submitCategory(event) {
    event.preventDefault();
    await saveAdminCategory({
      ...categoryDraft,
      href: categoryDraft.href || `/menu/${categoryDraft.slug}`
    });
    setCategoryDraft({ id: null, label: "", slug: "", href: "", seoTitle: "", seoDescription: "", seoIntro: "", canonicalUrl: "", featured: false });
    setStatus("Category saved.");
    await refresh();
  }

  async function changeOrderStatus(order, nextStatus) {
    await updateAdminOrderStatus(order.id, nextStatus);
    setStatus(`Order #${order.id} marked ${nextStatus}.`);
    await refresh();
  }

  function openProductEditor(product = emptyProduct) {
    setSelectedProduct(product);
    setActiveTab("ProductEditor");
  }

  if (authLoading) {
    return <div className="admin-loading">Checking admin session...</div>;
  }

  if (!admin) {
    return <AdminLogin status={status} onSubmit={handleLogin} />;
  }

  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <a className="admin-brand" href="/">
          <img src="/fuelpack-assets/logo.jpeg" alt="FUELPACKS" />
          <span>FUELPACKS Admin</span>
        </a>
        <nav>
          {tabs.map((tab) => (
            <button
              className={activeTab === tab ? "active" : ""}
              onClick={() => setActiveTab(tab)}
              type="button"
              key={tab}
            >
              {tab}
            </button>
          ))}
        </nav>
        <div className="admin-user-card">
          <span>Signed in</span>
          <strong>{admin.email}</strong>
          <button type="button" onClick={handleLogout}>Sign out</button>
        </div>
        <a className="admin-store-link" href="/">
          View storefront →
        </a>
      </aside>

      <main className="admin-main">
        <header className="admin-topbar">
          <div>
            <p>Admin console</p>
            <h1>{activeTab === "ProductEditor" ? (selectedProduct.id ? "Edit product" : "Add product") : activeTab}</h1>
          </div>
          <span>{status || "Manage content, catalog, ecommerce operations and application settings."}</span>
        </header>

        {activeTab === "Dashboard" ? (
          <>
            <section className="admin-grid">
              <Metric label="Products" value={metrics.totalProducts} />
              <Metric label="Active" value={metrics.activeProducts} />
              <Metric label="Inventory" value={metrics.inventory} />
              <Metric label="Catalog value" value={`$${metrics.catalogValue.toFixed(0)}`} />
            </section>
            <section className="admin-dashboard-panels">
              <AdminPanel title="Operational snapshot">
                <div className="admin-snapshot">
                  <div><span>Draft products</span><strong>{metrics.draftProducts}</strong></div>
                  <div><span>Categories</span><strong>{data.categories.length}</strong></div>
                  <div><span>Orders</span><strong>{data.orders?.length || 0}</strong></div>
                  <div><span>Checkout mode</span><strong>{data.settings.checkoutMode}</strong></div>
                </div>
              </AdminPanel>
              <AdminPanel title="Low inventory">
                <div className="admin-list compact">
                  {data.products.filter((product) => Number(product.inventory || 0) <= 15).slice(0, 6).map((product) => (
                    <div key={product.id || product.title}>
                      <strong>{product.title}</strong>
                      <span>{product.inventory || 0} units · {product.status}</span>
                    </div>
                  ))}
                </div>
              </AdminPanel>
            </section>
          </>
        ) : null}

        {activeTab === "Orders" ? (
          <AdminPanel title="Order requests">
            {!data.orders?.length ? (
            <div className="admin-empty-state">
              <strong>No live order requests yet.</strong>
              <p>When request-mode checkout is connected, incoming carts will appear here with customer contact, line items, status, and total.</p>
            </div>
            ) : null}
            <div className="admin-orders">
              {(data.orders || []).map((order) => (
                <div className="admin-order-row admin-order-card" key={order.id}>
                  <strong>#{order.id} · {order.customer}</strong>
                  <span>{order.status} · ${Number(order.total || 0).toFixed(2)}</span>
                  <select value={order.status} onChange={(event) => changeOrderStatus(order, event.target.value)}>
                    <option value="new">New</option>
                    <option value="contacted">Contacted</option>
                    <option value="confirmed">Confirmed</option>
                    <option value="fulfilled">Fulfilled</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                  <div className="admin-order-contact">
                    <span>Created: {formatDate(order.createdAt)}</span>
                    <span>Phone: {order.phone || "Not provided"}</span>
                    <span>Email: {order.email || "Not provided"}</span>
                  </div>
                  <div className="admin-order-lines">
                    {(Array.isArray(order.items) ? order.items : []).map((item, index) => (
                      <div key={`${order.id}-${item.slug}-${index}`}>
                        <span>{item.quantity} x {item.title}{item.variant ? ` - ${item.variant}` : ""}</span>
                        <strong>${Number(item.lineTotal || 0).toFixed(2)}</strong>
                      </div>
                    ))}
                  </div>
                  {order.notes ? <pre>{order.notes}</pre> : null}
                </div>
              ))}
            </div>
          </AdminPanel>
        ) : null}

        {activeTab === "SEO Analytics" ? (
          <SeoAnalyticsPanel analytics={analytics} onRefresh={refresh} />
        ) : null}

        {activeTab === "Content" ? (
          <AdminPanel title="Website content">
            <form className="admin-form" onSubmit={submitContent}>
              {Object.entries(data.content || {}).map(([key, value]) => (
                <label key={key}>
                  {labelize(key)}
                  {String(value).length > 80 ? (
                    <textarea name={key} defaultValue={value} rows="4" />
                  ) : (
                    <input name={key} defaultValue={value} />
                  )}
                </label>
              ))}
              <button type="submit">Save content</button>
            </form>
          </AdminPanel>
        ) : null}

        {activeTab === "Products" ? (
          <div>
            <AdminPanel title="Catalog manager">
              <div className="admin-product-toolbar">
                <button type="button" onClick={() => openProductEditor(emptyProduct)}>Add product</button>
                <span>{data.products.length} products - page {Math.min(productPage, productPageCount)} of {productPageCount}</span>
              </div>
              <div className="admin-product-list">
                {paginatedProducts.map((product) => (
                  <article className="admin-product-card" key={product.id || product.title}>
                    <ProductMediaImage sources={product.image} alt="" sizes="64px" />
                    <div>
                      <strong>{product.title}</strong>
                      <span>{product.category} · ${Number(product.price || 0).toFixed(2)} · Stock {product.inventory || 0}</span>
                    </div>
                    <StatusPill status={product.status} />
                    <SeoScorePill result={scoreProductSeo(product, data.settings)} />
                    <button type="button" onClick={() => openProductEditor(product)}>Edit</button>
                    <button type="button" className="danger" onClick={() => removeProduct(product)}>Delete</button>
                  </article>
                ))}
              </div>
              {productPageCount > 1 ? (
                <div className="admin-pagination">
                  <button
                    type="button"
                    disabled={productPage <= 1}
                    onClick={() => setProductPage((page) => Math.max(1, page - 1))}
                  >
                    Previous
                  </button>
                  <span>
                    Showing {(Math.min(productPage, productPageCount) - 1) * adminProductsPerPage + 1}
                    -
                    {Math.min(Math.min(productPage, productPageCount) * adminProductsPerPage, data.products.length)}
                    {" "}of {data.products.length}
                  </span>
                  <button
                    type="button"
                    disabled={productPage >= productPageCount}
                    onClick={() => setProductPage((page) => Math.min(productPageCount, page + 1))}
                  >
                    Next
                  </button>
                </div>
              ) : null}
            </AdminPanel>
          </div>
        ) : null}

        {activeTab === "Live Restore" ? (
          <AdminPanel title="Restore live products">
            <div className="admin-empty-state">
              <strong>Restore catalog from live products CSV.</strong>
              <p>This imports products from live products/fuelpack-live-products.csv, restores images and videos, organizes products into the main categories, and optimizes product SEO fields to score 100 with the current SEO checks.</p>
              <button type="button" onClick={restoreLiveData}>Restore live data</button>
              <button type="button" onClick={cleanupRestoredData}>Clean restored categories</button>
            </div>
            {restoreResult ? (
              <div className="admin-snapshot">
                <div><span>Total rows</span><strong>{restoreResult.total}</strong></div>
                <div><span>Created</span><strong>{restoreResult.created || 0}</strong></div>
                <div><span>Updated</span><strong>{restoreResult.updated || 0}</strong></div>
                <div><span>Categories</span><strong>{restoreResult.categories}</strong></div>
              </div>
            ) : null}
            {restoreResult?.categoryCounts ? (
              <div className="admin-list">
                {Object.entries(restoreResult.categoryCounts).map(([slug, count]) => (
                  <div key={slug}>
                    <strong>{slug}</strong>
                    <span>{count} products</span>
                  </div>
                ))}
              </div>
            ) : null}
            {restoreResult?.media ? (
              <div className="admin-snapshot">
                <div><span>Images checked</span><strong>{restoreResult.media.productsWithImages}</strong></div>
                <div><span>Videos checked</span><strong>{restoreResult.media.productsWithVideos}</strong></div>
                <div><span>Image uploads</span><strong>{restoreResult.media.imageUploads}</strong></div>
                <div><span>Video uploads</span><strong>{restoreResult.media.videoUploads}</strong></div>
              </div>
            ) : null}
          </AdminPanel>
        ) : null}

        {activeTab === "ProductEditor" ? (
          <AdminPanel title={selectedProduct.id ? "Edit product" : "Add product"}>
            <div className="admin-editor-actions">
              <button type="button" onClick={() => setActiveTab("Products")}>Back to products</button>
            </div>
            <ProductForm
              product={selectedProduct}
              setProduct={setSelectedProduct}
              onSubmit={submitProduct}
              categories={data.categories}
            />
          </AdminPanel>
        ) : null}

        {activeTab === "Categories" ? (
          <div className="admin-two-col">
            <AdminPanel title="Create category">
              <form className="admin-form" onSubmit={submitCategory}>
                <label>Label<input value={categoryDraft.label} onChange={(event) => setCategoryDraft((draft) => ({ ...draft, label: event.target.value }))} /></label>
                <label>Slug<input value={categoryDraft.slug} onChange={(event) => setCategoryDraft((draft) => ({ ...draft, slug: event.target.value }))} /></label>
                <label>Link<input value={categoryDraft.href} placeholder="/menu/category-slug" onChange={(event) => setCategoryDraft((draft) => ({ ...draft, href: event.target.value }))} /></label>
                <label>SEO title<input value={categoryDraft.seoTitle} onChange={(event) => setCategoryDraft((draft) => ({ ...draft, seoTitle: event.target.value }))} /></label>
                <label>SEO description<textarea rows="3" value={categoryDraft.seoDescription} onChange={(event) => setCategoryDraft((draft) => ({ ...draft, seoDescription: event.target.value }))} /></label>
                <label>Category intro<textarea rows="4" value={categoryDraft.seoIntro} onChange={(event) => setCategoryDraft((draft) => ({ ...draft, seoIntro: event.target.value }))} /></label>
                <label>Canonical URL<input value={categoryDraft.canonicalUrl} placeholder="/menu/category-slug" onChange={(event) => setCategoryDraft((draft) => ({ ...draft, canonicalUrl: event.target.value }))} /></label>
                <label className="admin-check">
                  <input type="checkbox" checked={categoryDraft.featured} onChange={(event) => setCategoryDraft((draft) => ({ ...draft, featured: event.target.checked }))} />
                  Featured category
                </label>
                <button type="submit">Save category</button>
              </form>
            </AdminPanel>
            <AdminPanel title="Navigation categories">
              <div className="admin-list">
                {data.categories.map((category) => (
                  <div key={category.slug || category.label}>
                    <strong>{category.label}</strong>
                    <span>{category.href} {category.featured ? "· Featured" : ""}</span>
                  </div>
                ))}
              </div>
            </AdminPanel>
          </div>
        ) : null}

        {activeTab === "Settings" ? (
          <AdminPanel title="Application settings">
            <form className="admin-form settings-form" onSubmit={submitSettings}>
              {Object.entries(data.settings || {}).map(([key, value]) => (
                <label key={key}>
                  {labelize(key)}
                  <input name={key} defaultValue={value} />
                </label>
              ))}
              <button type="submit">Save settings</button>
            </form>
          </AdminPanel>
        ) : null}
      </main>
    </div>
  );
}

function AdminLogin({ status, onSubmit }) {
  return (
    <main className="admin-login">
      <section>
        <img src="/fuelpack-assets/logo.jpeg" alt="FUELPACKS" />
        <p>Secure admin</p>
        <h1>Sign in to manage the store.</h1>
        <form className="admin-form" onSubmit={onSubmit}>
          <label>Email<input name="email" type="email" defaultValue="admin@fuelpacks.local" /></label>
          <label>Password<input name="password" type="password" placeholder="Admin password" /></label>
          <button type="submit">Sign in</button>
        </form>
        {status ? <span className="admin-login-status">{status}</span> : null}
      </section>
    </main>
  );
}

function SeoAnalyticsPanel({ analytics, onRefresh }) {
  const totals = analytics.totals || emptyAnalytics.totals;

  return (
    <div className="admin-analytics">
      <section className="admin-grid">
        <Metric label="Page views" value={totals.pageViews || 0} />
        <Metric label="Product views" value={totals.productViews || 0} />
        <Metric label="Clicks" value={totals.clicks || 0} />
        <Metric label="Events" value={totals.events || 0} />
      </section>

      <div className="admin-analytics-toolbar">
        <span>Last 30 days</span>
        <button type="button" onClick={onRefresh}>Refresh analytics</button>
      </div>

      <div className="admin-analytics-grid">
        <AdminPanel title="Most visited pages">
          <AnalyticsList
            empty="No page views tracked yet."
            rows={(analytics.topPages || []).map((item) => ({
              label: item.path,
              value: item.views
            }))}
          />
        </AdminPanel>
        <AdminPanel title="Most visited products">
          <AnalyticsList
            empty="No product visits tracked yet."
            rows={(analytics.topProducts || []).map((item) => ({
              label: item.name,
              value: `${item.total} events`,
              sub: `${item.views} views - ${item.clicks} clicks - ${item.carts} carts`
            }))}
          />
        </AdminPanel>
        <AdminPanel title="Click activity">
          <AnalyticsList
            empty="No clicks tracked yet."
            rows={(analytics.clickTypes || []).map((item) => ({
              label: labelize(item.type),
              value: item.count
            }))}
          />
        </AdminPanel>
        <AdminPanel title="Recent events">
          <AnalyticsList
            empty="No analytics events yet."
            rows={(analytics.recentEvents || []).map((item) => ({
              label: `${labelize(item.type)} - ${item.path}`,
              value: formatDate(item.createdAt),
              sub: item.productName || item.productSlug || ""
            }))}
          />
        </AdminPanel>
      </div>
    </div>
  );
}

function AnalyticsList({ rows, empty }) {
  if (!rows.length) {
    return <div className="admin-empty-state"><strong>{empty}</strong><p>Analytics will populate as visitors browse the storefront.</p></div>;
  }

  return (
    <div className="admin-analytics-list">
      {rows.map((row, index) => (
        <div key={`${row.label}-${index}`}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <strong>{row.label}</strong>
          <b>{row.value}</b>
          {row.sub ? <small>{row.sub}</small> : null}
        </div>
      ))}
    </div>
  );
}

function ProductForm({ product, setProduct, onSubmit, categories = [] }) {
  const [uploading, setUploading] = useState("");
  const seoScore = scoreProductSeo(product);
  const categoryOptions = categories.length
    ? categories
    : [{ slug: product.categorySlug || "carts", label: product.category || "Carts" }];

  function update(key, value) {
    setProduct((current) => ({ ...current, [key]: value }));
  }

  function updateCategory(slug) {
    const category = categoryOptions.find((item) => item.slug === slug);
    setProduct((current) => ({
      ...current,
      categorySlug: slug,
      category: category?.label || current.category
    }));
  }

  function updateVariant(index, key, value) {
    setProduct((current) => ({
      ...current,
      variants: (current.variants || []).map((variant, variantIndex) =>
        variantIndex === index ? { ...variant, [key]: value } : variant
      )
    }));
  }

  function addVariant() {
    setProduct((current) => ({
      ...current,
      variants: [...(current.variants || []), { name: "", price: current.price || 0, inventory: 0 }]
    }));
  }

  function removeVariant(index) {
    setProduct((current) => ({
      ...current,
      variants: (current.variants || []).filter((_, variantIndex) => variantIndex !== index)
    }));
  }

  async function uploadAsset(event, target) {
    const file = event.target.files?.[0];
    if (!file) return;
    setUploading(target);
    try {
      const asset = await uploadAdminAsset(file, product.title || file.name);
      if (target === "image") {
        update("image", asset.url);
      } else if (target === "video") {
        update("video", asset.url);
      } else {
        setProduct((current) => ({
          ...current,
          gallery: [...(current.gallery || []), asset.url],
          image: current.image || asset.url
        }));
      }
    } finally {
      setUploading("");
      event.target.value = "";
    }
  }

  return (
    <form className="admin-form" onSubmit={onSubmit}>
      <label>Product title<input value={product.title} onChange={(event) => update("title", event.target.value)} /></label>
      <label>Product slug<input value={product.slug || ""} placeholder={slugify(product.title)} onChange={(event) => update("slug", event.target.value)} /></label>
      <div className="admin-form-row">
        <label>
          Category
          <select value={product.categorySlug} onChange={(event) => updateCategory(event.target.value)}>
            {categoryOptions.map((category) => (
              <option value={category.slug} key={category.slug}>{category.label}</option>
            ))}
          </select>
        </label>
        <label>Category slug<input value={product.categorySlug} onChange={(event) => updateCategory(event.target.value)} /></label>
      </div>
      <div className="admin-form-row">
        <label>Price<input type="number" step="0.01" value={product.price} onChange={(event) => update("price", event.target.value)} /></label>
        <label>Inventory<input type="number" value={product.inventory} onChange={(event) => update("inventory", event.target.value)} /></label>
      </div>
      <div className="admin-form-row">
        <label>Badge<input value={product.tag} onChange={(event) => update("tag", event.target.value)} /></label>
        <label>Status<select value={product.status} onChange={(event) => update("status", event.target.value)}><option value="active">Active</option><option value="draft">Draft</option><option value="archived">Archived</option></select></label>
      </div>
      <label>Primary image URL<input value={product.image || ""} onChange={(event) => update("image", event.target.value)} /></label>
      <label className="admin-upload">
        Upload primary image
        <input type="file" accept="image/*" onChange={(event) => uploadAsset(event, "image")} />
        {uploading === "image" ? <span>Uploading...</span> : null}
      </label>
      <label>Gallery image URLs<textarea rows="4" value={(product.gallery || []).join("\n")} onChange={(event) => update("gallery", event.target.value)} /></label>
      <label className="admin-upload">
        Upload gallery image
        <input type="file" accept="image/*" onChange={(event) => uploadAsset(event, "gallery")} />
        {uploading === "gallery" ? <span>Uploading...</span> : null}
      </label>
      <label>Product video URL<input value={product.video || ""} onChange={(event) => update("video", event.target.value)} /></label>
      <label className="admin-upload">
        Upload product video
        <input type="file" accept="video/*" onChange={(event) => uploadAsset(event, "video")} />
        {uploading === "video" ? <span>Uploading...</span> : null}
      </label>
      <div className="admin-variant-editor">
        <div className="admin-variant-head">
          <span>Variations</span>
          <button type="button" onClick={addVariant}>Add variation</button>
        </div>
        {(product.variants || []).map((variant, index) => (
          <div className="admin-variant-row" key={`${variant.name}-${index}`}>
            <input placeholder="Name" value={variant.name} onChange={(event) => updateVariant(index, "name", event.target.value)} />
            <input placeholder="Price" type="number" step="0.01" value={variant.price} onChange={(event) => updateVariant(index, "price", event.target.value)} />
            <input placeholder="Inventory" type="number" value={variant.inventory} onChange={(event) => updateVariant(index, "inventory", event.target.value)} />
            <button type="button" onClick={() => removeVariant(index)}>Remove</button>
          </div>
        ))}
      </div>
      <label>Description<textarea rows="3" value={product.description || ""} onChange={(event) => update("description", event.target.value)} /></label>
      <div className={`admin-seo-panel ${seoScore.status}`}>
        <div className="admin-seo-score">
          <span>SEO score</span>
          <strong>{seoScore.score}</strong>
          <b>{seoScore.status === "good" ? "Good" : seoScore.status === "ok" ? "Needs work" : "Poor"}</b>
        </div>
        <div className="admin-seo-checks">
          {seoScore.checks.map((check) => (
            <div className={check.passed ? "passed" : "failed"} key={check.label}>
              <strong>{check.passed ? "Pass" : "Fix"} - {check.label}</strong>
              <span>{check.hint}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="admin-form-row">
        <label>SEO title<input value={product.seoTitle || ""} onChange={(event) => update("seoTitle", event.target.value)} /></label>
        <label>Focus keyphrase<input value={product.seoFocusKeyphrase || ""} onChange={(event) => update("seoFocusKeyphrase", event.target.value)} /></label>
      </div>
      <label>SEO meta description<textarea rows="3" value={product.seoDescription || ""} onChange={(event) => update("seoDescription", event.target.value)} /></label>
      <label>SEO keywords<input value={product.seoKeywords || ""} onChange={(event) => update("seoKeywords", event.target.value)} /></label>
      <div className="admin-form-row">
        <label>Canonical URL<input value={product.canonicalUrl || ""} placeholder={`/products/${product.slug || slugify(product.title)}`} onChange={(event) => update("canonicalUrl", event.target.value)} /></label>
        <label>Image alt text<input value={product.imageAlt || ""} onChange={(event) => update("imageAlt", event.target.value)} /></label>
      </div>
      <div className="admin-form-row">
        <label>Brand<input value={product.brand || ""} onChange={(event) => update("brand", event.target.value)} /></label>
        <label>SKU<input value={product.sku || ""} onChange={(event) => update("sku", event.target.value)} /></label>
      </div>
      <div className="admin-form-row">
        <label>Review rating<input type="number" step="0.1" min="0" max="5" value={product.reviewRating || ""} onChange={(event) => update("reviewRating", event.target.value)} /></label>
        <label>Review count<input type="number" min="0" value={product.reviewCount || ""} onChange={(event) => update("reviewCount", event.target.value)} /></label>
      </div>
      <label>Placeholder colors<input value={(product.hues || []).join(", ")} onChange={(event) => update("hues", event.target.value)} /></label>
      <button type="submit">Save product</button>
    </form>
  );
}

function Metric({ label, value }) {
  return <article className="admin-metric"><span>{label}</span><strong>{value}</strong></article>;
}

function AdminPanel({ title, children }) {
  return <section className="admin-panel"><h2>{title}</h2>{children}</section>;
}

function StatusPill({ status }) {
  return <span className={`admin-status ${status || "active"}`}>{status || "active"}</span>;
}

function SeoScorePill({ result }) {
  return <span className={`admin-seo-pill ${result.status}`}>SEO {result.score}</span>;
}

function labelize(key) {
  return key.replace(/([A-Z])/g, " $1").replace(/^./, (char) => char.toUpperCase());
}

function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function formatDate(value) {
  if (!value) return "Now";
  return new Date(value).toLocaleString();
}

function parseVariant(line) {
  const [name, price, inventory] = line.split("|").map((part) => part.trim());
  return name ? { name, price: Number(price || 0), inventory: Number(inventory || 0) } : null;
}
