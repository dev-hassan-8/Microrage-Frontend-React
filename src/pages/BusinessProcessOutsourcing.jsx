import Navbar from "../components/Navbar/Navbar";
import BpoHero from "../components/BusinessProcessOutsourcing/bpoHero";
import ContactForm from "../components/ContactForm/ContactForm";
import Footer from "../components/Footer/Footer";

function BusinessProcessOutsourcing() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <BpoHero />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

export default BusinessProcessOutsourcing;