import { siteContent } from "../content/siteContent";
import "./Hero.css";

export function Hero() {
  const { brand, hours, contact, pricing } = siteContent;

  return (
    <section className="hero" id="hero" aria-labelledby="hero-title">
      <div className="hero__glow" aria-hidden="true" />

      <div className="hero__layout">
        <div className="hero__copy">
          <p className="hero__eyebrow">Family water park · {brand.locationName}</p>
          <h1 id="hero-title" className="hero__title">
            Jump into
            <span className="hero__title-accent"> the splash.</span>
          </h1>
          <p className="hero__lead">
            Waves, slides, bubbles and play — a colourful day out for the whole family under the
            Bugesera sun.
          </p>

          {pricing.publishRates ? (
            <div className="hero__rates" aria-label="Listed swim prices">
              {pricing.tickets.map((ticket) => (
                <div className="hero__rate" key={ticket.id}>
                  <span className="hero__rate-label">{ticket.name}</span>
                  <span className="hero__rate-value">{`${ticket.amount}${ticket.unit}`}</span>
                </div>
              ))}
            </div>
          ) : null}

          <div className="hero__actions">
            <a className="btn btn--primary" href="#facilities">
              Explore the Park
            </a>
            <a className="btn btn--secondary" href="#visit">
              Plan Your Visit
            </a>
          </div>

          <div className="hero__meta">
            <span>
              {hours.summary} {hours.display}
            </span>
            <span className="hero__meta-dot" aria-hidden="true" />
            <a href={contact.whatsapp.href}>WhatsApp {contact.whatsapp.display}</a>
          </div>
        </div>

        <div className="hero__stage" aria-hidden="false">
          <div className="hero__photo-shell">
            <div className="hero__photo-frame">
              <img
                className="hero__photo"
                src="/photos/hero-park.webp"
                alt="Children playing on colourful water slides and pools at Acqua Fun Bugesera"
                width={1120}
                height={1400}
                fetchPriority="high"
              />
            </div>

            <img
              className="hero__object hero__object--vest"
              src="/objects/life-vest.webp"
              alt=""
              aria-hidden="true"
              width={220}
              height={220}
              loading="eager"
            />
            <img
              className="hero__object hero__object--ball"
              src="/objects/beach-ball.webp"
              alt=""
              aria-hidden="true"
              width={110}
              height={110}
              loading="lazy"
            />

            <figure className="hero__bubu">
              <img
                src="/objects/la-bubu.webp"
                alt="La Bubu, the Acqua Fun Bugesera mascot"
                width={220}
                height={220}
                loading="eager"
              />
              <figcaption>La Bubu</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
