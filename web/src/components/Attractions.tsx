import type { CSSProperties } from "react";
import { useInView } from "../hooks/useInView";
import { siteContent } from "../content/siteContent";
import "./Attractions.css";

function AttractionBlock({
  item,
  index,
}: {
  item: (typeof siteContent.attractions)[number];
  index: number;
}) {
  const { ref, visible } = useInView<HTMLElement>();

  return (
    <article
      ref={ref}
      id={item.id}
      className={`attraction attraction--${item.layout} ${visible ? "is-visible" : ""}`}
      style={{ "--delay": `${Math.min(index * 40, 160)}ms` } as CSSProperties}
    >
      <div className="attraction__visual">
        <div className="attraction__media">
          <img src={item.image} alt={item.imageAlt} loading="lazy" decoding="async" />
        </div>
        {"object" in item && item.object ? (
          <img
            className={`attractions__object ${item.object.className}`}
            src={item.object.src}
            alt=""
            aria-hidden="true"
            loading="lazy"
          />
        ) : null}
      </div>

      <div className="attraction__copy">
        <p className="attraction__cue">{item.cue}</p>
        <h3 className="attraction__title">{item.name}</h3>
        <p className="attraction__text">{item.description}</p>
      </div>
    </article>
  );
}

export function Attractions() {
  const { ref: introRef, visible: introVisible } = useInView<HTMLDivElement>();

  return (
    <section className="attractions" id="facilities" aria-labelledby="attractions-title">
      <div className="attractions__inner">
        <header
          ref={introRef}
          className={`attractions__intro ${introVisible ? "is-visible" : ""}`}
        >
          <p className="attractions__eyebrow">Park attractions</p>
          <h2 id="attractions-title" className="attractions__title">
            Six ways to <span>get wet.</span>
          </h2>
          <p className="attractions__lead">
            Wave pool, slides, bubbles, pools and play — the splash zones waiting in Bugesera.
          </p>
        </header>

        <div className="attractions__stage">
          {siteContent.attractions.map((item, index) => (
            <AttractionBlock key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
