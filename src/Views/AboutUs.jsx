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
          className="flex flex-col"
        >
           <Tag name="Know Us Better" />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-12 pb-8 sm:py-8">
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { type: "spring", duration: 5, damping: 15 },
            }}
            className=" md:w-full xl:w-10/12 text-base mx-auto md:mx-0 flex flex-col"
          >
          
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
