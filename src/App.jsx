import { useState, useEffect, useRef } from "react";
import Navbar from "./Component/Navbar";
import Welcoming from "./Views/Welcoming";
import AboutUs from "./Views/AboutUs";
import Works from "./Views/Works";
import Services from "./Views/Services";
import Testimonials from "./Views/Testimonial";
import Footer from "./Views/Footer";

const App = () => {
  const [isScroll, setIsScroll] = useState(false);

  const toWelcoming = useRef(null);
  const toAboutUs = useRef(null);
  const toWorks = useRef(null);
  const toServices = useRef(null);
  const toTestimonials = useRef(null);
  const toFooter = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 90) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="max-w-[1380px] mx-auto overflow-hidden font-poppins">
        <Navbar
          sendIsScroll={isScroll}
          moveTo={{
            toWelcoming,
            toWorks,
            toAboutUs,
            toServices,
            toTestimonials,
            toFooter
          }}
        />
        <div ref={toWelcoming}>
          <Welcoming scrollTo={ toAboutUs } />
        </div>
        <div ref={toAboutUs}>
          <AboutUs />
        </div>
        <div ref={toWorks}>
          <Works />
        </div>
        <div ref={toServices}>
          <Services />
        </div>
        <div ref={toTestimonials}>
          <Testimonials />
        </div>
        <div ref={toFooter}>
          <Footer scrollTo={ toWelcoming } /> 
        </div>
      </div>
    </>
  );
};

export default App;
