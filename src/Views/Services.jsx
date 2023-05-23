import ServicesCard from "../Component/ServicesCard";
import { motion } from "framer-motion";
import Tag from "../Component/Tag";

const Services = () => {
  return (
    <div className="bg-gradient-to-br from-[#C3D1F1] via-[#AEC1E9] to-[#7E99D4] w-full pt-14 pb-28">
      <motion.div 
        initial={{ opacity: 0, y: -80 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { type: "spring", duration: 5, damping: 15 },
        }}
        className="flex flex-col">
        <Tag name="Our services" />
      </motion.div>
      <div className="flex flex-col justify-center mt-24 md:gap-x-12 lg:gap-x-24 gap-y-24 md:flex-row h-fit">
        <ServicesCard />
      </div>
    </div>
  );
};

export default Services;
