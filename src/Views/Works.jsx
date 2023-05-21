import Tag from "../Component/Tag";
import WorksCard from "../Component/WorksCard";

const Works = () => {
  return (
    <div className="w-full cust-container py-14">
      <div className="flex flex-col">
        <Tag name="Our Work" />
        <WorksCard />
      </div>
    </div>
  );
};

export default Works;
