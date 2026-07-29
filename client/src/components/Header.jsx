export function Header({ settings }) {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Fuel Packaging home">
        <span className="brand-mark">f</span>
        <span>{settings.logoText}</span>
      </a>
      <nav className="nav-links" aria-label="Primary navigation">
        <a href="#capabilities">Capabilities</a>
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
      <a className="header-cta" href="#contact">
        Request a quote
      </a>
    </header>
  );
}
