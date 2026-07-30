import { useState } from "react";

const telegramUsername = String(import.meta.env.VITE_TELEGRAM_ORDER_USERNAME || "")
  .replace(/^@/, "")
  .trim();

function getLinePrice(item) {
  return Number(item.selectedVariant?.price ?? item.price ?? 0);
}

function buildTelegramOrderMessage(cart, subtotal) {
  const itemCount = cart.reduce((sum, item) => sum + Number(item.quantity || 0), 0);
  return [
    "New Fuelpacks order",
    "",
    `Items count: ${itemCount}`,
    `Total: $${Number(subtotal || 0).toFixed(2)}`,
    "",
    "Items:",
    ...cart.map(
      (item, index) =>
        `${index + 1}. ${item.quantity} x ${item.title}${item.selectedVariant?.name ? ` (${item.selectedVariant.name})` : ""} - $${(
          getLinePrice(item) * item.quantity
        ).toFixed(2)}`
    )
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

function buildTelegramUrls(message) {
  const text = encodeURIComponent(message);
  if (telegramUsername) {
    const domain = encodeURIComponent(telegramUsername);
    return {
      app: `tg://resolve?domain=${domain}&text=${text}`,
      web: `https://t.me/${domain}?text=${text}`
    };
  }

  return {
    app: `tg://msg_url?text=${text}`,
    web: `https://t.me/share/url?text=${text}`
  };
}

function openTelegramOrderChat(message) {
  const urls = buildTelegramUrls(message);
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
  const [status, setStatus] = useState("");
  const subtotal = cart.reduce((sum, item) => sum + getLinePrice(item) * item.quantity, 0);

  async function sendTelegramOrder(event) {
    event.preventDefault();
    if (!cart.length) return;

    setStatus("");
    try {
      const orderMessage = buildTelegramOrderMessage(cart, subtotal);
      const copied = await copyOrderMessage(orderMessage);

      setStatus(copied ? "Order details copied. Telegram chat is opening." : "Telegram chat is opening.");
      onOrderPlaced?.();
      openTelegramOrderChat(orderMessage);
    } catch (error) {
      setStatus(error.message || "Telegram checkout failed. Please try again.");
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
          <form className="fp-checkout-form" onSubmit={sendTelegramOrder}>
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

            <footer>
              <div>
                <span>Subtotal</span>
                <strong>${subtotal.toFixed(2)}</strong>
              </div>
              <button type="submit">
                Send order on Telegram -&gt;
              </button>
              {status ? <p className="fp-checkout-status">{status}</p> : null}
              <p>NO PAYMENT PROCESSED ON-SITE - TELEGRAM OPENS WITH YOUR ORDER DETAILS</p>
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
