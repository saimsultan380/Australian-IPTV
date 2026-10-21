"use client";

import { useState } from "react";
import { faqs } from "@/lib/content";

export function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section" id="faq">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Questions</p>
          <h2>FAQs</h2>
        </div>
        <div className="faqs" role="list">
          {faqs.map((item, index) => {
            const open = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <div className={open ? "faq-item is-open" : "faq-item"} key={item.question} role="listitem">
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    className="faq-trigger"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(open ? -1 : index)}
                  >
                    <span className="faq-num">{String(index + 1).padStart(2, "0")}</span>
                    <span className="faq-question">{item.question}</span>
                    <span className="faq-icon" aria-hidden="true" />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="faq-panel"
                  hidden={!open}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
