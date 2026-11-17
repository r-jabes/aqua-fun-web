import { useState } from "react";
import type { FormEvent } from "react";
import { useInView } from "../hooks/useInView";
import { siteContent } from "../content/siteContent";
import "./Groups.css";

export function Groups() {
  const { ref, visible } = useInView<HTMLElement>();
  const [sent, setSent] = useState(false);
  const { groups, contact } = siteContent;

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <section
      ref={ref}
      className={`groups ${visible ? "is-visible" : ""}`}
      id="groups"
      aria-labelledby="groups-title"
    >
      <div className="groups__inner">
        <div className="groups__copy">
          <p className="groups__eyebrow">Plan together</p>
          <h2 id="groups-title">{groups.title}</h2>
          <p className="groups__lead">{groups.lead}</p>
          <ul className="groups__audiences">
            {groups.audiences.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <a className="btn btn--coral" href={contact.whatsapp.href}>
            WhatsApp a group date
          </a>
        </div>

        <form className="groups__form" onSubmit={onSubmit}>
          <h3>Group enquiry</h3>
          <label>
            Name
            <input name="name" type="text" required autoComplete="name" />
          </label>
          <label>
            Phone / WhatsApp
            <input name="phone" type="tel" required autoComplete="tel" />
          </label>
          <label>
            Preferred date
            <input name="date" type="date" />
          </label>
          <label>
            Group size
            <input name="size" type="number" min={1} placeholder="e.g. 25" />
          </label>
          <label>
            What do you need?
            <textarea
              name="message"
              rows={4}
              required
              placeholder="Birthday, school trip, company outing..."
            />
          </label>
          <button className="btn btn--primary" type="submit">
            {groups.ctaLabel}
          </button>
          {sent ? (
            <p className="groups__thanks">Thanks — we’ll confirm availability soon.</p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
