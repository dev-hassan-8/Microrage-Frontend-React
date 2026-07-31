import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";
import img4 from "../../assets/4.png";
import img5 from "../../assets/5.png";
import img6 from "../../assets/6.png";
import homeData from "../../data/home.json";
import "./CaseStudies.css";

const { caseStudies } = homeData;

const caseStudyCards = [
  {
    id: 1,
    image: img1,
    title: "Digital Commerce Platform",
    description:
      "End-to-end e-commerce solution with AI-powered recommendations.",
    href: "#",
  },
  {
    id: 2,
    image: img2,
    title: "Healthcare Mobile App",
    description:
      "Patient management system with real-time telemedicine capabilities.",
    href: "#",
  },
  {
    id: 3,
    image: img3,
    title: "FinTech Dashboard",
    description:
      "Advanced analytics platform for financial data visualization.",
    href: "#",
  },
  {
    id: 4,
    image: img4,
    title: "Logistics & Supply Chain",
    description:
      "Real-time tracking and optimization for global supply networks.",
    href: "#",
  },
  {
    id: 5,
    image: img5,
    title: "SaaS Productivity Suite",
    description: "Collaborative workspace tools driving enterprise efficiency.",
    href: "#",
  },
  {
    id: 6,
    image: img6,
    title: "AI Automation System",
    description:
      "Machine learning pipeline automating complex business workflows.",
    href: "#",
  },
];

function CaseStudies() {
  return (
    <section id="portfolio" className="cs-section" aria-labelledby="cs-title">
      <div className="cs-header-container">
        <h2 id="cs-title" className="cs-title">
          {caseStudies.title}
        </h2>

        <p className="cs-subheading">{caseStudies.subheading}</p>

        <p className="cs-body">
          <span className="cs-body-normal">{caseStudies.bodyNormal}</span>
          <span className="cs-body-highlight">{caseStudies.bodyHighlight}</span>
        </p>
      </div>

      <div className="cs-grid-container">
        <div className="cs-grid">
          {caseStudyCards.map((card, index) => (
            <article
              key={card.id}
              className="cs-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <a
                href={card.href}
                className="cs-card-link"
                aria-label={`Read more about ${card.title}`}
              >
                <div
                  className="cs-card-bg"
                  style={{ backgroundImage: `url(${card.image})` }}
                  aria-hidden="true"
                />

                <div className="cs-card-overlay" aria-hidden="true" />

                <div className="cs-card-content">
                  <h3 className="cs-card-title">{card.title}</h3>
                  <p className="cs-card-description">{card.description}</p>
                  <span className="cs-card-readmore">
                    Read More
                    <svg
                      className="cs-card-arrow"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CaseStudies;
