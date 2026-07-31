import { useEffect, useRef } from "react";
import contactData from "../../data/contact.json";
import "./ContactUs.css";

const contactPage = contactData.contactPage || {};

function ContactUs() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const items = el.querySelectorAll(".contact-animate");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("contact-animate--visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef}>
      <section className="contact-section" aria-label="Contact Us Section">
        <div className="contact-container">
          <div className="contact-header contact-animate">
            <h1 className="contact-title">
              <span className="contact-title-accent">
                {contactPage.titlePrefix}
              </span>
              {contactPage.titleSuffix}
            </h1>
            <p className="contact-description">{contactPage.description}</p>
          </div>

          <div className="contact-grid">
            <div className="contact-info-col contact-animate">
              <h2 className="contact-info-heading">
                {contactPage.contactInfo.headingPrefix}
                <span className="contact-info-accent">
                  {contactPage.contactInfo.headingSuffix}
                </span>
              </h2>

              <p className="contact-address">
                {contactPage.contactInfo.address}
              </p>

              <div className="contact-details">
                <p className="contact-detail">
                  <span className="contact-detail-label">
                    {contactPage.contactInfo.phoneLabel}:{" "}
                  </span>
                  <a
                    href={contactPage.contactInfo.phoneHref}
                    className="contact-link"
                  >
                    {contactPage.contactInfo.phone}
                  </a>
                </p>

                <p className="contact-detail">
                  <span className="contact-detail-label">
                    {contactPage.contactInfo.emailLabel}:{" "}
                  </span>
                  <a
                    href={contactPage.contactInfo.emailHref}
                    className="contact-link"
                  >
                    {contactPage.contactInfo.email}
                  </a>
                </p>
              </div>
            </div>

            <div className="contact-map-col contact-animate">
              <div className="contact-map-wrapper">
                <iframe
                  src={contactPage.map.embedUrl}
                  title={contactPage.map.title}
                  className="contact-map-iframe"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="contact-banner-section contact-animate"
        aria-label="Call to action"
      >
        <div className="contact-banner-container">
          <h2 className="contact-banner-title">
            {contactPage.banner?.title ||
              "Let's build a great product together!"}
          </h2>
          {contactPage.banner?.cta && (
            <a
              href={contactPage.banner.cta.href || "#contact-form"}
              className="contact-banner-cta"
              onClick={(e) => {
                const target = document.querySelector(
                  contactPage.banner.cta.href || "#contact-form",
                );
                if (target) {
                  e.preventDefault();
                  target.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              {contactPage.banner.cta.label}
            </a>
          )}
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
