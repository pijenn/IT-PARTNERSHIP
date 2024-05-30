import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";


const Welcoming = ({ scrollTo }) => {
  const handleClick = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
<div className="w-full bg-cover bg-fixed bg-[0px] " style={{ backgroundImage: `url('https://res.cloudinary.com/dkncrhkfo/image/upload/v1716996264/bg-bgan_m75s58.png')` }}>
      <div className="pb-32 pt-24 flex items-center">
        <div className="flex flex-col justify-start md:mt-28 w-full h-full">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { type: "spring", duration: 5, damping: 15 },
            }}
            className="flex justify-center font-extrabold mx-auto md:mx-0 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-cust-blue"
          >
            <span className="ml-2 pb-2 bg-clip-text text-transparent bg-gradient-to-b from-cust-yellow to-cust-violet">
              <TypeAnimation
                sequence={["IT PARTNERSHIP.", 1000, "IT Partnership.", 1000]}
                repeat={Infinity}
              />
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x:-100}}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { type: "spring", duration: 10, damping: 15 },
            }} className="font-medium text-center md:mt-10 md:mb-10 text-base sm:text-xl mt-2 text-white md:px-36 lg:px-80" >
            We build
            <span className="ml-2 font-bold bg-clip-text text-transparent bg-gradient-to-t from-[#E02DAC] to-[#F3C86A]">
              Website
            </span>
            <br/>
            We Build
            <span className="ml-2 font-bold bg-clip-text text-transparent bg-gradient-to-t from-[#E02DAC] to-[#F3C86A]">
              UI/UX
            </span>
            <br/>
            We Build
            <span className="ml-2 font-bold bg-clip-text text-transparent bg-gradient-to-t from-[#E02DAC] to-[#F3C86A]">
              Design
            </span>
            <br />
            <br />
            <span className="font-light text-center md:mt-10 md:mb-10 text-base sm:text-xl mt-2 text-white">
            Melebur ide Anda menjadi solusi digital yang transparan dan terintegrasi, hanya di 
            <span className="ml-2 font-bold bg-clip-text text-transparent bg-gradient-to-t from-[#E02DAC] to-[#F3C86A]">
              IT Partnership.
            </span>
            </span>
     
            </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Welcoming;
