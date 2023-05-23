import { useState } from "react";
import Atropos from "atropos/react";
import Tag from "../Component/Tag";
import { motion } from "framer-motion";

const AboutUs = () => {
  const [isHover, setIsHover] = useState(false);

  const handleHover = () => {
    setIsHover((prev) => !prev);
  };

  return (
    <div className="bg-gradient-to-br from-[#C3D1F1] via-[#AEC1E9] to-[#7E99D4] w-full">
      <div className="relative h-fit py-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: -80 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { type: "spring", duration: 5, damping: 15 },
          }}
          className="flex flex-col"
        >
          <Tag name="Know us better" />
          <h3 className="mx-auto font-bold text-3xl">IT Partnership</h3>
        </motion.div>
        <div className="mt-5 sm:hidden mx-auto w-80 h-80 md:pt-10 md:mt-0 drop-shadow-2xl cursor-pointer">
          <img
            data-atropos-offset="5"
            className="p-2"
            src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1684741862/Man_Web_Developer_HD_1_vi1f0n.svg"
            alt="MissingIMG"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 pb-8 sm:py-8">
          <div className="hidden md:block"></div>
          <div className="col-span-5 w-full h-full flex items-center md:pb-14">
            <Atropos
              shadow={false}
              highlight={false}
              duration={200}
              className="hidden sm:block mx-auto w-96 h-96 md:pt-10 md:mt-0 drop-shadow-2xl cursor-pointer"
            >
              <img
                data-atropos-offset="5"
                className="p-2"
                src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1684741862/Man_Web_Developer_HD_1_vi1f0n.svg"
                alt="MissingIMG"
              />
            </Atropos>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { type: "spring", duration: 5, damping: 15 },
            }}
            className="col-span-5 w-10/12 md:w-full xl:w-10/12 text-base mx-auto md:mx-0 flex flex-col gap-y-3 py-5 px-9 rounded-2xl drop-shadow-md bg-cust-light"
          >
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
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/1ctLlAst4yCF4Mrf4O5oCOyJ0SgHkrl8s/view?usp=sharing",
                  "_blank"
                );
              }}
              onMouseEnter={handleHover}
              onMouseLeave={handleHover}
              className="flex mx-auto lg:mx-0 bg-cust-light mt-2 w-fit cursor-pointer rounded-full drop-shadow-md hover:drop-shadow-lg"
            >
              <img
                className="mx-auto h-12 md:h-16 w-12 md:w-16 p-2 -rotate-90"
                src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1684394901/DownArrow_dthzsg.svg"
                alt="MissingIcon"
              />
              <div
                className={`hidden lg:flex text-lg font-normal w-0 items-center whitespace-nowrap transition-all duration-300 overflow-hidden -translate-x-5 opacity-0
                      ${isHover && "w-fit p-2 mr-4 translate-x-0 opacity-100"}
                  `}
              >
                Download Booklet
              </div>
              <div
                className={`flex lg:hidden text-lg font-normal w-fit items-center whitespace-nowrap transition-all duration-300 overflow-hidden mr-4 pr-2 opacity-100`}
              >
                Download Booklet
              </div>
            </div>
          </motion.div>
          <div className="hidden md:block"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
