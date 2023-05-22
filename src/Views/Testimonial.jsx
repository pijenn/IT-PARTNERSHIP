import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import Tag from "../Component/Tag";
import DataTesti from "../data/DataTesti";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Testimonial = () => {

  return (
    <div className="relative w-full h-fit py-14 p-2">
      <img
        className="absolute -bottom-2 right-28 h-96 object-cover opacity-60"
        src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1684403948/Shadow1_h7wijp.svg"
        alt="Shadow"
      />
      <div className="flex flex-col">
        <Tag name="Testimonial" />
        <div className="relative mx-auto w-4/5 md:w-3/5 lg:max-w-lg pb-6 px-6 pt-10 my-16 rounded-lg drop-shadow-[0_5px_12px_rgb(0,0,0,0.2)] bg-white">
          <Swiper
            modules={[Navigation, Pagination]}
            loop={true}
            navigation={{
              nextEl: ".button-next-slide",
            }}
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            className="py-1"
          >
            {DataTesti.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <div className="relative overflow-hidden grid grid-cols-12 h-fit sm:h-40 mb-2">
                    <img
                      className="absolute -top-1 w-8"
                      src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1684579951/Petik_ksgnkj.svg"
                      alt="MissingIMG"
                    />
                    <div></div>
                    <div className="col-span-11 flex flex-col px-4 md:px-1 mr-2 md:mr-3">
                      <p className="text-start leading-5 font-medium pb-4">
                        {item.msg}
                      </p>
                      <div className="flex justify-start gap-x-2 w-full mt-auto pb-4">
                        <div className="w-10 h-10 hidden sm:flex rounded-full">
                          <img
                            className="w-full h-full"
                            src={item.logo}
                            alt="MissingIMG"
                          />
                        </div>
                        <h3 className="sm:whitespace-nowrap font-bold flex items-center text-sm">
                          {item.name}
                        </h3>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div 
            className="absolute button-next-slide cursor-pointer -right-5 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white drop-shadow-md hover:translate-x-1 transition-all duration-300">
            <img
              className="mx-auto h-12 md:h-16 w-12 md:w-16 p-2 -rotate-90 group-hover:translate-x-1"
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
