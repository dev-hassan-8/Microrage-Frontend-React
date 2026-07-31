import chose1 from "../../assets/chose1.png";
import chose2 from "../../assets/chose2.png";
import chose3 from "../../assets/chose3.png";
import chose4 from "../../assets/chose4.png";
import "./WhyChooseUs.css";

const strategyCards = [
    {
        id: "design-develop",
        title: "Design & Develop",
        image: chose1,
        alt: "Design & Develop",
    },
    {
        id: "discover-plan",
        title: "Discover & Plan",
        image: chose2,
        alt: "Discover & Plan",
    },
    {
        id: "uat-deliver",
        title: "UAT & Deliver",
        image: chose3,
        alt: "UAT & Deliver",
    },
    {
        id: "support",
        title: "Support",
        image: chose4,
        alt: "Support",
    },
];

function WhyChooseUs() {
    return (
        <section
            id="why-choose-us"
            className="why-us-section"
            aria-labelledby="why-us-title"
        >
            <div className="why-us-container">
                <header className="why-us-header">
                    <h2 id="why-us-title" className="why-us-title">
                        Why Choose Us
                    </h2>
                    <p className="why-us-description">
                        We help clients find new opportunities and create
                        effective solutions. Our goal is to improve business
                        performance with flexible, affordable IT solutions.
                        These solutions help our clients stay ahead as their
                        market changes. We focus on delivering IT solutions that
                        add value and help our clients win in the market. Our
                        approach gives our customers a competitive edge. They
                        get scalable solutions at a low cost, without unexpected
                        expenses.
                    </p>
                    <h3 className="why-us-subheading">Our Strategy</h3>
                </header>

                <div className="why-us-grid">
                    {strategyCards.map((card) => (
                        <article key={card.id} className="why-us-card">
                            <div className="why-us-card-image-wrapper">
                                <img
                                    src={card.image}
                                    alt={card.alt}
                                    className="why-us-card-image"
                                    loading="lazy"
                                />
                            </div>
                            <h4 className="why-us-card-title">{card.title}</h4>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default WhyChooseUs;
