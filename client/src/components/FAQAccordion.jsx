import { useState } from "react";

export function FAQAccordion({ faqs }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="faq-list">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <article className="faq-item" key={faq.question}>
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
            >
              <span>{faq.question}</span>
              <span aria-hidden="true">{isOpen ? "-" : "+"}</span>
            </button>
            {isOpen ? <p>{faq.answer}</p> : null}
          </article>
        );
      })}
    </div>
  );
}
