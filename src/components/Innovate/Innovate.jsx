import homeData from "../../data/home.json";
import laptopImg from "../../assets/Adobe.png";
import "./Innovate.css";

const { innovate } = homeData;

function Innovate() {
  return (
    <section
      id="innovate"
      className="innovate-section"
      aria-labelledby="innovate-heading"
    >
      <div className="innovate-glow innovate-glow-1" aria-hidden="true" />
      <div className="innovate-glow innovate-glow-2" aria-hidden="true" />
      <div className="innovate-container">
        <div className="innovate-content">
          <h2 id="innovate-heading" className="innovate-heading">
            {innovate.heading}
          </h2>

          <p className="innovate-body">{innovate.body}</p>

          <p className="innovate-callout">
            {innovate.callout}
            <a
              href={innovate.calloutLinkHref}
              className="innovate-callout-link"
            >
              <span>{innovate.calloutLink}</span>
              <svg
                className="innovate-link-arrow"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            {innovate.calloutSuffix}
          </p>

          <a
            href={innovate.cta.href}
            className="innovate-cta"
            aria-label={innovate.cta.label}
          >
            <span>{innovate.cta.label}</span>
            <svg
              className="innovate-cta-icon"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>

        <div className="innovate-visual" aria-hidden="true">
          <div className="innovate-laptop-wrapper">
            <img
              src={laptopImg}
              alt="MacBook showing an innovative lightbulb concept"
              className="innovate-laptop-img"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Innovate;
