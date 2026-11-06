
import { useState } from "react";
import { Plus, Minus, ArrowUpRight } from "lucide-react";
import "./FAQSection.css";

export default function FAQSection({ t }) {
  const faq = t.faq;
  const [activeIndex, setActiveIndex] = useState(0);

  if (!faq) return null;

  return (
    <section className="faq-section" id="faq">
      <div className="wrap faq-layout">
        <div className="faq-intro">
          <span className="faq-eyebrow">
            <span />
            {faq.eyebrow}
          </span>

          <h2>{faq.title}</h2>
          <p>{faq.subtitle}</p>

          <a className="faq-contact-link" href="#contact">
            <span>{t.nav.contact}</span>
            <ArrowUpRight size={17} />
          </a>

          <div className="faq-side-decoration" aria-hidden="true">
            <div className="faq-decoration-ring ring-one" />
            <div className="faq-decoration-ring ring-two" />
            <div className="faq-decoration-center">
              <span>?</span>
            </div>
          </div>
        </div>

        <div className="faq-list">
          {faq.items.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <article
                className={`faq-item ${isOpen ? "is-open" : ""}`}
                key={item.question}
              >
                <button
                  className="faq-question"
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() =>
                    setActiveIndex(isOpen ? -1 : index)
                  }
                >
                  <span className="faq-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="faq-question-text">
                    {item.question}
                  </span>

                  <span className="faq-toggle">
                    {isOpen ? (
                      <Minus size={17} />
                    ) : (
                      <Plus size={17} />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
