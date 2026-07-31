import { Link } from "react-router-dom";
import "./strategyHero.css";
import strategyData from "../../data/StrategicConsultancy.json";
import strategyBannerImg from "../../assets/strategy.webp";
import { useScrollReveal } from "../../hooks/useScrollReveal";

import key4 from "../../assets/key_4.png";
import key5 from "../../assets/key_5.png";
import key6 from "../../assets/key_6.png";
import key7 from "../../assets/key_7.png";

const featureImagesMap = {
    "key_4.png": key4,
    "key_5.png": key5,
    "key_6.png": key6,
    "key_7.png": key7,
};

function StrategyHero() {
    const heroData = strategyData?.strategicConsultancy || strategyData || {};
    const { headingPrefix, headingHighlight, description, image, buttons } = heroData;
    const infoData = strategyData?.strategyInfo || {};

    const [gridRef, isGridVisible] = useScrollReveal(0.1);

    return (
        <>
            <section className="strategy-hero">
                <div className="strategy-hero-container">
                    <div className="strategy-hero-left">
                        <h1 className="strategy-hero-title">
                            <span className="strategy-hero-highlight">
                                {headingPrefix}
                            </span>{" "}
                            {headingHighlight}
                        </h1>

                        <p className="strategy-hero-description">{description}</p>

                        <div className="strategy-hero-buttons">
                            {buttons &&
                                buttons.map((btn, index) => {
                                    const isDark = btn.variant === "dark";
                                    const variantClass = isDark
                                        ? "strategy-hero-btn-dark"
                                        : "strategy-hero-btn-primary";

                                    return btn.href && btn.href.startsWith("/") ? (
                                        <Link
                                            key={btn.label || index}
                                            to={btn.href}
                                            className={`strategy-hero-btn ${variantClass}`}
                                        >
                                            {btn.label}
                                        </Link>
                                    ) : (
                                        <a
                                            key={btn.label || index}
                                            href={btn.href}
                                            className={`strategy-hero-btn ${variantClass}`}
                                        >
                                            {btn.label}
                                        </a>
                                    );
                                })}
                        </div>
                    </div>

                    <div className="strategy-hero-right">
                        <img
                            src={strategyBannerImg}
                            alt={image?.alt || "Strategic Consultancy Banner Illustration"}
                            className="strategy-hero-image"
                        />
                    </div>
                </div>
            </section>

            {infoData && infoData.heading && (
                <section className="strategy-info-section">
                    <div className="strategy-info-container">
                        <h2 className="strategy-info-title">{infoData.heading}</h2>
                        <p className="strategy-info-description">{infoData.description}</p>

                        {infoData.features && infoData.features.length > 0 && (
                            <div
                                ref={gridRef}
                                className={`strategy-features-grid ${
                                    isGridVisible ? "anim-fade-up" : "anim-hidden"
                                }`}
                            >
                                {infoData.features.map((item, index) => {
                                    const imgSrc =
                                        featureImagesMap[item.imageName] ||
                                        featureImagesMap[`key_${(index % 4) + 4}.png`];
                                    return (
                                        <div
                                            key={item.id || index}
                                            className="strategy-feature-card"
                                            style={{
                                                animationDelay: isGridVisible
                                                    ? `${0.06 * index}s`
                                                    : "0s",
                                            }}
                                        >
                                            <div className="strategy-feature-img-wrapper">
                                                <img
                                                    src={imgSrc}
                                                    alt={
                                                        item.title ||
                                                        `Strategy Feature ${index + 1}`
                                                    }
                                                    className="strategy-feature-img"
                                                    loading="lazy"
                                                />
                                            </div>
                                            {item.title && (
                                                <h3 className="strategy-feature-title">
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

export default StrategyHero;
