import { Map } from "@/components/map/GoogleMap";

import List from "@/components/search/List";
import ListCard from "@/components/search/ListCard";

const Body = ({ selectedLocation, properties }) => {
  console.log(properties);

  return (
    <div className="flex w-full h-screen  rounded-b-3xl bg-white p-10">
      {/* <List selectedLocation={selectedLocation} /> */}
      <div className="flex flex-col gap-3 w-[1/3]  overflow-y-auto py-2">
        {properties.slice(0, 3).map((data) => {
          return (
            <ListCard
              imageUrl={data?.imageUrl}
              title={data?.title}
              star={data?.star}
              type={data?.type}
              bedrooms={data?.bedrooms}
              bathrooms={data?.bathrooms}
              amenities={data?.amenities}
            />
          );
        })}
      </div>
      <div className="w-2/3">
        {" "}
        <Map selectedLocation={selectedLocation} />
      </div>
    </div>
  );
};

export default Body;
