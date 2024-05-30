import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import Tag from "../Component/Tag";
import DataTesti from "../data/DataTesti";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Testimonial = () => {

  return (
    <div className="bg-cover bg-[0px] bg-fixed w-full py-14 p-2" style={{ backgroundImage: `url('https://res.cloudinary.com/dkncrhkfo/image/upload/v1716996264/bg-bgan_m75s58.png')` }}>
      <div className="flex flex-col">
      <motion.div 
        initial={{ opacity: 0, y: -80 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { type: "spring", duration: 5, damping: 15 },
        }}
        className="flex flex-col pt-10">
        <Tag name="Testimonial" />
        </motion.div>
        <div className="relative mx-auto w-4/5 md:w-3/5 lg:max-w-lg pb-6 px-6 pt-10 my-16 rounded-lg border-2 border-cust-yellow  bg-transparent">
          <Swiper
            modules={[Navigation, Pagination]}
            loop={true}
            navigation={{
              nextEl: ".button-next-slide",
            }}
            pagination={{ clickable: true
             }}
            spaceBetween={10}
            slidesPerView={1}
            className="py-1 "
          >
            {DataTesti.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <div className="relative overflow-hidden grid grid-cols-12 h-fit sm:h-56 mb-2">
                    <img
                      className="absolute -top-1 w-8"
                      src="https://res.cloudinary.com/dkncrhkfo/image/upload/v1717008542/tandakutip_fqxn4f.svg"
                      alt="MissingIMG"
                    />
                    <div></div>
                    <div className="col-span-11 flex flex-col px-4 md:px-1 mr-2 md:mr-3">
                      <p className="text-start leading-5 font-medium pb-4 text-white">
                        {item.msg}
                      </p>
                      <div className="flex justify-start gap-x-2 w-full mt-auto pb-10">
                        <div className={`w-10 h-10 hidden sm:flex rounded-full
                          ${item.logo === "" && "sm:hidden"}
                        `}>
                          <img
                            className="w-full h-full"
                            src={item.logo}
                          />
                        </div>
                        <h3 className="sm:whitespace-nowrap font-bold flex text-white items-center text-sm">
                          {item.name}
                        </h3>
                        <img
                      className="absolute lg:top-35 lg:left-96 w-8 hidden md:hidden"
                      src="https://res.cloudinary.com/dkncrhkfo/image/upload/v1717008542/tandakutipkebalik_mfg20o.png"
                      alt="MissingIMG"
                    />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div 
            className="absolute button-next-slide cursor-pointer -right-5 top-1/2 -translate-y-1/2 z-auto rounded-full bg-cust-yellow border-2 border-cust-yellow drop-shadow-md hover:translate-x-1 transition-all duration-300">
            <img
              className="mx-auto h-12 md:h-16 w-12 md:w-16 p-2 -rotate-90 group-hover:translate-x-1 "
              src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1684394901/DownArrow_dthzsg.svg"
              alt="MissingIcon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
