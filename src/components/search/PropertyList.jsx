export const PropertyList = ({ property }) => {
  return (
    <main>
      <div className="flex flex-col gap-4">
        <div className="flex overflow-hidden gap-4">
          <div
            style={{
              backgroundImage: `url(${property.imageUrl})`,
              width: "80%",
              height: "240px",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "6px",
              gap: "10px",
            }}
          ></div>
          <div className="w-[100px] h-[30px] bg-[#4B6BFB0D] flex justify-center items-center rounded-md text-[#4B6BFB]">
            {property.title}
          </div>
          <div className="overflow-hidden h-[100px]">
            <p className="text-md text-ellipsis ">{property.star}</p>
          </div>
        </div>
      </div>
    </main>
  );
};
