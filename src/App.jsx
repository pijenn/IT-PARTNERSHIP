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
          <AboutUs />
          <Works />
          <Services />
          <Testimonials />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
