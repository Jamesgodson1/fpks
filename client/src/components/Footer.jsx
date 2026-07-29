export function Footer({ settings }) {
  return (
    <footer className="footer">
      <div>
        <a className="brand footer-brand" href="#top">
          <span className="brand-mark">f</span>
          <span>{settings.logoText}</span>
        </a>
        <p>{settings.footerDescription}</p>
      </div>
      <div>
        <h2>Site</h2>
        <a href="#capabilities">Capabilities</a>
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
      <div>
        <h2>Contact</h2>
        <a href={`mailto:${settings.contactEmail}`}>{settings.contactEmail}</a>
        <p>For RFQs, samples and timelines.</p>
      </div>
      <div>
        <h2>Service area</h2>
        <p>{settings.serviceArea}</p>
      </div>
    </footer>
  );
}
