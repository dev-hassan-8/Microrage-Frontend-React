import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import AboutSection from "../components/About/About";
import AboutDetails from "../components/AboutDetails/AboutDetails";
import WhyChooseUsDetails from "../components/WhyChooseUsDetails/WhyChooseUsDetails";

function About() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <AboutSection />
        <AboutDetails />
        <WhyChooseUsDetails />
      </main>
      <Footer />
    </>
  );
}

export default About;
