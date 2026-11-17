import { useState } from "react";
import { useInView } from "../hooks/useInView";
import { siteContent } from "../content/siteContent";
import "./Faq.css";

export function Faq() {
  const { ref, visible } = useInView<HTMLElement>();
  const [openId, setOpenId] = useState<number | null>(0);

  return (
    <section
      ref={ref}
      className={`faq ${visible ? "is-visible" : ""}`}
      id="faq"
      aria-labelledby="faq-title"
    >
      <div className="faq__inner">
        <header className="faq__intro">
          <p className="faq__eyebrow">Good to know</p>
          <h2 id="faq-title">
            Questions before you <span>splash.</span>
          </h2>
          <p className="faq__lead">
            Quick answers for planning your visit. Still unsure? WhatsApp us.
          </p>
        </header>

        <div className="faq__list">
          {siteContent.faq.map((item, index) => {
            const open = openId === index;
            return (
              <div key={item.question} className={`faq__item ${open ? "is-open" : ""}`}>
                <button
                  type="button"
                  className="faq__question"
                  aria-expanded={open}
                  onClick={() => setOpenId(open ? null : index)}
                >
                  <span>{item.question}</span>
                  <span className="faq__icon" aria-hidden="true" />
                </button>
                <div className="faq__answer" hidden={!open}>
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>

        <a className="btn btn--primary faq__cta" href={siteContent.contact.whatsapp.href}>
          Ask on WhatsApp
        </a>
      </div>
    </section>
  );
}
