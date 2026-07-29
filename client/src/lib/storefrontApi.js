import { fallbackStorefront } from "../data/storefrontData";

async function request(path, options = {}) {
  const token = localStorage.getItem("fuelpacks_admin_token");
  const response = await fetch(path, {
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers
    },
    ...options
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.message || "Request failed.");
  }
  return data;
}

export async function getStorefront() {
  try {
    const data = await request("/api/storefront");
    return {
      settings: data.settings || fallbackStorefront.settings,
      content: data.content || fallbackStorefront.content,
      categories: data.categories?.length ? data.categories : fallbackStorefront.categories,
      products: data.products?.length ? data.products : fallbackStorefront.products,
      faqs: data.faqs?.length ? data.faqs : fallbackStorefront.faqs
    };
  } catch {
    return fallbackStorefront;
  }
}

export async function getAdminStorefront() {
  return request("/api/admin/storefront");
}

export async function getAdminAnalytics(days = 30) {
  return request(`/api/admin/analytics?days=${days}`);
}

export async function trackAnalyticsEvent(payload) {
  try {
    await request("/api/storefront/analytics", {
      method: "POST",
      body: JSON.stringify({
        path: window.location.pathname,
        referrer: document.referrer,
        ...payload
      })
    });
  } catch {
    // Analytics should never interrupt storefront usage.
  }
}

export async function loginAdmin(payload) {
  const data = await request("/api/admin/login", {
    method: "POST",
    body: JSON.stringify(payload)
  });
  localStorage.setItem("fuelpacks_admin_token", data.token);
  return data;
}

export async function getAdminSession() {
  return request("/api/admin/me");
}

export function logoutAdmin() {
  localStorage.removeItem("fuelpacks_admin_token");
}

export async function updateAdminSettings(payload) {
  return request("/api/admin/settings", {
    method: "PUT",
    body: JSON.stringify(payload)
  });
}

export async function updateAdminContent(payload) {
  return request("/api/admin/content", {
    method: "PUT",
    body: JSON.stringify(payload)
  });
}

export async function saveAdminProduct(payload) {
  return request(payload.id ? `/api/admin/products/${payload.id}` : "/api/admin/products", {
    method: payload.id ? "PUT" : "POST",
    body: JSON.stringify(payload)
  });
}

export async function deleteAdminProduct(id) {
  return request(`/api/admin/products/${id}`, {
    method: "DELETE"
  });
}

export async function restoreAdminLiveProducts() {
  return request("/api/admin/products/restore-live", {
    method: "POST"
  });
}

export async function saveAdminCategory(payload) {
  return request(payload.id ? `/api/admin/categories/${payload.id}` : "/api/admin/categories", {
    method: payload.id ? "PUT" : "POST",
    body: JSON.stringify(payload)
  });
}

export async function createStoreOrder(payload) {
  return request("/api/storefront/orders", {
    method: "POST",
    body: JSON.stringify(payload)
  });
}

export async function updateAdminOrderStatus(id, status) {
  return request(`/api/admin/orders/${id}`, {
    method: "PUT",
    body: JSON.stringify({ status })
  });
}

export async function uploadAdminAsset(file, altText = "") {
  const token = localStorage.getItem("fuelpacks_admin_token");
  const formData = new FormData();
  formData.append("file", file);
  formData.append("altText", altText);

  const response = await fetch("/api/uploads", {
    method: "POST",
    headers: token ? { Authorization: `Bearer ${token}` } : {},
    body: formData
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.message || "File upload failed.");
  }
  return data;
}

export const uploadAdminImage = uploadAdminAsset;
