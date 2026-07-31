import Navbar from "../components/Navbar/Navbar";
import IotHero from "../components/IotSolutions/iotHero";
import ContactForm from "../components/ContactForm/ContactForm";
import Footer from "../components/Footer/Footer";

function IotSolutions() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <IotHero />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

export default IotSolutions;