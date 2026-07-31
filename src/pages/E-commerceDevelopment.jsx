import Navbar from "../components/Navbar/Navbar";
import EcmHero from "../components/E-commerceDevelopment/ecmHero";
import ContactForm from "../components/ContactForm/ContactForm";
import Footer from "../components/Footer/Footer";

function ECommerceDevelopment() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <EcmHero />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

export default ECommerceDevelopment;