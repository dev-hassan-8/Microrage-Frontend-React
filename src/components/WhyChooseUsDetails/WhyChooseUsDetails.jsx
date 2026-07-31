import {useEffect, useRef} from "react";
import aboutData from "../../data/about.json";
import "./WhyChooseUsDetails.css";

const {whyChooseUsDetails} = aboutData;

function WhyChooseUsDetails() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const cards = el.querySelectorAll(".wcu-card");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("wcu-card--visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {threshold: 0.1},
        );

        cards.forEach((card) => observer.observe(card));
        return () => observer.disconnect();
    }, []);

    return (
        <section
            className="wcu-section"
            ref={sectionRef}
            aria-labelledby="wcu-heading"
        >
            <div className="wcu-container">
                <h2 id="wcu-heading" className="wcu-title">
                    {whyChooseUsDetails.title}
                </h2>

                <div className="wcu-grid">
                    {whyChooseUsDetails.cards.map((card, index) => (
                        <article
                            key={card.title}
                            className="wcu-card"
                            style={{transitionDelay: `${index * 0.1}s`}}
                        >
                            <h3 className="wcu-card-title">{card.title}</h3>
                            <span
                                className="wcu-card-divider"
                                aria-hidden="true"
                            />
                            <p className="wcu-card-description">
                                {card.description}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default WhyChooseUsDetails;
