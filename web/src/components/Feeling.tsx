import { useInView } from "../hooks/useInView";
import "./Feeling.css";

export function Feeling() {
  const { ref, visible } = useInView<HTMLElement>();

  return (
    <section
      ref={ref}
      className={`feeling ${visible ? "is-visible" : ""}`}
      id="feeling"
      aria-labelledby="feeling-title"
    >
      <div className="feeling__inner">
        <div className="feeling__copy">
          <p className="feeling__eyebrow">Why families come</p>
          <h2 id="feeling-title" className="feeling__title">
            A playground
            <br />
            made of water.
          </h2>
          <p className="feeling__text">
            From rolling waves to bubble foam and open blue pools, Acqua Fun Bugesera is built for
            sunny splash days — parents, kids and friends all in the mix.
          </p>
          <ul className="feeling__pillars">
            <li>Splash together</li>
            <li>Play all day</li>
            <li>Cool off in Bugesera sun</li>
          </ul>
        </div>

        <div className="feeling__visual">
          <img
            src="/photos/feeling.webp"
            alt="Bright blue water on a sunny day"
            width={1400}
            height={900}
            loading="lazy"
          />
          <img
            className="feeling__object"
            src="/objects/beach-ball.webp"
            alt=""
            aria-hidden="true"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
