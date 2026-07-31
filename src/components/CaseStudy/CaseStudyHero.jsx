import { useEffect, useRef } from "react";
import casestudyData from "../../data/casestudy.json";
import "./CaseStudyHero.css";

const { casestudyPage } = casestudyData;

function CaseStudyHero() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("csh-section--visible");
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="case-studies-hero"
      className="csh-section"
      ref={sectionRef}
      aria-labelledby="csh-heading"
    >
      <div className="csh-container">
        <h1 id="csh-heading" className="csh-heading">
          <span className="csh-heading-highlight">
            {casestudyPage.titlePrefix}
          </span>{" "}
          <span className="csh-heading-plain">{casestudyPage.titleSuffix}</span>
        </h1>

        <p className="csh-description">{casestudyPage.description}</p>
      </div>
    </section>
  );
}

export default CaseStudyHero;
