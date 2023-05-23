const Tag = ({ name }) => {
  return (
    <>
      <img
        className="mx-auto h-10 md:h-16 w-10 md:w-16 p-2"
        src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1684394901/DownArrow_dthzsg.svg"
        alt="MissingIcon"
      />
      <h3 className="mx-auto font-semibold text-lg sm:text-3xl py-1 px-4 bg-cust-light rounded-md mb-3 drop-shadow-md">
        {name}
      </h3>
    </>
  );
};

export default Tag;
