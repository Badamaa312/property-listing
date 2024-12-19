"use client";

import { useEffect, useState } from "react";
import data from "../mock/data.json";
import Body from "./layout/body/Body";
import { LogoIcon } from "./svg/LogoIcon";
import Select from "react-select";
import ListCard from "./search/ListCard";
import { StarIcon } from "./svg/StarIcon";
import { Map } from "./map/GoogleMap";

const HomePage = () => {
  const [districtOptions, setDistrictOptions] = useState([]);
  const [filterCity, setFilterCity] = useState([]);
  const [properties, setProperties] = useState([]);

  const fetchData = async () => {
    try {
      const uniqueCityOptions = [];
      const citySet = new Set();
      data.properties.forEach((property) => {
        if (!citySet.has(property.City)) {
          citySet.add(property.City);
          uniqueCityOptions.push({
            value: property.City,
            label: property.City,
          });
        }
      });

      setDistrictOptions(uniqueCityOptions);
      setProperties(data.properties);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSelectCityChange = (selectedOptions) => {
    const selectedCities = selectedOptions.map((option) => option.value);

    const newSelectedLocations = properties
      .filter((property) => selectedCities.includes(property.City))
      .map((property) => ({
        lat: parseFloat(property.lat),
        lng: parseFloat(property.long),
        title: property.title,
        cityName: property.City,
        imageUrl: property.imageUrl,
        star: property.star,
        type: property.type,
        bedrooms: property.bedrooms,
        bathrooms: property.bathrooms,
        amenities: property.amenities[0],
      }));
    setFilterCity(newSelectedLocations);
  };

  const uniqueCities = Array.from(
    new Set(filterCity.map((location) => location.City))
  );
  const cityNames =
    uniqueCities.length === 1 ? uniqueCities[0] : uniqueCities.join(", ");

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="w-full flex justify-center mt-10 ">
      <div className="w-full flex flex-col gap-[50px] items-center">
        <div className="flex w-[1200px] items-center justify-center gap-6 rounded-xl">
          <LogoIcon />
          <Select
            defaultValue={[]}
            isMulti
            name="districts"
            options={districtOptions}
            className="basic-multi-select w-[626px] text-black"
            classNamePrefix="select"
            onChange={handleSelectCityChange}
          />
        </div>
        <div className="flex gap-6 ">
          {" "}
          <div className="flex gap-5">
            {" "}
            <div className="flex flex-col gap-3 w-[1/3]  overflow-y-auto py-2">
              <p className="font-semibold">All properties</p>
              {properties.slice(0, 5).map((data) => {
                return (
                  <div>
                    <ListCard
                      imageUrl={data?.imageUrl}
                      title={data?.title}
                      star={data?.star}
                      type={data?.type}
                      bedrooms={data?.bedrooms}
                      bathrooms={data?.bathrooms}
                      amenities={data?.amenities}
                    />
                  </div>
                );
              })}
            </div>
            <Map selectedLocation={filterCity} />
            {/* <Body selectedLocation={filterCity} properties={properties} /> */}
          </div>
          <div className="flex flex-col gap-3 w-full h-auto overflow-y-auto py-2">
            {filterCity.map((data) => {
              return (
                <div>
                  <p>Choiced propercy</p>
                  <div
                    key={data.title}
                    className="flex w-full h-[215px] rounded-2xl shadow-md p-3"
                  >
                    <div
                      className="w-[248px] h-auto"
                      style={{
                        backgroundImage: `url(${data.imageUrl || ""})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        borderRadius: "16px",
                      }}
                    ></div>
                    <div className="flex flex-col w-[248px] h-full pl-4 gap-2">
                      <h3 className="text-[#3E4958] text-xl">
                        {data.title || "No title"}
                      </h3>
                      <div className="flex gap-5">
                        <div className="flex gap-1 items-center">
                          <StarIcon />{" "}
                          <h1 className="text-[#3E4958]">{data.star || 0}</h1>
                        </div>
                        <div className="text-black">
                          {data.amenities || "No amenitie"}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <h1 className="text-[#3E4958]">
                          {data.bedrooms || 0 + " bedroom"}
                        </h1>{" "}
                        |
                        <h1 className="text-[#3E4958]">
                          {data.bathrooms || 0 + " bathroom"}
                        </h1>
                      </div>
                      <div className="text-[#3E4958]">
                        {data.type || "No Type"}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
