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
                    ${isHover && "bg-slate-300 transition-all duration-300"}
      `}
    >
      <img
        className="mx-auto h-20 md:h-24 w-20 md:w-24"
        src={findButtonSlide(name).icon}
        alt="MissingIcon"
      />
      <div
        className={`text-md sm:text-lg text-cust-blue font-semibold w-0 flex items-center whitespace-nowrap overflow-hidden transition-all duration-300 -translate-x-5 opacity-0
                      ${isHover && "w-fit p-2 mr-2 sm:mr-4 translate-x-0 opacity-100 transition-all duration-300"}
                  `}
      >
        {findButtonSlide(name).msg}
      </div>
    </div>
  );
};

export default ButtonSlide;
