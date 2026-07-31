import { Link } from "react-router-dom";
import "./aiHero.css";
import aiData from "../../data/AI-MachineLearning.json";
import aiBannerImg from "../../assets/ai_machine.webp";
import { useScrollReveal } from "../../hooks/useScrollReveal";

import chose1 from "../../assets/chose1.png";
import chose2 from "../../assets/chose2.png";
import chose3 from "../../assets/chose3.png";
import chose4 from "../../assets/chose4.png";

const featureImagesMap = {
    "chose1.png": chose1,
    "chose2.png": chose2,
    "chose3.png": chose3,
    "chose4.png": chose4,
};

function AiHero() {
    const heroData = aiData?.aiMachineLearning || aiData || {};
    const { headingPrefix, headingHighlight, description, image, buttons } = heroData;
    const infoData = aiData?.aiInfo || {};

    const [gridRef, isGridVisible] = useScrollReveal(0.1);

    return (
        <>
            <section className="ai-hero">
                <div className="ai-hero-container">
                    <div className="ai-hero-left">
                        <h1 className="ai-hero-title">
                            {headingPrefix}{" "}
                            <span className="ai-hero-highlight">
                                {headingHighlight}
                            </span>
                        </h1>

                        <p className="ai-hero-description">{description}</p>

                        <div className="ai-hero-buttons">
                            {buttons &&
                                buttons.map((btn, index) => {
                                    const isDark = btn.variant === "dark";
                                    const variantClass = isDark
                                        ? "ai-hero-btn-dark"
                                        : "ai-hero-btn-primary";

                                    return btn.href && btn.href.startsWith("/") ? (
                                        <Link
                                            key={btn.label || index}
                                            to={btn.href}
                                            className={`ai-hero-btn ${variantClass}`}
                                        >
                                            {btn.label}
                                        </Link>
                                    ) : (
                                        <a
                                            key={btn.label || index}
                                            href={btn.href}
                                            className={`ai-hero-btn ${variantClass}`}
                                        >
                                            {btn.label}
                                        </a>
                                    );
                                })}
                        </div>
                    </div>

                    <div className="ai-hero-right">
                        <img
                            src={aiBannerImg}
                            alt={image?.alt || "AI Machine Learning Banner Illustration"}
                            className="ai-hero-image"
                        />
                    </div>
                </div>
            </section>

            {infoData && infoData.heading && (
                <section className="ai-info-section">
                    <div className="ai-info-container">
                        <h2 className="ai-info-title">{infoData.heading}</h2>
                        <p className="ai-info-description">{infoData.description}</p>

                        {infoData.features && infoData.features.length > 0 && (
                            <div
                                ref={gridRef}
                                className={`ai-features-grid ${
                                    isGridVisible ? "anim-fade-up" : "anim-hidden"
                                }`}
                            >
                                {infoData.features.map((item, index) => {
                                    const imgSrc =
                                        featureImagesMap[item.imageName] ||
                                        featureImagesMap[`chose${(index % 4) + 1}.png`];
                                    return (
                                        <div
                                            key={item.id || index}
                                            className="ai-feature-card"
                                            style={{
                                                animationDelay: isGridVisible
                                                    ? `${0.06 * index}s`
                                                    : "0s",
                                            }}
                                        >
                                            <div className="ai-feature-img-wrapper">
                                                <img
                                                    src={imgSrc}
                                                    alt={
                                                        item.title ||
                                                        `AI Feature ${index + 1}`
                                                    }
                                                    className="ai-feature-img"
                                                    loading="lazy"
                                                />
                                            </div>
                                            {item.title && (
                                                <h3 className="ai-feature-title">
                                                    {item.title}
                                                </h3>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </section>
            )}
        </>
    );
}

export default AiHero;
