import { fallbackData } from "./fallbackData";

export async function getSiteContent() {
  try {
    const response = await fetch("/api/site");
    if (!response.ok) throw new Error("API unavailable");
    const data = await response.json();
    if (!data?.hero || !data?.settings) return fallbackData;
    return data;
  } catch {
    return fallbackData;
  }
}

export async function submitQuote(payload) {
  const response = await fetch("/api/quotes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.message || "Unable to submit quote request.");
  }
  return data;
}
