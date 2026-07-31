import Navbar from "../components/Navbar/Navbar";
import ContactForm from "../components/ContactForm/ContactForm";
import Footer from "../components/Footer/Footer";

function TalkToUs() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

export default TalkToUs;
