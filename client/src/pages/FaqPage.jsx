import { useState } from "react";

export function FaqPage({ storefront }) {
  const [open, setOpen] = useState(0);

  return (
    <section className="fp-faq">
      <div className="fp-container">
        <div className="fp-kicker small">
          <span />
          FAQ
        </div>
        <h1>{storefront.content.faqTitle}</h1>
        <div className="fp-faq-list">
          {storefront.faqs.map((faq, index) => (
            <div className="fp-faq-item" key={faq.question}>
              <button
                type="button"
                aria-expanded={open === index}
                onClick={() => setOpen(open === index ? -1 : index)}
              >
                <span>{faq.question}</span>
                <b aria-hidden="true">{open === index ? "-" : "+"}</b>
              </button>
              {open === index ? <p>{faq.answer}</p> : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
