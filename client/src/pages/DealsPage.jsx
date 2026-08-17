export function DealsPage() {
  return (
    <main className="fp-deals-page">
      <div className="fp-deals-wrap">
        <div className="fp-deals-kicker">
          <span />
          DEALS
        </div>
        <h1>
          SHOP SMART.
          <br />
          <span>SAVE MORE.</span>
        </h1>

        <section>
          <div className="fp-deals-kicker">
            <span />
            ONGOING · LOYALTY PROGRAM
          </div>
          <p>Every order builds credit toward your next one. No expiration, no catch — just shop, earn, and save.</p>
          <img
            src="/deals/loyalty-program.jpeg"
            alt="Fuel Packs Loyalty Program — earn $25 credit back for every pound, stackable and redeemable on your next order"
            loading="lazy"
          />
        </section>

        <div className="fp-deals-divider" aria-hidden="true" />

        <section>
          <div className="fp-deals-kicker">
            <span />
            ACTIVE · PAYMENT DEALS
          </div>
          <h2>Pay your way, save extra.</h2>
          <div className="fp-deals-grid">
            <img
              src="/deals/crypto-deal.jpeg"
              alt="Crypto Deal — $25 off per pound on 1P+, $50 off per pound on 3P+ when paying with crypto"
              loading="lazy"
            />
            <img
              src="/deals/ctm-deal.jpeg"
              alt="Cash Thru Mail Deal — $75 off per pound on 5P+, $100 off on 10P+, $125 off on 20P+"
              loading="lazy"
            />
          </div>
        </section>

        <aside className="fp-deals-cta">
          <div>QUESTIONS ABOUT A DEAL?</div>
          <h2>HIT US ON SIGNAL</h2>
          <p>Ask your sales rep to lock in a payment deal or check your loyalty credit.</p>
          <a href="https://signal.me" target="_blank" rel="noopener noreferrer">
            CONTACT US ON SIGNAL →
          </a>
        </aside>
      </div>
    </main>
  );
}
