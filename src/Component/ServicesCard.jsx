import DataServices from "../data/DataServices";

const ServicesCard = () => {
  return DataServices.map((item) => {
    return (
      <div
        className="relative mx-auto md:mx-0 w-4/5 md:w-5/12 lg:w-4/12 bg-cust-light px-8 pt-24 pb-8 rounded-xl drop-shadow-2xl"
        key={item.id}
      >
        <div className="rounded-full absolute -top-20 left-1/2 -translate-x-1/2 p-5 bg-cust-light drop-shadow-xl hover:scale-110 transition-all duration-300">
          <img
          className="w-28 h-28 object-cover" 
            src={item.icon} 
            alt="MissingIcon" 
        />
        </div>
        <h3 className="font-extrabold leading-10 text-center text-3xl mb-5 bg-clip-text text-transparent bg-gradient-to-r from-[#3561C0] via-[#6386D3] to-[#FA54B8]">
          {item.title}
        </h3>
        <p className="font-medium text-lg text-justify">{item.desc}</p>
      </div>
    );
  });
};

export default ServicesCard;
