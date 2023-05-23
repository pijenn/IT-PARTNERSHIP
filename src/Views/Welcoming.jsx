import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Atropos from "atropos/react";

const Welcoming = ({ scrollTo }) => {
  const handleClick = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full cust-container">
      <div className="grid grid-cols-1 gap-y-5 md:gap-y-0 md:grid-cols-12 py-5">
        <div className="md:col-span-7 md:hidden pointer-events-none">
          <img
            className="w-full h-full mx-auto object-cover drop-shadow-[40px_30px_40px_rgba(25,57,127,0.1)]"
            src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1684393010/Vektor_Welcoming_ddcvn8.svg"
            alt="MissingIMG"
          />
        </div>
        <div className="md:col-span-5 flex flex-col justify-start md:mt-48 w-full h-full">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { type: "spring", duration: 5, damping: 15 },
            }}
            className="flex  whitespace-nowrap font-extrabold mx-auto md:mx-0 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-cust-blue"
          >
            We Build
            <span className="ml-2 pb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#3561C0] to-[#FA54B8]">
              <TypeAnimation
                sequence={["Website.", 1000, "UI/UX.", 1000, "Design.", 1000]}
                repeat={Infinity}
              />
            </span>
          </motion.div>
          <p className="font-medium text-center md:text-start text-base sm:text-xl lg:text-2xl xl:text-3xl mt-2">
            Melebur ide Anda menjadi solusi digital yang transparan dan
            terintegrasi, hanya di
            <span className="ml-2 font-bold whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-[#3561C0] to-[#FA54B8]">
              IT Partnership.
            </span>
          </p>
        </div>
        <Atropos
          shadow={false}
          highlight={false}
          duration={200}
          className="hidden md:col-span-7 md:block cursor-pointer"
        >
          <img
            data-atropos-offset="5"
            className="w-11/12 h-11/12 mx-auto mt-20 object-cover"
            src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1684393010/Vektor_Welcoming_ddcvn8.svg"
            alt="MissingIMG"
          />
        </Atropos>
      </div>
      <div
        onClick={() => {
          handleClick(scrollTo);
        }}
        className="flex justify-center align-middle w-full p-2"
      >
        <img
          className="h-14 md:h-20 w-14 md:w-20 p-2 rounded-full hover:bg-slate-200 cursor-pointer animate-bounce transition-all duration-300"
          src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1684394901/DownArrow_dthzsg.svg"
          alt="MissingIcon"
        />
      </div>
    </div>
  );
};

export default Welcoming;
