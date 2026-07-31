import Navbar from "../components/Navbar/Navbar";
import AiHero from "../components/AI-MachineLearning/aiHero";
import ContactForm from "../components/ContactForm/ContactForm";
import Footer from "../components/Footer/Footer";

function AIMachineLearning() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <AiHero />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

export default AIMachineLearning;