import { Link } from "react-router-dom";
import homeData from "../../data/home.json";
import "./Services.css";

const { services } = homeData;

function Services() {
  return (
    <section
      id="services"
      className="services-section"
      aria-labelledby="services-title"
    >
      <div className="services-container">
        <header className="services-header">
          <p className="services-label">{services.sectionLabel}</p>
          <h2 id="services-title">{services.title}</h2>
          <p className="services-description">{services.description}</p>
        </header>

        <ul className="services-grid">
          {services.items.map((item) => (
            <li key={item.title} className="service-card">
              {item.href.startsWith("/") ? (
                <Link
                  className="service-card-link"
                  to={item.href}
                  aria-label={item.title}
                >
                  <span className="service-card-arrow" aria-hidden="true">
                    ↗
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </Link>
              ) : (
                <a
                  className="service-card-link"
                  href={item.href}
                  aria-label={item.title}
                >
                  <span className="service-card-arrow" aria-hidden="true">
                    ↗
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Services;
