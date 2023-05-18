const Tag = ({ name }) => {
  return (
    <>
      <img
        className="mx-auto h-10 md:h-16 w-10 md:w-16 p-2"
        src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1684394901/DownArrow_dthzsg.svg"
        alt="MissingIcon"
      />
      <h3 className="mx-auto font-semibold text-2xl p-2 bg-cust-light rounded-md mb-3">
        {name}
      </h3>
    </>
  );
};

export default Tag;
