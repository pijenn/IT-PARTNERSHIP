import DataServices from "../data/DataServices";

const ServicesCard = () => {
  return DataServices.map((item) => {
    return (
      <div
        className="relative mx-auto md:mx-0 w-4/5 md:w-5/12 lg:w-[28%] bg-transparent border-4 border-white px-8 pt-24 pb-8 rounded-xl drop-shadow-2xl"
        key={item.id}
      >
        <div className="rounded-full absolute -top-16 md:-top-20 left-1/2 -translate-x-1/2 translate-y-1/2 p-4 md:p-5 bg-transparent drop-shadow-xl hover:scale-110 transition-all duration-300">
          <img
          className="w-40 h-40 object-cover lg:pb-10 pb-12" 
            src={item.icon} 
            alt="MissingIcon" 
        />
        </div>
        <h3 className="font-extrabold leading-10 text-center pt-16 text-2xl mb-5 bg-clip-text lg:pt-16 text-white">
          {item.title}
        </h3>
        <p className="font-medium text-md text-center text-white">{item.desc}</p>
      </div>
    );
  });
};

export default ServicesCard;
