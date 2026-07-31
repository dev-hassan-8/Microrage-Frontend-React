import Navbar from "../components/Navbar/Navbar";
import WebHero from "../components/WebApplicationDevelopment/webHero";
import ContactForm from "../components/ContactForm/ContactForm";
import Footer from "../components/Footer/Footer";

function WebApplicationDevelopment() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <WebHero />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

export default WebApplicationDevelopment;