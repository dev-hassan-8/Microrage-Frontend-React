import { useState, useEffect, useCallback } from "react";
import homeData from "../../data/home.json";
import testimonialImg from "../../assets/testimonial-office.png";
import "./Testimonials.css";

const { testimonials } = homeData;

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fading, setFading] = useState(false);

  const switchTo = useCallback((nextIndex) => {
    setFading(true);
    setTimeout(() => {
      setActiveIndex(nextIndex);
      setFading(false);
    }, 300);
  }, []);

  const handlePrev = useCallback(() => {
    const prevIndex =
      (activeIndex - 1 + testimonials.items.length) % testimonials.items.length;
    switchTo(prevIndex);
  }, [activeIndex, switchTo]);

  const handleNext = useCallback(() => {
    const nextIndex = (activeIndex + 1) % testimonials.items.length;
    switchTo(nextIndex);
  }, [activeIndex, switchTo]);

  useEffect(() => {
    const timer = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.items.length);
        setFading(false);
      }, 300);
    }, testimonials.autoPlayDelay);

    return () => clearInterval(timer);
  }, []);

  const active = testimonials.items[activeIndex];

  return (
    <section
      id="testimonials"
      className="testi-section"
      aria-labelledby="testi-heading"
    >
      <div className="testi-container">
        <div className="testi-left">
          <div className="testi-label-wrapper">
            <span className="testi-label">{testimonials.label}</span>
            <span className="testi-label-bar" aria-hidden="true" />
          </div>

          <h2 id="testi-heading" className="testi-heading">
            {testimonials.title}
          </h2>

          <div className="testi-quote-row" aria-hidden="true">
            <span className="testi-quote-mark">&ldquo;</span>
            <div
              className="testi-nav"
              role="group"
              aria-label="Testimonial navigation"
            >
              <button
                className="testi-btn"
                onClick={handlePrev}
                aria-label="Previous testimonial"
              >
                <svg
                  width="20"
                  height="14"
                  viewBox="0 0 20 14"
                  fill="none"
                  aria-hidden="true"
                >
                  <line
                    x1="19"
                    y1="7"
                    x2="1"
                    y2="7"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <polyline
                    points="7,1 1,7 7,13"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </button>
              <button
                className="testi-btn"
                onClick={handleNext}
                aria-label="Next testimonial"
              >
                <svg
                  width="20"
                  height="14"
                  viewBox="0 0 20 14"
                  fill="none"
                  aria-hidden="true"
                >
                  <line
                    x1="1"
                    y1="7"
                    x2="19"
                    y2="7"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <polyline
                    points="13,1 19,7 13,13"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div
            className={`testi-body${fading ? " testi-body--fading" : ""}`}
            aria-live="polite"
            aria-atomic="true"
          >
            <p className="testi-paragraph">{active.paragraph}</p>
            <p className="testi-client">{active.clientName}</p>
          </div>

          <div className="testi-progress" aria-hidden="true">
            <div className="testi-progress-bar" key={activeIndex} />
          </div>

          <div
            className="testi-dots"
            role="tablist"
            aria-label="Testimonial slides"
          >
            {testimonials.items.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === activeIndex}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`testi-dot${i === activeIndex ? " testi-dot--active" : ""}`}
                onClick={() => switchTo(i)}
              />
            ))}
          </div>
        </div>

        <div className="testi-right" aria-hidden="true">
          <div className="testi-img-wrapper">
            <img
              src={testimonialImg}
              alt={testimonials.imageAlt}
              className="testi-img"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
