import homeData from "../../data/home.json";
import bannerImg from "../../assets/main-banner-1-800x370-1-768x355-1.webp";
import "./Hero.css";

const { hero } = homeData;

function Hero() {
    return (
        <section className="hero-section" aria-labelledby="hero-title">
            <div className="hero-blob hero-blob-1"></div>
            <div className="hero-blob hero-blob-2"></div>

            <div className="hero-content">
                <h1 id="hero-title" className="hero-title">
                    <span className="hero-line">{hero.titlePrefix}</span>

                    <span className="hero-line">
                        <span className="hero-line-highlight">
                            {hero.titleHighlight}
                        </span>{" "}
                        {hero.titleSuffix}
                    </span>
                </h1>

                <p className="hero-description">{hero.description}</p>
            </div>

            <div className="hero-visual">
                <div
                    style={{
                        gap: "15px",
                        color: "black",
                        paddingRight: "70px",
                        display: "flex",
                    }}
                >
                    <div className="hero-project">
                        <h3>Have an idea for a great project?</h3>
                    </div>

                    <div className="hero-actions">
                        <a
                            className="hero-btn hero-btn-primary"
                            href={hero.primaryCta.href}
                        >
                            {hero.primaryCta.label}
                        </a>
                    </div>
                </div>

                <div className="hero-image-wrapper">
                    <img
                        src={bannerImg}
                        alt="Banner"
                        className="hero-banner-img"
                    />
                </div>
            </div>
        </section>
    );
}

export default Hero;
