import { Link } from "react-router-dom";
import "./iotHero.css";
import iotData from "../../data/IotSolutions.json";
import iotBannerImg from "../../assets/iot.webp";
import { useScrollReveal } from "../../hooks/useScrollReveal";

import key0 from "../../assets/key_0.png";
import key1 from "../../assets/key_1.png";
import key2 from "../../assets/key_2.png";
import key3 from "../../assets/key_3.png";

const featureImagesMap = {
    "key_0.png": key0,
    "key_1.png": key1,
    "key_2.png": key2,
    "key_3.png": key3,
};

function IotHero() {
    const heroData = iotData?.iotSolutions || iotData || {};
    const { headingPrefix, headingHighlight, description, image, buttons } = heroData;
    const infoData = iotData?.iotInfo || {};

    const [gridRef, isGridVisible] = useScrollReveal(0.1);

    return (
        <>
            <section className="iot-hero">
                <div className="iot-hero-container">
                    <div className="iot-hero-left">
                        <h1 className="iot-hero-title">
                            <span className="iot-hero-highlight">
                                {headingPrefix}
                            </span>{" "}
                            {headingHighlight}
                        </h1>

                        <p className="iot-hero-description">{description}</p>

                        <div className="iot-hero-buttons">
                            {buttons &&
                                buttons.map((btn, index) => {
                                    const isDark = btn.variant === "dark";
                                    const variantClass = isDark
                                        ? "iot-hero-btn-dark"
                                        : "iot-hero-btn-primary";

                                    return btn.href && btn.href.startsWith("/") ? (
                                        <Link
                                            key={btn.label || index}
                                            to={btn.href}
                                            className={`iot-hero-btn ${variantClass}`}
                                        >
                                            {btn.label}
                                        </Link>
                                    ) : (
                                        <a
                                            key={btn.label || index}
                                            href={btn.href}
                                            className={`iot-hero-btn ${variantClass}`}
                                        >
                                            {btn.label}
                                        </a>
                                    );
                                })}
                        </div>
                    </div>

                    <div className="iot-hero-right">
                        <img
                            src={iotBannerImg}
                            alt={image?.alt || "IoT Solutions Banner Illustration"}
                            className="iot-hero-image"
                        />
                    </div>
                </div>
            </section>

            {infoData && infoData.heading && (
                <section className="iot-info-section">
                    <div className="iot-info-container">
                        <h2 className="iot-info-title">{infoData.heading}</h2>
                        <p className="iot-info-description">{infoData.description}</p>

                        {infoData.features && infoData.features.length > 0 && (
                            <div
                                ref={gridRef}
                                className={`iot-features-grid ${
                                    isGridVisible ? "anim-fade-up" : "anim-hidden"
                                }`}
                            >
                                {infoData.features.map((item, index) => {
                                    const imgSrc =
                                        featureImagesMap[item.imageName] ||
                                        featureImagesMap[`key_${index % 4}.png`];
                                    return (
                                        <div
                                            key={item.id || index}
                                            className="iot-feature-card"
                                            style={{
                                                animationDelay: isGridVisible
                                                    ? `${0.06 * index}s`
                                                    : "0s",
                                            }}
                                        >
                                            <div className="iot-feature-img-wrapper">
                                                <img
                                                    src={imgSrc}
                                                    alt={
                                                        item.title ||
                                                        `IoT Feature ${index + 1}`
                                                    }
                                                    className="iot-feature-img"
                                                    loading="lazy"
                                                />
                                            </div>
                                            {item.title && (
                                                <h3 className="iot-feature-title">
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

export default IotHero;
