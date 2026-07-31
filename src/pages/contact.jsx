import Navbar from "../components/Navbar/Navbar";
import ContactUs from "../components/ContactUs/ContactUs";
import ContactForm from "../components/ContactForm/ContactForm";
import Footer from "../components/Footer/Footer";

function Contact() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <ContactUs />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

export default Contact;
