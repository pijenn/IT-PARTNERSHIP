import { useState } from "react";
import { findButtonSlide } from "../data/DataButtonSlide";

const ButtonSlide = ({ name }) => {
  const [isHover, setIsHover] = useState(false);

  const handleHover = () => {
    setIsHover((prev) => !prev);
  };

  const handleClick = () => {
    window.open(findButtonSlide(name).link, "_blank");
  }

  return (
    <div
      onClick={handleClick}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      className={`flex mt-2 w-fit cursor-pointer rounded-full drop-shadow-md hover:drop-shadow-lg transition-all duration-300
                    ${isHover && "lg:bg-slate-300 transition-all duration-300"}
      `}
    >
      <img
        className="mx-auto h-20 md:h-24 w-20 md:w-24"
        src={findButtonSlide(name).icon}
        alt="MissingIcon"
      />
      <div
        className={`hidden lg:flex text-md sm:text-lg text-cust-blue font-semibold items-center whitespace-nowrap overflow-hidden transition-all duration-300 p-2 mr-2 lg:-translate-x-5 lg:opacity-0
                      ${isHover && "w-fit lg:translate-x-0 lg:opacity-100 transition-all duration-300"}
                  `}
      >
        {findButtonSlide(name).msg}
      </div>
    </div>
  );
};

export default ButtonSlide;
