import { useState } from "react";

const Navbar = ({ moveTo, sendIsScroll }) => {
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  const handleClick = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="font-monserrat">
      <nav className={`bg-cust-purple w-full z-10 fixed -translate-y-24 left-0 border-gray-200 drop-shadow-md py-1 transition-all duration-300
        ${sendIsScroll && "translate-y-0"}
      `}>
        <div className="cust-outer-container">
          <div className="w-full cust-container flex items-center justify-between py-4">
            <a href="/itpartnership" className="flex items-center gap-x-1">
              <div className="h-14 w-14 object-cover">
                <img src="https://res.cloudinary.com/dkncrhkfo/image/upload/v1717003762/logoPolos_zvkiby.png" alt="MissingIMG" />
              </div>
              <span className="hidden md:block md:text-xl bg-clip-text font-semibold whitespace-nowrap text-transparent bg-gradient-to-t from-[#E02DAC] to-[#F3C86A]">
                IT Partnership
              </span>
            </a>
            <div className="flex md:order-2">
              <div
                onClick={() => {
                  handleClick(moveTo.toFooter);
                }}
                className="text-white relative overflow-hidden flex flex-col w-28 lg:w-32 h-10 ring-2 ring-white hover:ring-0 hover:drop-shadow-md cursor-pointer font-medium rounded-full text-sm text-center group hover:scale-110 transition-all duration-500"
              >
                <span className="group-hover:px-1 group-hover:py-1 h-1/2 rounded-r-full w-0 group-hover:w-40 bg-gradient-to-r from-[#E02DAC] to-[#F3C86A] transition-all duration-300"></span>
                <span className="group-hover:px-1 group-hover:py-1 h-1/2 rounded-r-full w-0 group-hover:w-40 bg-gradient-to-r from-[#E02DAC] to-[#F3C86A] transition-all duration-500"></span>
                <p className="absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 whitespace-nowrap group-hover:text-cust-light group-hover:font-bold pointer-events-none transition-all duration-200">Contact Us</p> 
              </div>
            </div>
            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
              <ul className=" flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:flex-row md:space-x-2 lg:space-x-6 md:mt-0 md:border-0 border-gray-700">
                <li>
                  <a
                    onClick={() => {
                      setIsOpen1(true);
                      setIsOpen2(false);
                      setIsOpen3(false);
                      setIsOpen4(false);
                      handleClick(moveTo.toAboutUs);
                    }}
                    className={`whitespace-nowrap block cursor-pointer p-1 rounded md:bg-transparent md:hover:text-white transition-all duration-300 hover:underline hover:text-cust-yellow hover:text-white
                    ${
                      isOpen1 ? "text-cust-yellow" : "text-white"
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
                      handleClick(moveTo.toWorks);
                    }}
                    className={`block cursor-pointer p-1 rounded md:hover:text-white transition-all duration-300 hover:underline hover:text-cust-yellow hover:text-white md:hover:bg-transparent 
                    ${
                      isOpen2 ? "text-cust-yellow" : "text-white"
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
                      handleClick(moveTo.toServices);
                    }}
                    className={`block cursor-pointer p-1 rounded md:hover:text-white transition-all duration-300 hover:underline hover:text-cust-yellow hover:text-white  md:hover:bg-transparent
                    ${
                      isOpen3 ? "text-cust-yellow" : "text-white"
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
            handleClick(moveTo.toTestimonials);
              }}
              className={`block cursor-pointer p-1 rounded transition-all duration-300 md:hover:text-white hover:text-cust-purple hover:underline md:hover:bg-transparent ${
            isOpen4 ? "text-cust-yellow" : "text-white"
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
