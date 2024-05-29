import ServicesCard from "../Component/ServicesCard";
import { motion } from "framer-motion";
import Tag from "../Component/Tag";

const Services = () => {
  return (
    <div className="bg-cover bg-[0px] bg-fixed w-full pt-14 pb-28" style={{ backgroundImage: `url('https://res.cloudinary.com/dkncrhkfo/image/upload/v1716996264/bg-bgan_m75s58.png')` }}>
      <motion.div 
        initial={{ opacity: 0, y: -80 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { type: "spring", duration: 5, damping: 15 },
        }}
        className="flex flex-col">
      <Tag name="Our Services" />
      </motion.div>
      <div className="flex flex-col justify-center mt-24 md:gap-x-12 lg:gap-x-24 gap-y-24 md:flex-row h-fit">
        <ServicesCard />
      </div>
    </div>
  );
};

export default Services;
