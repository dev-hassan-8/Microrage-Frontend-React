import { useEffect, useRef } from "react";
import aboutData from "../../data/about.json";
import "./AboutDetails.css";

const { aboutDetails } = aboutData;

function AboutDetails() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const items = el.querySelectorAll(".ad-animate");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("ad-animate--visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="ad-section" ref={sectionRef} aria-label="About Details">
      <div className="ad-container">
        <div className="ad-grid">
          <div className="ad-col ad-animate">
            <h2 className="ad-heading">{aboutDetails.aboutTitle}</h2>
            <p className="ad-paragraph">{aboutDetails.aboutDescription}</p>
          </div>

          <div className="ad-col ad-animate">
            <h2 className="ad-heading">{aboutDetails.vision.title}</h2>
            <p className="ad-paragraph ad-paragraph--quote">
              {aboutDetails.vision.description}
            </p>
          </div>
        </div>

        <hr className="ad-divider" />

        <div className="ad-grid">
          <div className="ad-col ad-animate">
            <h2 className="ad-heading">{aboutDetails.mission.title}</h2>
            <p className="ad-paragraph">{aboutDetails.mission.description}</p>
            <ul className="ad-list">
              {aboutDetails.mission.points.map((point) => (
                <li key={point} className="ad-list-item">
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="ad-col ad-animate">
            <h2 className="ad-heading">
              {aboutDetails.technologySection.title}
            </h2>
            <p className="ad-paragraph">
              {aboutDetails.technologySection.paragraph1}
            </p>
            <p className="ad-paragraph">
              {aboutDetails.technologySection.paragraph2}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutDetails;
