import { useState } from "react";

const Navbar = ({ moveTo }) => {
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  const [isSlide, setIsSlide] = useState(false);

  const handleHoverContactUs = () => {
    setIsSlide(
        (prev) => !prev
    );
  }

  const handleClick = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="font-poppins">
      <nav className="bg-cust-light fixed w-full z-20 top-0 left-0 border-gray-200 drop-shadow-md py-1">
        <div className="cust-outer-container">
          <div className="w-full cust-container flex flex-wrap items-center justify-between py-4">
            <a href="/" className="flex items-center gap-x-3">
              <div className="h-14 w-14 object-cover">
                <img src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1684387560/Logo_BEM_nxphj5.svg" alt="" />
              </div>
              <span className="hidden sm:block lg:text-2xl text-xl font-bold whitespace-nowrap text-cust-blue">
                IT Partnership
              </span>
            </a>
            <div className="flex md:order-2">
              <div
                className="text-cust-blue relative overflow-hidden flex flex-col w-32 h-10 ring-2 ring-cust-blue hover:drop-shadow-md cursor-pointer font-medium rounded-full text-sm text-center group hover:scale-110 transition-all duration-500"
              >
                <span className="group-hover:px-1 group-hover:py-1 h-1/2 rounded-r-full w-0 group-hover:w-40 bg-gradient-to-r from-[#FA54B8] to-[#3561C0] transition-all duration-300"></span>
                <span className="group-hover:px-1 group-hover:py-1 h-1/2 rounded-r-full w-0 group-hover:w-40 bg-gradient-to-r from-[#FA54B8] to-[#3561C0] transition-all duration-500"></span>
                <p className="absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 whitespace-nowrap group-hover:text-cust-light group-hover:font-bold pointer-events-none transition-all duration-200">Contact Us</p> 
              </div>
            </div>
            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
              <ul className="bg-cust-light flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:flex-row md:space-x-4 md:mt-0 md:border-0 border-gray-700">
                <li>
                  <a
                    onClick={() => {
                      setIsOpen1(true);
                      setIsOpen2(false);
                      setIsOpen3(false);
                      setIsOpen4(false);
                      handleClick(moveTo.toWelcoming);
                    }}
                    className={`block cursor-pointer p-2 rounded md:bg-transparent md:hover:text-cust-blue md:hover:font-semibold transition-all duration-300
                    ${
                      isOpen1 ? "text-cust-blue font-semibold" : "text-cust-sky"
                    }`}
                    aria-current="page"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      setIsOpen1(false);
                      setIsOpen2(true);
                      setIsOpen3(false);
                      setIsOpen4(false);
                      handleClick(moveTo.toCourses);
                    }}
                    className={`block cursor-pointer p-2 rounded md:hover:text-cust-blue md:hover:font-semibold transition-all duration-300 md:hover:bg-transparent 
                    ${
                      isOpen2 ? "text-cust-blue font-semibold" : "text-cust-sky"
                    }`}
                  >
                    Works
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      setIsOpen1(false);
                      setIsOpen2(false);
                      setIsOpen3(true);
                      setIsOpen4(false);
                      handleClick(moveTo.toAbout);
                    }}
                    className={`block cursor-pointer p-2 rounded md:hover:text-cust-blue md:hover:font-semibold transition-all duration-300  md:hover:bg-transparent
                    ${
                      isOpen3 ? "text-cust-blue font-semibold" : "text-cust-sky"
                    }`}
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      setIsOpen1(false);
                      setIsOpen2(false);
                      setIsOpen3(false);
                      setIsOpen4(true);
                      handleClick(moveTo.toContact);
                    }}
                    className={`block cursor-pointer p-2 rounded md:hover:text-cust-blue md:hover:font-semibold transition-all duration-300 md:hover:bg-transparent
                    ${
                      isOpen4 ? "text-cust-blue font-semibold" : "text-cust-sky"
                    }`}
                  >
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
