function Marquee({ text }) {
  return (
    <div className="fp-marquee">
      <div>
        {[0, 1, 2, 3].map((item) => (
          <span key={item}>{text}</span>
        ))}
      </div>
    </div>
  );
}

function CategoryRail({ categories }) {
  return (
    <div className="fp-cat-rail">
      {categories.map((category) => (
        <a className={category.featured ? "featured" : ""} href={category.href} key={category.label}>
          {category.featured ? <span /> : null}
          {category.label}
        </a>
      ))}
    </div>
  );
}

export function Header({ settings, categories, cartCount, active = "HOME", onCartOpen }) {
  return (
    <header className="fp-header">
      <Marquee text={settings.marquee} />
      <div className="fp-nav-row">
        <a className="fp-brand" href="/">
          <span className="fp-logo-wrap">
            <img src={settings.logoUrl || "/fuelpack-assets/logo.jpeg"} alt={settings.brandName} />
          </span>
          <span>{settings.brandName}</span>
        </a>
        <nav className="fp-main-nav" aria-label="Main navigation">
          {["HOME", "MENU", "DEALS", "FAQ"].map((item) => (
            <a className={active === item ? "active" : ""} href={item === "HOME" ? "/" : `/${item.toLowerCase()}`} key={item}>
              {item}
            </a>
          ))}
        </nav>
        <div className="fp-actions">
          <button className="fp-search" aria-label="Search">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </button>
          <button className="fp-cart" type="button" onClick={onCartOpen}>
            CART <span>{String(cartCount).padStart(2, "0")}</span>
          </button>
        </div>
      </div>
      <CategoryRail categories={categories} />
    </header>
  );
}
