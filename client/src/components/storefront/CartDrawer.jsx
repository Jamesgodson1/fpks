import { useState } from "react";
import { createStoreOrder } from "../../lib/storefrontApi";

const emptyCheckout = {
  customer: "",
  phone: "",
  email: "",
  signal: "",
  deliveryArea: "",
  notes: ""
};

const telegramUsername = String(import.meta.env.VITE_TELEGRAM_ORDER_USERNAME || "")
  .replace(/^@/, "")
  .trim();

function getLinePrice(item) {
  return Number(item.selectedVariant?.price ?? item.price ?? 0);
}

function buildTelegramOrderMessage(order) {
  const items = Array.isArray(order.items) ? order.items : [];
  return [
    "New Fuelpacks order",
    "",
    `Order ID: #${order.id}`,
    `Customer: ${order.customer}`,
    `Phone: ${order.phone || "Not provided"}`,
    `Email: ${order.email || "Not provided"}`,
    `Total: $${Number(order.total || 0).toFixed(2)}`,
    "",
    "Items:",
    ...items.map(
      (item) =>
        `- ${item.quantity} x ${item.title}${item.variant ? ` (${item.variant})` : ""} - $${Number(item.lineTotal || 0).toFixed(2)}`
    ),
    order.notes ? `\n${order.notes}` : ""
  ].join("\n");
}

async function copyOrderMessage(message) {
  if (!navigator.clipboard?.writeText) return false;
  try {
    await navigator.clipboard.writeText(message);
    return true;
  } catch {
    return false;
  }
}

function buildTelegramShareUrls(message) {
  const text = encodeURIComponent(message);
  return {
    app: `tg://msg_url?text=${text}`,
    web: `https://t.me/share/url?text=${text}`
  };
}

function openTelegramShare(message) {
  const urls = buildTelegramShareUrls(message);
  let fallbackTimer;

  function cancelFallback() {
    window.clearTimeout(fallbackTimer);
    document.removeEventListener("visibilitychange", cancelFallback);
    window.removeEventListener("pagehide", cancelFallback);
  }

  document.addEventListener("visibilitychange", cancelFallback);
  window.addEventListener("pagehide", cancelFallback);

  window.location.href = urls.app;
  fallbackTimer = window.setTimeout(() => {
    window.location.href = urls.web;
  }, 1200);
}

export function CartDrawer({ cart, open, onClose, onRemove, onQuantity, onOrderPlaced }) {
  const [checkout, setCheckout] = useState(emptyCheckout);
  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const subtotal = cart.reduce((sum, item) => sum + getLinePrice(item) * item.quantity, 0);

  function updateCheckout(key, value) {
    setCheckout((current) => ({ ...current, [key]: value }));
  }

  async function submitOrder(event) {
    event.preventDefault();
    if (!cart.length || submitting) return;

    setSubmitting(true);
    setStatus("");
    try {
      const response = await createStoreOrder({
        ...checkout,
        items: cart.map((item) => ({
          id: item.id,
          slug: item.slug,
          title: item.title,
          image: item.image,
          variant: item.selectedVariant?.name || "",
          price: getLinePrice(item),
          quantity: item.quantity
        }))
      });
      const orderMessage = buildTelegramOrderMessage(response.order);
      const copied = await copyOrderMessage(orderMessage);
      const telegramMessage = telegramUsername ? `${orderMessage}\n\nSend to @${telegramUsername}` : orderMessage;

      setStatus(
        `Order #${response.order.id} saved. ${copied ? "Order message copied." : "Telegram will open with the order details."}`
      );
      setCheckout(emptyCheckout);
      onOrderPlaced?.();
      openTelegramShare(telegramMessage);
    } catch (error) {
      setStatus(error.message || "Checkout failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <div className={`fp-cart-overlay ${open ? "open" : ""}`} onClick={onClose} />
      <aside className={`fp-cart-drawer ${open ? "open" : ""}`} aria-hidden={!open}>
        <header>
          <div>
            <p>Cart</p>
            <h2>Your pack</h2>
          </div>
          <button type="button" onClick={onClose} aria-label="Close cart">
            x
          </button>
        </header>

        {cart.length ? (
          <form className="fp-checkout-form" onSubmit={submitOrder}>
            <div className="fp-cart-lines">
              {cart.map((item) => (
                <article className="fp-cart-line" key={item.cartId}>
                  <img src={item.image || "/fuelpack-assets/logo.jpeg"} alt="" />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.selectedVariant?.name || item.category}</p>
                    <strong>${getLinePrice(item).toFixed(2)}</strong>
                    <div className="fp-cart-qty">
                      <button type="button" onClick={() => onQuantity(item.cartId, -1)}>
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button type="button" onClick={() => onQuantity(item.cartId, 1)}>
                        +
                      </button>
                      <button type="button" onClick={() => onRemove(item.cartId)}>
                        Remove
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <section className="fp-checkout-fields">
              <div>
                <span>Contact info</span>
                <strong>Checkout request</strong>
              </div>
              <label>
                Name
                <input
                  value={checkout.customer}
                  onChange={(event) => updateCheckout("customer", event.target.value)}
                  required
                />
              </label>
              <label>
                Phone / Signal
                <input
                  value={checkout.phone}
                  onChange={(event) => updateCheckout("phone", event.target.value)}
                  required
                />
              </label>
              <label>
                Email
                <input
                  type="email"
                  value={checkout.email}
                  onChange={(event) => updateCheckout("email", event.target.value)}
                />
              </label>
              <label>
                Telegram / Signal handle
                <input
                  value={checkout.signal}
                  onChange={(event) => updateCheckout("signal", event.target.value)}
                />
              </label>
              <label>
                Delivery area
                <input
                  value={checkout.deliveryArea}
                  onChange={(event) => updateCheckout("deliveryArea", event.target.value)}
                  placeholder="City / neighborhood"
                />
              </label>
              <label>
                Notes
                <textarea
                  rows="3"
                  value={checkout.notes}
                  onChange={(event) => updateCheckout("notes", event.target.value)}
                  placeholder="Timing, substitutions, or instructions"
                />
              </label>
            </section>

            <footer>
              <div>
                <span>Subtotal</span>
                <strong>${subtotal.toFixed(2)}</strong>
              </div>
              <button type="submit" disabled={submitting}>
                {submitting ? "Sending..." : "Send order request ->"}
              </button>
              {status ? <p className="fp-checkout-status">{status}</p> : null}
              <p>NO PAYMENT PROCESSED ON-SITE - ORDERS HANDLED BY SALES REP</p>
            </footer>
          </form>
        ) : (
          <div className="fp-cart-empty">
            <strong>Your cart is empty.</strong>
            <p>Add products from today&apos;s drop to build a request.</p>
            <a href="/menu" onClick={onClose}>
              Shop the menu -&gt;
            </a>
            {status ? <p className="fp-checkout-status">{status}</p> : null}
          </div>
        )}
      </aside>
    </>
  );
}
