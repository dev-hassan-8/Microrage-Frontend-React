import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/about";
import Services from "./pages/Services";
import Contact from "./pages/contact";
import TalkToUs from "./pages/TalkToUs";
import CaseStudy from "./pages/casestudy";
import WebApplicationDevelopment from "./pages/WebApplicationDevelopment";
import MobileAppDevelopment from "./pages/MobileAppDevelopment";
import ECommerceDevelopment from "./pages/E-commerceDevelopment";
import AIMachineLearning from "./pages/AI-MachineLearning";
import IotSolutions from "./pages/IotSolutions";
import StrategicConsultancy from "./pages/StrategicConsultancy";
import BusinessProcessOutsourcing from "./pages/BusinessProcessOutsourcing";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/casestudy" element={<CaseStudy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/talk-to-us" element={<TalkToUs />} />
        <Route path="/web-application-development" element={<WebApplicationDevelopment />}/>
        <Route path="/mobile-app-development" element={<MobileAppDevelopment />}/>
        <Route path="/e-commerce-development" element={<ECommerceDevelopment />}/>
        <Route path="/ai-machine-learning" element={<AIMachineLearning />}/>
        <Route path="/iot-solutions" element={<IotSolutions />}/>
        <Route path="/strategic-consultancy" element={<StrategicConsultancy />}/>
        <Route path="/business-process-outsourcing" element={<BusinessProcessOutsourcing />}/>
      </Routes>
    </>
  );
}

export default App;
