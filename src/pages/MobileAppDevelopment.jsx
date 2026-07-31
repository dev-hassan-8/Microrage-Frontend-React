import Navbar from "../components/Navbar/Navbar";
import MobileHero from "../components/MobileAppDevelopment/mobileHero";
import ContactForm from "../components/ContactForm/ContactForm";
import Footer from "../components/Footer/Footer";

function MobileAppDevelopment() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <MobileHero />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

export default MobileAppDevelopment;