import {Link} from "react-router-dom";
import "./webHero.css";
import webApplicationData from "../../data/WebApplicationDevelopment.json";
import heroImg from "../../assets/services-banner.webp";
import toolsImg from "../../assets/tools.png";
import {useScrollReveal} from "../../hooks/useScrollReveal";

function WebHero() {
    const heroData =
        webApplicationData?.webApplicationDevelopment ||
        webApplicationData ||
        {};
    const {headingPrefix, headingHighlight, description, image, buttons} =
        heroData;
    const infoData = webApplicationData?.webAppInfo || {};
    const detailsData = webApplicationData?.webAppDetails || {};
    const {
        mainHeading,
        mainDescription,
        services = [],
        techHeading,
        techDescription,
        expertiseHeading,
        expertiseIntro,
        expertiseList = [],
    } = detailsData;

    const [heroRef, heroVisible] = useScrollReveal(0.1);
    const [infoRef, infoVisible] = useScrollReveal(0.12);
    const [detailsRef, detailsVisible] = useScrollReveal(0.1);

    return (
        <>
            <section className="web-hero" ref={heroRef}>
                <div className="web-hero-container">
                    <div
                        className={`web-hero-left${heroVisible ? " anim-slide-left" : " anim-hidden"}`}
                    >
                        <h1 className="web-hero-title">
                            <span className="web-hero-highlight">
                                {headingPrefix}
                            </span>{" "}
                            {headingHighlight}
                        </h1>

                        <p className="web-hero-description">{description}</p>

                        <div className="web-hero-buttons">
                            {buttons &&
                                buttons.map((btn, index) => {
                                    const isPrimary = btn.variant === "primary";
                                    const isDark = btn.variant === "dark";
                                    const variantClass = isPrimary
                                        ? "web-hero-btn-primary"
                                        : isDark
                                          ? "web-hero-btn-secondary"
                                          : `web-hero-btn-${btn.variant}`;

                                    return btn.href &&
                                        btn.href.startsWith("/") ? (
                                        <Link
                                            key={btn.label || index}
                                            to={btn.href}
                                            className={`web-hero-btn ${variantClass}`}
                                        >
                                            {btn.label}
                                        </Link>
                                    ) : (
                                        <a
                                            key={btn.label || index}
                                            href={btn.href}
                                            className={`web-hero-btn ${variantClass}`}
                                        >
                                            {btn.label}
                                        </a>
                                    );
                                })}
                        </div>
                    </div>

                    <div
                        className={`web-hero-right${heroVisible ? " anim-slide-right" : " anim-hidden"}`}
                    >
                        <img
                            src={heroImg}
                            alt={
                                image?.alt ||
                                "Web Application Development Illustration"
                            }
                            className="web-hero-image"
                        />
                    </div>
                </div>
            </section>

            {infoData && infoData.heading && (
                <section
                    className="webappinfo-section"
                    aria-labelledby="webappinfo-heading"
                    ref={infoRef}
                >
                    <div className="webappinfo-container">
                        <div
                            className={`webappinfo-left${infoVisible ? " anim-slide-left" : " anim-hidden"}`}
                        >
                            <h2
                                id="webappinfo-heading"
                                className="webappinfo-heading"
                            >
                                {infoData.heading}
                            </h2>

                            <p className="webappinfo-description">
                                {infoData.description}
                            </p>

                            {infoData.features && (
                                <ul
                                    className="webappinfo-checklist"
                                    aria-label="Key features"
                                >
                                    {infoData.features.map((feature, i) => (
                                        <li
                                            key={feature}
                                            className="webappinfo-checklist-item"
                                            style={{
                                                animationDelay: infoVisible
                                                    ? `${0.1 + i * 0.1}s`
                                                    : "0s",
                                            }}
                                        >
                                            <span
                                                className="webappinfo-check-icon"
                                                aria-hidden="true"
                                            >
                                                ✓
                                            </span>
                                            <span className="webappinfo-feature-text">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        <div
                            className={`webappinfo-right${infoVisible ? " anim-slide-right" : " anim-hidden"}`}
                        >
                            <img
                                src={toolsImg}
                                alt={
                                    infoData.image?.alt ||
                                    "Web Development Tools"
                                }
                                className="webappinfo-image"
                            />
                        </div>
                    </div>
                </section>
            )}

            {detailsData && mainHeading && (
                <section
                    className="webappdetails-section"
                    aria-label="Custom Web Application Development Details"
                    ref={detailsRef}
                >
                    <div
                        className={`webappdetails-container${detailsVisible ? " anim-fade-up" : " anim-hidden"}`}
                    >
                        <h2 className="webappdetails-main-heading">
                            {mainHeading}
                        </h2>

                        <p className="webappdetails-paragraph">
                            {mainDescription}
                        </p>

                        <ul className="webappdetails-list">
                            {services.map((item, i) => (
                                <li
                                    key={item}
                                    className="webappdetails-list-item"
                                    style={{
                                        animationDelay: detailsVisible
                                            ? `${0.15 + i * 0.08}s`
                                            : "0s",
                                    }}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <h3 className="webappdetails-sub-heading">
                            {techHeading}
                        </h3>

                        <p className="webappdetails-paragraph">
                            {techDescription}
                        </p>

                        <h3 className="webappdetails-sub-heading">
                            {expertiseHeading}
                        </h3>

                        <p className="webappdetails-paragraph webappdetails-expertise-intro">
                            {expertiseIntro}
                        </p>

                        <ul className="webappdetails-list">
                            {expertiseList.map((item, i) => (
                                <li
                                    key={item}
                                    className="webappdetails-list-item"
                                    style={{
                                        animationDelay: detailsVisible
                                            ? `${0.3 + i * 0.08}s`
                                            : "0s",
                                    }}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            )}
        </>
    );
}

export default WebHero;
