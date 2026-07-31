import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import CaseStudyHero from "../components/CaseStudy/CaseStudyHero";
import CaseStudyList from "../components/CaseStudy/CaseStudyList";
import ContactForm from "../components/ContactForm/ContactForm";

function CaseStudy() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <CaseStudyHero />
        <CaseStudyList />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

export default CaseStudy;
