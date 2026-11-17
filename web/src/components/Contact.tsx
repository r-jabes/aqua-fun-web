import { useState } from "react";
import type { FormEvent } from "react";
import { siteContent } from "../content/siteContent";
import "./Contact.css";

export function Contact() {
  const [sent, setSent] = useState(false);
  const { contact, location } = siteContent;

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="contact__inner">
        <div className="contact__copy">
          <p className="contact__eyebrow">Get in touch</p>
          <h2 id="contact-title">Let’s get you here.</h2>
          <p>
            Questions about hours, rates, directions or groups — call, WhatsApp, or send a message.
          </p>
          <div className="contact__direct">
            <a className="btn btn--primary" href={contact.whatsapp.href}>
              WhatsApp {contact.whatsapp.display}
            </a>
            {contact.phones.map((phone) => (
              <a key={phone.href} href={phone.href}>
                {phone.display}
              </a>
            ))}
          </div>
          <p className="contact__address">{location.fullAddress}</p>
        </div>

        <form className="contact__form" onSubmit={onSubmit}>
          <label>
            Name
            <input name="name" type="text" required autoComplete="name" />
          </label>
          <label>
            Phone
            <input name="phone" type="tel" required autoComplete="tel" />
          </label>
          <label>
            Message
            <textarea name="message" rows={4} required />
          </label>
          <button className="btn btn--coral" type="submit">
            Send enquiry
          </button>
          {sent ? <p className="contact__thanks">Thanks — we’ll get back to you soon.</p> : null}
        </form>
      </div>
    </section>
  );
}
