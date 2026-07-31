import { Link } from "react-router-dom";
import homeData from "../../data/home.json";
import "./Footer.css";

const { footer } = homeData;

function Footer() {
  const getImageUrl = (imageName) => {
    return new URL(`../../assets/${imageName}`, import.meta.url).href;
  };

  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-container">
          <div className="footer-col footer-col-brand">
            <div className="footer-logo-wrapper">
              <img
                src={getImageUrl(footer.logo.image)}
                alt={footer.logo.alt}
                className="footer-logo-img"
                loading="lazy"
              />
            </div>
            <p className="footer-description">{footer.description}</p>
          </div>

          {/* Center Column */}
          <div className="footer-col footer-col-links">
            <h3 className="footer-heading">{footer.importantLinksTitle}</h3>
            <ul className="footer-links-list">
              {footer.importantLinks.map((link) => (
                <li key={link.label} className="footer-link-item">
                  {link.href.startsWith("/") ? (
                    <Link to={link.href} className="footer-link">
                      {link.label}
                    </Link>
                  ) : (
                    <a href={link.href} className="footer-link">
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col footer-col-contact">
            <h3 className="footer-heading">{footer.contactTitle}</h3>
            <div className="footer-contact-info">
              <p className="footer-contact-line footer-address">
                {footer.contact.address}
              </p>
              <p className="footer-contact-line">
                <span>{footer.contact.phonePrefix}</span>
                <a
                  href={footer.contact.phoneHref}
                  className="footer-contact-link"
                >
                  {footer.contact.phone}
                </a>
              </p>
              <p className="footer-contact-line">
                <span>{footer.contact.emailPrefix}</span>
                <a
                  href={footer.contact.emailHref}
                  className="footer-contact-link"
                >
                  {footer.contact.email}
                </a>
              </p>
            </div>

            <div className="footer-socials">
              {footer.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className={`footer-social-btn footer-social-${social.platform}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  {social.platform === "facebook" && (
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  )}
                  {social.platform === "linkedin" && (
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="footer-copyright-bar">
        <p className="footer-copyright-text">
          {footer.copyrightPrefix}
          <strong className="footer-copyright-brand">
            {footer.copyrightBrand}
          </strong>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
