import { Link } from "react-router-dom";
import "./bpoHero.css";
import bpoData from "../../data/BusinessProcessOutsourcing.json";
import bpoBannerImg from "../../assets/webapp.webp";
import { useScrollReveal } from "../../hooks/useScrollReveal";

import key6 from "../../assets/key_6.png";
import key7 from "../../assets/key_7.png";
import key8 from "../../assets/key_8.jpg";
import key9 from "../../assets/key_9.png";

const featureImagesMap = {
    "key_6.png": key6,
    "key_7.png": key7,
    "key_8.jpg": key8,
    "key_9.png": key9,
};

function BpoHero() {
    const heroData = bpoData?.businessProcessOutsourcing || bpoData || {};
    const { headingPrefix, headingHighlight, description, image, buttons } = heroData;
    const infoData = bpoData?.bpoInfo || {};

    const [gridRef, isGridVisible] = useScrollReveal(0.1);

    return (
        <>
            <section className="bpo-hero">
                <div className="bpo-hero-container">
                    <div className="bpo-hero-left">
                        <h1 className="bpo-hero-title">
                            <span className="bpo-hero-highlight">
                                {headingPrefix}
                            </span>{" "}
                            {headingHighlight}
                        </h1>

                        <p className="bpo-hero-description">{description}</p>

                        <div className="bpo-hero-buttons">
                            {buttons &&
                                buttons.map((btn, index) => {
                                    const isDark = btn.variant === "dark";
                                    const variantClass = isDark
                                        ? "bpo-hero-btn-dark"
                                        : "bpo-hero-btn-primary";

                                    return btn.href && btn.href.startsWith("/") ? (
                                        <Link
                                            key={btn.label || index}
                                            to={btn.href}
                                            className={`bpo-hero-btn ${variantClass}`}
                                        >
                                            {btn.label}
                                        </Link>
                                    ) : (
                                        <a
                                            key={btn.label || index}
                                            href={btn.href}
                                            className={`bpo-hero-btn ${variantClass}`}
                                        >
                                            {btn.label}
                                        </a>
                                    );
                                })}
                        </div>
                    </div>

                    <div className="bpo-hero-right">
                        <img
                            src={bpoBannerImg}
                            alt={image?.alt || "Business Process Outsourcing Banner Illustration"}
                            className="bpo-hero-image"
                        />
                    </div>
                </div>
            </section>

            {infoData && infoData.heading && (
                <section className="bpo-info-section">
                    <div className="bpo-info-container">
                        <h2 className="bpo-info-title">{infoData.heading}</h2>
                        <p className="bpo-info-description">{infoData.description}</p>

                        {infoData.features && infoData.features.length > 0 && (
                            <div
                                ref={gridRef}
                                className={`bpo-features-grid ${
                                    isGridVisible ? "anim-fade-up" : "anim-hidden"
                                }`}
                            >
                                {infoData.features.map((item, index) => {
                                    const imgSrc =
                                        featureImagesMap[item.imageName] ||
                                        featureImagesMap[`key_${(index % 4) + 6}.png`];
                                    return (
                                        <div
                                            key={item.id || index}
                                            className="bpo-feature-card"
                                            style={{
                                                animationDelay: isGridVisible
                                                    ? `${0.06 * index}s`
                                                    : "0s",
                                            }}
                                        >
                                            <div className="bpo-feature-img-wrapper">
                                                <img
                                                    src={imgSrc}
                                                    alt={
                                                        item.title ||
                                                        `BPO Feature ${index + 1}`
                                                    }
                                                    className="bpo-feature-img"
                                                    loading="lazy"
                                                />
                                            </div>
                                            {item.title && (
                                                <h3 className="bpo-feature-title">
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

export default BpoHero;
