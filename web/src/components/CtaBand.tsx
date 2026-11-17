import { siteContent } from "../content/siteContent";
import "./CtaBand.css";

export function CtaBand() {
  const { contact, brand } = siteContent;

  return (
    <section className="cta-band" aria-labelledby="cta-band-title">
      <div className="cta-band__inner">
        <div className="cta-band__copy">
          <p className="cta-band__eyebrow">Ready when you are</p>
          <h2 id="cta-band-title">Fun can wait… but why should it?</h2>
          <p>{`Jump into ${brand.locationName}'s colourful water playground today.`}</p>
        </div>
        <div className="cta-band__actions">
          <a className="btn btn--accent" href="#visit">
            Plan Your Visit
          </a>
          <a
            className="btn btn--secondary cta-band__ghost"
            href={contact.whatsapp.href}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
