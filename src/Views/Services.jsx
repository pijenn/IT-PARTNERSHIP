import ServicesCard from "../Component/ServicesCard";
import Tag from "../Component/Tag";

const Services = () => {
  return (
    <div className="bg-gradient-to-br from-[#C3D1F1] via-[#AEC1E9] to-[#7E99D4] w-full pt-14 pb-28">
      <div className="flex flex-col">
        <Tag name="Our services" />
      </div>
      <div className="flex flex-col justify-center mt-24 gap-x-24 gap-y-24 md:flex-row h-fit">
        <ServicesCard />
      </div>
    </div>
  );
};

export default Services;
