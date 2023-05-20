import { useState } from "react";
import Tag from "../Component/Tag";

const AboutUs = () => {
  const [isHover, setIsHover] = useState(false);

  const handleHover = () => {
    setIsHover((prev) => !prev);
  };

  return (
    <div className="bg-gradient-to-br from-[#C3D1F1] via-[#AEC1E9] to-[#7E99D4] w-full">
      <div className="relative h-fit py-10">
        <img
          className="absolute -bottom-5 -right-10 rotate-90 h-96 object-cover"
          src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1684403948/Shadow1_h7wijp.svg"
          alt="Shadow"
        />
        <div className="flex flex-col">
          <Tag name="Know us better" />
          <h3 className="mx-auto font-bold text-3xl">IT Partnership</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 py-8">
          <div className="hidden md:block"></div>
          <div className="col-span-5 w-full h-full flex items-center pb-14">
            <span className="mx-auto font-extrabold mt-5 md:mt-0 text-8xl bg-clip-text text-transparent bg-gradient-to-r from-[#3561C0] via-[#708BC6] to-[#FA54B8]">
              hello.
            </span>
          </div>
          <div className="col-span-5 w-10/12 md:w-full xl:w-10/12 text-base mx-auto md:mx-0 flex flex-col gap-y-3 py-5 px-9 rounded-2xl drop-shadow-md bg-cust-light">
            <p className="text-justify leading-5">
              <span className="font-semibold">IT Partnership</span> merupakan
              salah satu program kerja dari Kebiroan Pengembangan Informasi dan
              Teknologi BEM FILKOM UB 2023 yang ditujukan untuk membangun
              kerjasama dengan lembaga yang ada di FILKOM, Universitas Brawijaya
              maupun masyarakat umum terkait kebutuhan pengembangan aplikasi
              berbasis website. Selain itu, IT Partnership juga bertujuan untuk
              menghimpun dana mandiri untuk mendukung kegiatan internal BEM
              FILKOM.
            </p>
            <p className="text-justify leading-5">
              Konsentrasi utama IT Partnership adalah untuk membantu dalam
              pengembangan dan mengatasi solusi teknologi informasi melalui
              pembuatan design dan pembangunan sebuah website.
            </p>
            <div
              onMouseEnter={handleHover}
              onMouseLeave={handleHover}
              className="flex bg-cust-light mt-2 w-fit cursor-pointer rounded-full drop-shadow-md hover:drop-shadow-lg"
            >
              <img
                className="mx-auto h-12 md:h-16 w-12 md:w-16 p-2 -rotate-90"
                src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1684394901/DownArrow_dthzsg.svg"
                alt="MissingIcon"
              />
              <div
                className={`text-lg font-semibold w-0 flex items-center whitespace-nowrap transition-all duration-300 overflow-hidden -translate-x-5 opacity-0
                      ${isHover && "w-fit p-2 mr-4 translate-x-0 opacity-100"}
                  `}
              >
                Download Booklet
              </div>
            </div>
          </div>
          <div className="hidden md:block"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
