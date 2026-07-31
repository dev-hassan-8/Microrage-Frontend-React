import { Link } from "react-router-dom";
import "./ecmHero.css";
import ecommerceData from "../../data/E-commerceDevelopment.json";
import ecmImg from "../../assets/ecommerce.webp";
import { useScrollReveal } from "../../hooks/useScrollReveal";

import ecm1 from "../../assets/ecm_1.png";
import ecm2 from "../../assets/ecm_2.png";
import ecm3 from "../../assets/ecm_3.png";
import ecm4 from "../../assets/ecm_4.png";
import ecm5 from "../../assets/ecm_5.png";
import ecm6 from "../../assets/ecm_6.png";

const ecmImagesMap = {
    "ecm_1.png": ecm1,
    "ecm_2.png": ecm2,
    "ecm_3.png": ecm3,
    "ecm_4.png": ecm4,
    "ecm_5.png": ecm5,
    "ecm_6.png": ecm6,
};

function EcmHero() {
    const heroData = ecommerceData?.ecommerceDevelopment || ecommerceData || {};
    const { headingPrefix, headingHighlight, description, image, buttons } = heroData;
    const infoData = ecommerceData?.ecommerceInfo || {};

    const [gridRef, isGridVisible] = useScrollReveal(0.1);

    return (
        <>
            <section className="ecm-hero">
                <div className="ecm-hero-container">
                    <div className="ecm-hero-left">
                        <h1 className="ecm-hero-title">
                            <span className="ecm-hero-highlight">
                                {headingPrefix || "E-commerce"}
                            </span>{" "}
                            {headingHighlight || "Development"}
                        </h1>

                        <p className="ecm-hero-description">{description}</p>

                        <div className="ecm-hero-buttons">
                            {buttons &&
                                buttons.map((btn, index) => {
                                    const isPrimary = btn.variant === "primary";
                                    const isDark = btn.variant === "dark";
                                    const variantClass = isPrimary
                                        ? "ecm-hero-btn-primary"
                                        : isDark
                                        ? "ecm-hero-btn-secondary"
                                        : `ecm-hero-btn-${btn.variant || "primary"}`;

                                    return btn.href && btn.href.startsWith("/") ? (
                                        <Link
                                            key={btn.label || index}
                                            to={btn.href}
                                            className={`ecm-hero-btn ${variantClass}`}
                                        >
                                            {btn.label}
                                        </Link>
                                    ) : (
                                        <a
                                            key={btn.label || index}
                                            href={btn.href}
                                            className={`ecm-hero-btn ${variantClass}`}
                                        >
                                            {btn.label}
                                        </a>
                                    );
                                })}
                        </div>
                    </div>

                    <div className="ecm-hero-right">
                        <img
                            src={ecmImg}
                            alt={image?.alt || "E-Commerce Development Banner Illustration"}
                            className="ecm-hero-image"
                        />
                    </div>
                </div>
            </section>

            {infoData && infoData.heading && (
                <section className="ecm-info-section">
                    <div className="ecm-info-container">
                        <h2 className="ecm-info-title">{infoData.heading}</h2>
                        <p className="ecm-info-description">{infoData.description}</p>

                        {infoData.features && infoData.features.length > 0 && (
                            <div
                                ref={gridRef}
                                className={`ecm-features-grid ${
                                    isGridVisible ? "anim-fade-up" : "anim-hidden"
                                }`}
                            >
                                {infoData.features.map((item, index) => {
                                    const imgSrc =
                                        ecmImagesMap[item.imageName] ||
                                        ecmImagesMap[`ecm_${index + 1}.png`];
                                    return (
                                        <div
                                            key={item.id || index}
                                            className="ecm-feature-card"
                                            style={{
                                                animationDelay: isGridVisible
                                                    ? `${0.06 * index}s`
                                                    : "0s",
                                            }}
                                        >
                                            <div className="ecm-feature-img-wrapper">
                                                <img
                                                    src={imgSrc}
                                                    alt={
                                                        item.title ||
                                                        `E-Commerce Feature ${index + 1}`
                                                    }
                                                    className="ecm-feature-img"
                                                    loading="lazy"
                                                />
                                            </div>
                                            {item.title && (
                                                <h3 className="ecm-feature-title">
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

export default EcmHero;