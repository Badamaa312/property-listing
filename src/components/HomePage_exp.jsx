"use client";
import { useEffect, useState } from "react";
import data from "../mock/data.json";

import Body from "./layout/body/Body";

import { Header } from "./layout/header/Header";
const MainPage = () => {
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

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container flex flex-col justify-center items-center max-w-[1366px] max-h-[1024px] mt-7 rounded-3xl">
      <Header
        districtOptions={districtOptions}
        handleSelectChange={handleSelectCityChange}
      />
      <Body selectedLocation={filterCity} />
    </div>
  );
};

export default MainPage;


"use client";

import { Map } from "@/components/map/GoogleMap";
import { PropertyList } from "./search/PropertyList";

import { useState } from "react";
import data from "../mock/data.json";
import Link from "next/link";
import { LogoIcon } from "./svg/LogoIcon";
import { SearchDropDown } from "./search/SearchDropDown";
import { SearchIcon } from "./svg/SearchIcon";
import { PhoneIcon } from "./svg/PhoneIcon";
import { DropIcon } from "./svg/DropIcon";
import { Footer } from "./layout/footer/Footer";

const HomePage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  if (typeof window !== "undefined") {
    document.addEventListener("mouseup", () => {
      handleCloseDropDown();
    });
  }
  const filteredProperty = data.properties.filter((property) =>
    property?.City?.toLowerCase().includes(searchValue)
  );
  const handleCloseDropDown = () => {
    setIsOpen(false);
  };

  const handleInputChange = (event) => {
    setIsOpen(true);
    setSearchValue(event.target.value);
  };

  const handleClickLink = (event) => {
    setIsOpen(true);
    setSearchValue(event.target.value);
  };

  return (
    <main className="pb-8 pt-8 bg-slate-50">
      <div className="w-full flex flex-col gap-10 justify-between items-center">
        <div className="container flex justify-center items-center px-8 gap-4">
          <Link href="/">
            <LogoIcon />
          </Link>
          <div className="flex rounded-md bg-[#E8E8EA] text-wrap gap-2 justify-between">
            <details className="dropdown">
              <summary className="btn bg-slate-100">All</summary>
              <ul className="menu dropdown-content bg-slate-100 rounded-box z-[1] w-52 p-2 shadow">
                <li>
                  <a>All</a>
                </li>
                <li>
                  <a>Rent</a>
                </li>
              </ul>
            </details>
            <input
              placeholder="Search"
              value={searchValue}
              type="text"
              className="bg-[#E8E8EA] outline-none rounded-md"
              onChange={handleInputChange}
              onClick={handleClickLink}
            />

            <SearchDropDown
              setSearchValue={setSearchValue}
              setIsOpen={setIsOpen}
              isOpen={isOpen}
              filteredProperty={filteredProperty}
            />
            <div className="btn btn-outline btn-accent ">
              <SearchIcon />
            </div>
          </div>
          <div className="flex items-center justify-center gap-4">
            <PhoneIcon />
            <p className="text-black">1-(800)-9235375694573289</p>
          </div>
          <div className="flex justify-center items-start">
            <div className="flex justify-center items-start">
              <img src="../src/components/svg/image.png" alt="" />
              <p className="text-black">Joe Doe</p>
              <DropIcon />
            </div>
          </div>
        </div>
        <div className="container flex px-8 gap-4">
          <div className="w-1/2 gap-4 skeleton h-16 shrink-0 rounded-full">
            {filteredProperty.slice(0, 4).map((property) => {
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
      <Footer />
    </main>
  );
};

export default HomePage;

