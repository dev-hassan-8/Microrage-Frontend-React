import { useState, useEffect, useCallback } from "react";
import homeData from "../../data/home.json";
import "./KeyClients.css";

const { keyClients } = homeData;

function KeyClients() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [visibleCount, setVisibleCount] = useState(
        keyClients.visibleCardsDesktop,
    );

    useEffect(() => {
        const updateVisibleCount = () => {
            const width = window.innerWidth;
            if (width < 640) {
                setVisibleCount(keyClients.visibleCardsMobile);
            } else if (width < 1024) {
                setVisibleCount(keyClients.visibleCardsTablet);
            } else {
                setVisibleCount(keyClients.visibleCardsDesktop);
            }
        };

        updateVisibleCount();
        window.addEventListener("resize", updateVisibleCount);
        return () => window.removeEventListener("resize", updateVisibleCount);
    }, []);

    const maxIndex = Math.max(0, keyClients.logos.length - visibleCount);

    useEffect(() => {
        if (currentIndex > maxIndex) {
            setCurrentIndex(maxIndex);
        }
    }, [maxIndex, currentIndex]);

    const handleNext = useCallback(() => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, [maxIndex]);

    const handlePrev = useCallback(() => {
        setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    }, [maxIndex]);

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        if (isHovered) return;

        const timer = setInterval(() => {
            handleNext();
        }, keyClients.autoPlayDelay);

        return () => clearInterval(timer);
    }, [isHovered, handleNext]);

    const getImageUrl = (imageName) => {
        return new URL(`../../assets/${imageName}`, import.meta.url).href;
    };

    const totalDots = maxIndex + 1;

    return (
        <section
            id="key-clients"
            className="key-clients-section"
            aria-labelledby="key-clients-title"
        >
            <div className="key-clients-container">
                <h2 id="key-clients-title" className="key-clients-title">
                    {keyClients.title}
                </h2>

                <div
                    className="key-clients-carousel-wrapper"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <button
                        className="key-clients-nav key-clients-nav-prev"
                        onClick={handlePrev}
                        aria-label="Previous slide"
                    >
                        <svg
                            width="12"
                            height="20"
                            viewBox="0 0 12 20"
                            fill="none"
                            aria-hidden="true"
                        >
                            <path
                                d="M10 2L2 10L10 18"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>

                    <div className="key-clients-track-container">
                        <div
                            className="key-clients-track"
                            style={{
                                transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
                            }}
                        >
                            {keyClients.logos.map((logo, index) => (
                                <div
                                    key={index}
                                    className="key-clients-card-wrapper"
                                    style={{
                                        flex: `0 0 ${100 / visibleCount}%`,
                                    }}
                                >
                                    <div className="key-clients-card">
                                        <img
                                            src={getImageUrl(logo.image)}
                                            alt={logo.alt}
                                            className="key-clients-logo-img"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        className="key-clients-nav key-clients-nav-next"
                        onClick={handleNext}
                        aria-label="Next slide"
                    >
                        <svg
                            width="12"
                            height="20"
                            viewBox="0 0 12 20"
                            fill="none"
                            aria-hidden="true"
                        >
                            <path
                                d="M2 2L10 10L2 18"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>

                <div
                    className="key-clients-dots"
                    role="tablist"
                    aria-label="Key Clients slide dots"
                >
                    {Array.from({ length: totalDots }).map((_, i) => (
                        <button
                            key={i}
                            role="tab"
                            aria-selected={i === currentIndex}
                            aria-label={`Go to slide ${i + 1}`}
                            className={`key-clients-dot ${i === currentIndex ? "key-clients-dot-active" : ""}`}
                            onClick={() => handleDotClick(i)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default KeyClients;
