import Navbar from "./Component/Navbar";
import Welcoming from "./Views/Welcoming";
import AboutUs from "./Views/AboutUs";
import Works from "./Views/Works";
import Services from "./Views/Services";
import Testimonials from "./Views/Testimonial";
import Footer from "./Views/Footer";

function App() {

  return (
    <>
      <div className="max-w-[1380px]">
        <Navbar />
        <div className='w-full cust-container'>
          <Welcoming />
          <AboutUs />
          <Works />
          <Services />
          <Testimonials />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
