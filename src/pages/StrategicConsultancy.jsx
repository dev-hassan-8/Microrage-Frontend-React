import Navbar from "../components/Navbar/Navbar";
import StrategyHero from "../components/StrategicConsultancy/strategyHero";
import ContactForm from "../components/ContactForm/ContactForm";
import Footer from "../components/Footer/Footer";

function StrategicConsultancy() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <StrategyHero />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

export default StrategicConsultancy;