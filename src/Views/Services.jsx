import ServicesCard from "../Component/ServicesCard";
import Tag from "../Component/Tag";

const Services = () => {
  return (
    <div className="py-14">
      <div className="flex flex-col">
        <Tag name="Our Services" />
      </div>
      <div className="flex flex-col justify-center mt-24 gap-y-28 gap-x-24 md:flex-row h-fit">
        <ServicesCard />
      </div>
    </div>
  );
};

export default Services;
