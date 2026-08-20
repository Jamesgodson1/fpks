export function Footer({ settings }) {
  return (
    <footer className="fp-footer">
      <div className="fp-footer-grid">
        <div>
          <div className="fp-footer-logo">
            <img src={settings.logoUrl || "/fuelpack-assets/logo.jpeg"} alt={settings.brandName} />
          </div>
          <div className="fp-footer-tagline">
            FUELED · SPARK · CERTIFIED
            <br />
            LA · EST. 2024
          </div>
        </div>
        <div>
          <h2>CONTACT</h2>
          <p>
            <a className="fp-signal-link" href="https://signal.me/#eu/7Tr9iPdHr2Gn0c4F-TW42mEHKhWU4NwzFU0hjH-K6FX1HrrwwddHfowuZFfZvZ5E" target="_blank" rel="noopener noreferrer">
              Contact us on Signal
            </a>
            <br />
            Hours: 10AM — 10PM PST, daily
          </p>
        </div>
        <div>
          <h2>LINKS</h2>
          <nav className="fp-footer-links" aria-label="Footer navigation">
            <a href="/">Home</a>
            <a href="/menu">Menu</a>
            <a href="/faq">FAQ</a>
          </nav>
        </div>
      </div>
      <div className="fp-footer-payments">
        <h2>WE ACCEPT</h2>
        <div>
          <span className="cash"><b>$</b>CASH APP</span>
          <span className="zelle"><b>Z</b>ZELLE</span>
          <span className="crypto"><b>₿</b>CRYPTO</span>
          <span><b>◆</b>CTM</span>
          <span><b>✉</b>MONEY ORDER</span>
        </div>
      </div>
      <div className="fp-footer-bottom">
        <span>© 2026 {settings.brandName}</span>
        <span>NO PAYMENT PROCESSED ON-SITE · ORDERS HANDLED BY SALES REP</span>
      </div>
    </footer>
  );
}
