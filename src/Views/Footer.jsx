import ButtonSlide from "../Component/ButtonSlide";
import { findIcon } from "../assets/icon";

const Footer = ({ scrollTo }) => {
  const handleClick = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>

      <footer className="relative bg-cust-purple w-full">
        <img
          className="absolute top-32 pointer-events-none left-0 h-96 object-cover opacity-60"
          src={findIcon("Shadow")}
          alt="Shadow"
        />
        <div className="w-full cust-outer-container pt-10">
          <div className="cust-container flex justify-start">
            <img
              className="h-16 w-16 p-2 -rotate-90"
              src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1684394901/DownArrow_dthzsg.svg"
              alt="MissingIcon"
            />
           <h3 className="font-bold text-3xl flex items-center text-cust-blue">
              Contact us
            </h3>
          </div>
          <div className="flex flex-col md:flex-row cust-container py-2">
            <div className="flex justify-center w-full md:w-6/12 py-20 md:border-r-2 md:border-cust-light md:border-opacity-20">
              <div className="flex flex-col justify-center items-center">
                <h3 className="font-bold mr-auto text-4xl text-white">
                  Let's Get
                </h3>
                <h3 className="font-extrabold text-6xl bg-clip-text text-transparent bg-gradient-to-r from-cust-yellow to-cust-pink">
                  STARTED
                </h3>
              </div>
            </div>
            <div className="flex flex-row justify-center w-full md:w-6/12 md:ml-10 lg:ml-16 gap-x-10 md:gap-x-0 md:gap-y-10 md:flex-col md:mt-0 px-2">
              <ButtonSlide name={"Line"} />
              <ButtonSlide name={"WA"} />
            </div>
            <div className="md:absolute md:top-0 md:right-14 lg:right-20 xl:right-24 rounded-b-xl drop-shadow-[0_20px_22px_rgb(0,0,0,0.3)] lg:pt-20 px-5 pb-5 md:bg-transparent md:from-cust-pink md:to-white">
              <div
                onClick={() => handleClick(scrollTo)}
                className="flex mx-auto w-fit rounded-full bg-cust-yellow from-cust-yellow to-white animate-bounce mt-10 cursor-pointer drop-shadow-lg"
              >
                <img
                  className="h-20 lg:h-28 w-20 lg:w-28 p-4 rotate-180"
                  src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1684394901/DownArrow_dthzsg.svg"
                  alt="MissingIcon"
                />
              </div>
            </div>
          </div>
          <div className="cust-container py-2 flex flex-col justify-center">
            <div className="drop-shadow-xl">
              <h3 className="font-bold text-center text-2xl mt-7 mb-5 text-white">
                Powered by <a href="https://bemfilkom.ub.ac.id" className="hover:border-b-2 opacity-100">BEM FILKOM UB 2024 🧡</a>
              </h3>
            </div>
            <div className="mb-6 border-t-2 border-white"></div>
            <span className="block text-sm text-center text-white font-semibold">
              © 2024{" "}
              <a href="https://bemfilkom.ub.ac.id/" className="hover:underline">
                Biro Pengembangan Informasi & Teknologi ™
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
