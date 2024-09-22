export const PropertyOnMap = ({ property }) => {
  return (
    <main>
      <div className="w-full flex items-center justify-center">
        <div className="container flex flex-col items-center justify-center">
          <div className="w-[100px] h-[30px] bg-black border-8 flex rounded-md text-[#4B6BFB]">
            {property.lat}
            {property.long}
          </div>
        </div>
      </div>
    </main>
  );
};
