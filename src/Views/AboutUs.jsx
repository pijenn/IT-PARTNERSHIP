import { useState } from "react";
import Atropos from "atropos/react";
import Tag from "../Component/Tag";
import { motion } from "framer-motion";

const AboutUs = () => {
  const [isHover, setIsHover] = useState(false);

  const handleHover = () => {
    setIsHover((prev) => !prev);
  };

  return (
    <div className="bg-cover w-full bg-fixed bg-[0px]" style={{ backgroundImage: `url('https://res.cloudinary.com/dkncrhkfo/image/upload/v1716996264/bg-bgan_m75s58.png')` }}>
      <div className="py-16 w-full">
        <motion.div
          initial={{ opacity: 0, y: -80 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { type: "spring", duration: 5, damping: 15 },
          }}
          className="flex flex-col pt-10"
        >
           <Tag name="Know Us Better" />
        </motion.div>
        <div className="flex items-center justify-items-center mt-20 lg:mt-8 md:mt-8 xl:mt-8 pb-8 lg:py-8  px-6 flex-col">
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { type: "spring", duration: 5, damping: 15 },
            }}
            className=" md:w-full lg:w-full md:w-full text-base mx-auto md:mx-0 flex flex-col"
          >
          </motion.div>
          <iframe src="https://heyzine.com/flip-book/bb2b914978.html" className="mx-auto" style={{ width: '100%', maxWidth: '1000px', height: '400px' }}></iframe>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
