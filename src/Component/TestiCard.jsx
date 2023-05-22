import DataTesti from "../data/DataTesti";
import { SwiperSlide } from "swiper/react";

const TestiCard = () => {
  return DataTesti.map((item) => {
    return (
      <SwiperSlide key={item.id}>
          <div className="relative grid grid-cols-12">
            <img
              className="absolute -top-1 w-8"
              src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1684579951/Petik_ksgnkj.svg"
              alt="MissingIMG"
            />
            <div></div>
            <div className="col-span-11 px-4 md:px-1 mr-2 md:mr-3">
              <p className="text-start leading-5 font-medium pb-4">
                {item.msg}
              </p>
              <div className="absolute bottom-0 flex justify-start gap-x-2 w-full mb-2">
                <div className="w-10 h-10 rounded-full">
                  <img
                    className="w-full h-full"
                    src={item.logo}
                    alt="MissingIMG"
                  />
                </div>
                <h3 className="whitespace-nowrap font-bold flex items-center text-sm">
                  {item.name}
                </h3>
              </div>
            </div>
          </div>
      </SwiperSlide>
    );
  });
};

export default TestiCard;
