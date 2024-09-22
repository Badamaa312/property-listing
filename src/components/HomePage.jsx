"use client";

import { Map } from "@/components/map/GoogleMap";
import { PropertyList } from "./search/PropertyList";
import { Header } from "./layout/header/Header";

const HomePage = () => {
  return (
    <main className="pb-8 pt-8 bg-slate-50">
      <div className="w-full flex flex-col gap-10 justify-between items-center">
        <Header />
        <div className="container flex px-8 gap-4">
          <div className="w-1/2 gap-4">
            Cities- Hiinee
            {filteredProperty.map((property) => {
              return (
                <div>
                  <PropertyList property={property} />
                </div>
              );
            })}
          </div>
          <Map />
        </div>
      </div>
    </main>
  );
};

export default HomePage;
