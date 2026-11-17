import { useInView } from "../hooks/useInView";
import { siteContent } from "../content/siteContent";
import "./Visit.css";

export function Visit() {
  const { ref, visible } = useInView<HTMLElement>();
  const { hours, pricing, location, contact, visitEssentials } = siteContent;

  return (
    <section
      ref={ref}
      className={`visit ${visible ? "is-visible" : ""}`}
      id="visit"
      aria-labelledby="visit-title"
    >
      <div className="visit__inner">
        <header className="visit__intro">
          <p className="visit__eyebrow">Plan your visit</p>
          <h2 id="visit-title" className="visit__title">
            Come ready to <span>play.</span>
          </h2>
          <p className="visit__lead">
            Clear hours, location and admission info — so planning a Bugesera splash day is easy.
          </p>
        </header>

        <div className="visit__layout">
          <div className="visit__pricing" aria-labelledby="pricing-title">
            <div className="visit__pricing-head">
              <h3 id="pricing-title">Swim admission</h3>
              <span className="visit__badge">Listed rates</span>
            </div>

            {pricing.publishRates ? (
              <div className="visit__tickets">
                {pricing.tickets.map((ticket) => (
                  <article
                    key={ticket.id}
                    className={`visit__ticket ${ticket.highlight ? "visit__ticket--highlight" : ""}`}
                  >
                    <p className="visit__ticket-name">{ticket.name}</p>
                    <p className="visit__ticket-price">{`${ticket.amount}${ticket.unit}`}</p>
                    <p className="visit__ticket-detail">{ticket.detail}</p>
                  </article>
                ))}
              </div>
            ) : (
              <p className="visit__pricing-fallback">
                Admission rates change — confirm today’s swim price on WhatsApp before you visit.
              </p>
            )}

            <p className="visit__disclaimer">{pricing.disclaimer}</p>

            <a className="btn btn--primary visit__whatsapp" href={contact.whatsapp.href}>
              Confirm rates on WhatsApp
            </a>
          </div>

          <div className="visit__facts">
            <article className="visit__fact">
              <h3>Opening hours</h3>
              <p className="visit__fact-kicker">{hours.summary}</p>
              <p className="visit__fact-value">{hours.display}</p>
              <p className="visit__fact-note">{hours.note}</p>
            </article>

            <article className="visit__fact">
              <h3>Location</h3>
              <p className="visit__fact-kicker">{location.area}</p>
              <p className="visit__fact-value">{location.road}</p>
              <p className="visit__fact-note">{location.directionsNote}</p>
              <a className="visit__link" href={location.mapsUrl} target="_blank" rel="noreferrer">
                Open in Google Maps
              </a>
            </article>

            <article className="visit__fact visit__fact--action">
              <h3>WhatsApp enquiry</h3>
              <p className="visit__fact-kicker">Fastest way to plan</p>
              <a className="visit__fact-value visit__fact-value--link" href={contact.whatsapp.href}>
                {contact.whatsapp.display}
              </a>
              <a className="btn btn--coral" href={contact.whatsapp.href}>
                {contact.whatsapp.label}
              </a>
            </article>
          </div>
        </div>

        <div className="visit__bring">
          <h3>What to bring</h3>
          <ul>
            {visitEssentials.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
