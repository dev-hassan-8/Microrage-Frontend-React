import {Link} from "react-router-dom";
import "./mobileHero.css";
import mobileApplicationData from "../../data/MobileAppDevelopment.json";
import heroImg from "../../assets/webapp.webp";
import {useScrollReveal} from "../../hooks/useScrollReveal";

import app1 from "../../assets/app1.png";
import app2 from "../../assets/app2.png";
import app3 from "../../assets/app3.png";
import app4 from "../../assets/app4.png";
import app5 from "../../assets/app5.png";
import app6 from "../../assets/app6.png";
import app7 from "../../assets/app7.png";
import app8 from "../../assets/app8.png";

const appImagesMap = {
    "app1.png": app1,
    "app2.png": app2,
    "app3.png": app3,
    "app4.png": app4,
    "app5.png": app5,
    "app6.png": app6,
    "app7.png": app7,
    "app8.png": app8,
};

function MobileHero() {
    const heroData =
        mobileApplicationData?.mobileAppDevelopment ||
        mobileApplicationData ||
        {};
    const {headingPrefix, headingHighlight, description, image, buttons} =
        heroData;
    const infoData = mobileApplicationData?.mobileAppInfo || {};

    const [gridRef, isGridVisible] = useScrollReveal(0.1);

    return (
        <>
            <section className="mobile-hero">
                <div className="mobile-hero-container">
                    <div className="mobile-hero-left">
                        <h1 className="mobile-hero-title">
                            <span className="mobile-hero-highlight">
                                {headingPrefix}
                            </span>{" "}
                            {headingHighlight}
                        </h1>

                        <p className="mobile-hero-description">{description}</p>

                        <div className="mobile-hero-buttons">
                            {buttons &&
                                buttons.map((btn, index) => {
                                    const isPrimary = btn.variant === "primary";
                                    const isDark = btn.variant === "dark";
                                    const variantClass = isPrimary
                                        ? "mobile-hero-btn-primary"
                                        : isDark
                                          ? "mobile-hero-btn-secondary"
                                          : `mobile-hero-btn-${btn.variant}`;

                                    return btn.href &&
                                        btn.href.startsWith("/") ? (
                                        <Link
                                            key={btn.label || index}
                                            to={btn.href}
                                            className={`mobile-hero-btn ${variantClass}`}
                                        >
                                            {btn.label}
                                        </Link>
                                    ) : (
                                        <a
                                            key={btn.label || index}
                                            href={btn.href}
                                            className={`mobile-hero-btn ${variantClass}`}
                                        >
                                            {btn.label}
                                        </a>
                                    );
                                })}
                        </div>
                    </div>

                    <div className="mobile-hero-right">
                        <img
                            src={heroImg}
                            alt={
                                image?.alt ||
                                "Mobile App Development Illustration"
                            }
                            className="mobile-hero-image"
                        />
                    </div>
                </div>
            </section>

            {infoData && infoData.heading && (
                <section className="mobile-info-section">
                    <div className="mobile-info-container">
                        <h2 className="mobile-info-title">
                            {infoData.heading}
                        </h2>
                        <p className="mobile-info-description">
                            {infoData.description}
                        </p>

                        {infoData.features && infoData.features.length > 0 && (
                            <div
                                ref={gridRef}
                                className={`mobile-features-grid ${isGridVisible ? "anim-fade-up" : "anim-hidden"}`}
                            >
                                {infoData.features.map((item, index) => {
                                    const imgSrc =
                                        appImagesMap[item.imageName] ||
                                        appImagesMap[`app${index + 1}.png`];
                                    return (
                                        <div
                                            key={item.id || index}
                                            className="mobile-feature-card"
                                            style={{
                                                animationDelay: isGridVisible
                                                    ? `${0.06 * index}s`
                                                    : "0s",
                                            }}
                                        >
                                            <div className="mobile-feature-img-wrapper">
                                                <img
                                                    src={imgSrc}
                                                    alt={
                                                        item.title ||
                                                        `Mobile App Feature ${index + 1}`
                                                    }
                                                    className="mobile-feature-img"
                                                    loading="lazy"
                                                />
                                            </div>
                                            {item.title && (
                                                <h3 className="mobile-feature-title">
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

export default MobileHero;
