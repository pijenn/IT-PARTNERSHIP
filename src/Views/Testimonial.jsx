import Tag from "../Component/Tag";

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
        <div className="relative mx-auto w-4/5 md:w-3/5 lg:max-w-lg pb-6 px-6 pt-10 my-16 rounded-md drop-shadow-[0_5px_12px_rgb(0,0,0,0.2)] bg-white">
          <div className="absolute cursor-pointer -right-5 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white drop-shadow-md hover:translate-x-1 transition-all duration-300">
            <img
              className="mx-auto h-12 md:h-16 w-12 md:w-16 p-2 -rotate-90 group-hover:translate-x-1"
              src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1684394901/DownArrow_dthzsg.svg"
              alt="MissingIcon"
            />
          </div>
          <div className="relative grid grid-cols-12">
            <img
              className="absolute -top-1 w-8"
              src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1684579951/Petik_ksgnkj.svg"
              alt="MissingIMG"
            />
            <div></div>
            <div className="col-span-11 px-4 md:px-1 mr-2 md:mr-3">
              <p className="text-start leading-5 font-medium pb-8">
                Gaada kritik, udah keren banget makasih banyak PIT bantuannya di
                oprec staff ahli 2023!!!
              </p>
              <div className="flex justify-start gap-x-2 w-full mt-5 mb-2">
                <div className="w-10 h-10 rounded-full">
                  <img
                    className="w-full h-full"
                    src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1684387560/Logo_BEM_nxphj5.svg"
                    alt="MissingIMG"
                  />
                </div>
                <h3 className="whitespace-nowrap font-bold flex items-center text-sm">
                  BEM FILKOM UB 2023
                </h3>
              </div>
            </div>
          </div>
          <div className="flex w-full p-2 justify-end items-end gap-x-2">
            <div className="w-1 h-1 rounded-full bg-gray-700 ring-1"></div>
            <div className="w-1 h-1 rounded-full bg-whit ring-1"></div>
            <div className="w-1 h-1 rounded-full bg-whit ring-1"></div>
            <div className="w-1 h-1 rounded-full bg-whit ring-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
