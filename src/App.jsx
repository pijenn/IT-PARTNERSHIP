import { useState, useEffect } from "react";
import Navbar from "./Component/Navbar";
import Welcoming from "./Views/Welcoming";
import AboutUs from "./Views/AboutUs";
import Works from "./Views/Works";
import Services from "./Views/Services";
import Testimonials from "./Views/Testimonial";
import Footer from "./Views/Footer";

const App = () => {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
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

  // console.log(isScroll);

  return (
    <>
      <div className="max-w-[1380px] mx-auto">
        <Navbar sendIsScroll={isScroll} />
        <div className="w-full cust-container">
          <Welcoming />
        </div>
        <div className="bg-gradient-to-br from-[#C3D1F1] via-[#AEC1E9] to-[#7E99D4] w-full">
          <AboutUs />
        </div>
        <div className="w-full cust-container">
          <Works />
          <Services />
          <Testimonials />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
