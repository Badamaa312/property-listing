import { Map } from "@/components/map/GoogleMap";

import List from "@/components/search/List";

const Body = ({ selectedLocation }) => {
  return (
    <div className="flex w-full h-screen border rounded-b-3xl bg-white p-10">
      <List selectedLocation={selectedLocation} />
      <Map selectedLocation={selectedLocation} />
    </div>
  );
};

export default Body;
