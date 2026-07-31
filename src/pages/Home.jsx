import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import Innovate from "../components/Innovate/Innovate";
import CaseStudies from "../components/CaseStudies/CaseStudies";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import Testimonials from "../components/Testimonials/Testimonials";
import KeyClients from "../components/KeyClients/KeyClients";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Services />
        <Innovate />
        <CaseStudies />
        <WhyChooseUs />
        <Testimonials />
        <KeyClients />
      </main>
      <Footer />
    </>
  );
}

export default Home;
