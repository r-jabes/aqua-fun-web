import { useEffect, useState } from "react";
import { siteContent } from "../content/siteContent";
import "./Header.css";

const NAV_LINKS = [
  { href: "#facilities", label: "Facilities" },
  { href: "#visit", label: "Visit" },
  { href: "#groups", label: "Groups" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { contact, hours, brand } = siteContent;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""} ${open ? "is-open" : ""}`}>
      <div className="site-header__bar">
        <a className="site-header__brand" href="#hero" aria-label={`${brand.fullName} home`}>
          <img src="/brand/logo.svg" alt={brand.fullName} width={168} height={46} />
        </a>

        <nav className="site-header__nav" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="site-header__actions">
          <a
            className="site-header__whatsapp"
            href={contact.whatsapp.href}
            target="_blank"
            rel="noreferrer"
            aria-label={contact.whatsapp.label}
          >
            WhatsApp
          </a>
          <a className="btn btn--primary site-header__cta" href="#visit">
            Plan your visit
          </a>
          <button
            className="site-header__menu-btn"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span className="site-header__menu-icon" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div id="mobile-nav" className={`site-header__drawer ${open ? "is-open" : ""}`}>
        <nav aria-label="Mobile">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
        <a className="btn btn--primary" href="#visit" onClick={() => setOpen(false)}>
          Plan your visit
        </a>
        <a
          className="btn btn--coral"
          href={contact.whatsapp.href}
          target="_blank"
          rel="noreferrer"
          onClick={() => setOpen(false)}
        >
          {contact.whatsapp.label}
        </a>
        <p className="site-header__drawer-meta">
          {hours.summary} · {hours.display}
        </p>
      </div>
    </header>
  );
}
