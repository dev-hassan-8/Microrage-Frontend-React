import { useEffect, useRef } from "react";
import servicesData from "../../data/services.json";
import "./ServicesHero.css";

const heroData = servicesData.servicesHero || servicesData.ServicesHero;

const images = import.meta.glob("../../assets/*", { eager: true });

const getImageUrl = (imageName) => {
  if (!imageName) return "";
  for (const path in images) {
    if (path.endsWith(`/${imageName}`)) {
      return images[path].default || images[path];
    }
  }
  const baseName = imageName.split(".")[0];
  for (const path in images) {
    if (path.includes(baseName)) {
      return images[path].default || images[path];
    }
  }
  return "";
};

function ServicesHero() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("services-hero--visible");
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const imageSrc = getImageUrl(heroData?.image?.src);

  return (
    <section
      id="services-hero"
      className="services-hero"
      ref={sectionRef}
      aria-labelledby="services-hero-title"
    >
      <div className="services-hero-container">
        <div className="services-hero-content">
          <h1 id="services-hero-title" className="services-hero-title">
            <span className="services-hero-prefix">
              {heroData.headingPrefix}
            </span>{" "}
            <span className="services-hero-highlight">
              {heroData.headingHighlight}
            </span>
          </h1>

          <p className="services-hero-description">{heroData.description}</p>

          <div className="services-hero-buttons">
            {heroData.buttons.map((btn) => (
              <a
                key={btn.label}
                href={btn.href}
                className={`services-hero-btn services-hero-btn--${btn.variant}`}
              >
                {btn.label}
              </a>
            ))}
          </div>
        </div>

        <div className="services-hero-visual">
          <div className="services-hero-image-wrapper">
            <img
              src={imageSrc}
              alt={heroData.image.alt}
              className="services-hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesHero;
