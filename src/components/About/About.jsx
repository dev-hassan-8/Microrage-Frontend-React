import { useEffect, useRef } from "react";
import aboutData from "../../data/about.json";
import aboutImg from "../../assets/about-us.jpg";
import "./About.css";

const { about } = aboutData;

function AboutSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("about-section--visible");
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="about-section"
      ref={sectionRef}
      aria-labelledby="about-heading"
    >
      <div className="about-container">
        <div className="about-content">
          <h2 id="about-heading" className="about-heading">
            <span className="about-heading-prefix">{about.headingPrefix}</span>
            <span className="about-heading-suffix">{about.headingSuffix}</span>
          </h2>

          <p className="about-subtitle">{about.subtitle}</p>

          <p className="about-description">{about.description}</p>

          <div className="about-buttons">
            {about.buttons.map((btn) => (
              <a
                key={btn.label}
                href={btn.href}
                className={`about-btn about-btn--${btn.variant}`}
              >
                {btn.label}
              </a>
            ))}
          </div>
        </div>

        <div className="about-visual">
          <div className="about-image-wrapper">
            <img src={aboutImg} alt={about.image.alt} className="about-image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
