import Tag from "../Component/Tag";
import WorksCard from "../Component/WorksCard";
import { motion } from "framer-motion";

const Works = () => {
  return (
    <div className="w-full bg-cover bg-fixed bg-[0px] py-14" style={{ backgroundImage: `url('https://res.cloudinary.com/dkncrhkfo/image/upload/v1716996264/bg-bgan_m75s58.png')` }}>
      <motion.div
          initial={{ opacity: 0, y: -80 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { type: "spring", duration: 5, damping: 15 },
          }} className="flex flex-col cust-container">
        <Tag name="Our Works" />
        </motion.div>
        <div className="flex cust-container flex-col items-center">
        <WorksCard />
        </div>
    </div>
  );
};

export default Works;
