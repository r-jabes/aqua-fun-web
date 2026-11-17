import { siteContent } from "../content/siteContent";
import "./Footer.css";

export function Footer() {
  const { brand, location, contact } = siteContent;

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <p className="site-footer__name">
            {brand.name.split(" ")[0]} <span>{brand.name.split(" ")[1]}</span>
          </p>
          <p className="site-footer__place">{brand.locationName}</p>
          <p>{brand.tagline}</p>
        </div>
        <nav className="site-footer__nav" aria-label="Footer">
          <a href="#facilities">Facilities</a>
          <a href="#visit">Visit</a>
          <a href="#groups">Groups</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="site-footer__meta">
          <p>{location.fullAddress}</p>
          <p>
            <a href={contact.whatsapp.href}>WhatsApp {contact.whatsapp.display}</a>
          </p>
          <p className="site-footer__copy">
            © {new Date().getFullYear()} {brand.fullName}
          </p>
        </div>
      </div>
    </footer>
  );
}
