import { useEffect, useRef } from "react";
import casestudyData from "../../data/casestudy.json";
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";
import img4 from "../../assets/4.png";
import img5 from "../../assets/5.png";
import img6 from "../../assets/6.png";
import "./CaseStudyList.css";

const { caseStudies } = casestudyData;

const imageMap = {
  "1.png": img1,
  "2.png": img2,
  "3.png": img3,
  "4.png": img4,
  "5.png": img5,
  "6.png": img6,
};

function CaseStudyList() {
  const cardRefs = useRef([]);

  useEffect(() => {
    const observers = cardRefs.current.map((el) => {
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add("csl-card--visible");
            observer.disconnect();
          }
        },
        { threshold: 0.12 },
      );
      observer.observe(el);
      return observer;
    });
    return () => observers.forEach((obs) => obs && obs.disconnect());
  }, []);

  return (
    <section
      id="case-studies-list"
      className="csl-section"
      aria-label="Case Studies List"
    >
      <div className="csl-container">
        {caseStudies.map((study, index) => (
          <article
            key={study.id}
            className="csl-card"
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
            style={{ transitionDelay: `${index * 0.07}s` }}
          >
            <div className="csl-card-inner">
              <div className="csl-card-content">
                <h2 className="csl-card-title">{study.title}</h2>
                <p className="csl-card-description">{study.description}</p>
                <a
                  href={study.buttonLink}
                  className="csl-card-btn"
                  aria-label={`${study.buttonLabel} about ${study.title}`}
                >
                  {study.buttonLabel}
                </a>
              </div>

              <div className="csl-card-visual">
                <div className="csl-card-img-wrap">
                  <img
                    src={imageMap[study.image]}
                    alt={study.title}
                    className="csl-card-img"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CaseStudyList;
