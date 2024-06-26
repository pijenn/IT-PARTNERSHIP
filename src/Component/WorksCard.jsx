import dataWorks from "../data/DataWorks";
import { findIcon } from "../assets/icon";

const WorksCard = () => {
  return dataWorks.map((item) => {
    return (
      <div
        key={item.id}
        className="relative flex flex-col gap-y-24 py-8 sm:py-20"
      >
        <img
          className={`absolute ${
            item.id % 2 == 0 ? "-left-96 -rotate-180" : "-right-96"
          } -top-52 pointer-events-none scale-150 object-cover opacity-70`}
          src={findIcon("Shadow")}
          alt="Shadow"
        />
        <div
          onClick={() => {
            window.open(item.link, "_blank");
          }}
          className={`relative overflow-hidden sm:bg-transparent md:bg-transparent lg:bg-transparent border-4 border-cust-yellow  px-6 pt-6 pb-20 xl:p-12 h-fit rounded-2xl drop-shadow-lg group cursor-pointer`}
        >
          <h1
            className={`font-bold flex items-center text-2xl sm:text-5xl mb-10 group-hover:underline ${item.tittleColor} transition-all duration-500`}
          >
            {item.title}
            <svg
              className="h-5 sm:h-7 flex items-center justify-center w-10 ml-4 group-hover:sm:translate-x-5 group-hover:translate-x-2 group-hover:scale-105 transition-all duration-300"
              viewBox="0 0 24 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 18.9294L4.56351 2.31778e-07L0.0870915 4.35966L15.0761 18.9576L4.01157e-07 33.6403L4.47642 38L23.9129 19.0706L23.884 19.0424L24 18.9294Z"
                fill={item.arrowColor}
              />
            </svg>
          </h1>
          <p
            className={`w-full md:w-6/12 lg:w-8/12 xl:h-fit h-fit lg:h-20 sm:pb-20 md:pb-0 group-hover:sm:h-fit xl:w-[48%] lg:-translate-x-96 xl:translate-x-0 lg:opacity-0 xl:opacity-100 group-hover:sm:opacity-100 group-hover:sm:translate-x-0 font-normal text-justify text-xs sm:text-sm lg:pr-4 ${item.textColor}  transition-all duration-500
            `}
          >
            {item.desc}
          </p>
          <div className="absolute hidden sm:block translate-x-1/4  -bottom-40 md:-bottom-10 md:translate-x-3/4 md:right-40 lg:-bottom-44 lg:-right-32 lg:translate-x-1/3 xl:-bottom-14 xl:-right-96 xl:left-96 xl:translate-x-64 -rotate-[10deg] lg:-rotate-[20deg] pointer-events-none transition-all duration-700 group-hover:lg:translate-x-2/3 group-hover:xl:translate-x-64">
            <img
              className="lg:group-hover:scale-105 transition-all duration-300 w-3/6 object-cover rounded-lg"
              src={item.img}
              alt="MissingIMG"
            />
          </div>
        </div>
      </div>
    );
  });
};

export default WorksCard;
