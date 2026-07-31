import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ContactForm from "../components/ContactForm/ContactForm";
import ServicesHero from "../components/Services/ServicesHero";
import Services from "../components/Services/Services";

function ServicesPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <ServicesHero />
        <Services />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

export default ServicesPage;
