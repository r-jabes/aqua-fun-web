import { useInView } from "../hooks/useInView";
import { siteContent } from "../content/siteContent";
import "./Moments.css";

const MOMENTS = [
  { src: "/photos/moments/moment-1.webp", alt: "Guests enjoying a lively wave pool", wide: true },
  { src: "/photos/moments/moment-2.webp", alt: "Family swimming on a sunny day", wide: false },
  { src: "/photos/moments/moment-3.webp", alt: "Kids playing in foamy pool water", wide: false },
  { src: "/photos/moments/moment-4.webp", alt: "Bright blue water under open sky", wide: true },
];

export function Moments() {
  const { ref, visible } = useInView<HTMLElement>();
  const { brand } = siteContent;

  return (
    <section
      ref={ref}
      className={`moments ${visible ? "is-visible" : ""}`}
      id="moments"
      aria-labelledby="moments-title"
    >
      <div className="moments__inner">
        <header className="moments__intro">
          <p className="moments__eyebrow">Park moments</p>
          <h2 id="moments-title" className="moments__title">
            Wet, sunny, <span>happy.</span>
          </h2>
          <p className="moments__lead">
            The vibe of a {brand.locationName} splash day — tag us{" "}
            <strong>{brand.socialHandle}</strong> when you visit.
          </p>
        </header>

        <div className="moments__grid">
          {MOMENTS.map((item) => (
            <figure
              key={item.src + item.alt}
              className={`moments__shot ${item.wide ? "moments__shot--wide" : ""}`}
            >
              <img src={item.src} alt={item.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
