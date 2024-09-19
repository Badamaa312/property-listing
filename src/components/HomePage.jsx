"use client";

import { LogoIcon } from "@/components/svg/LogoIcon";
import { SearchIcon } from "@/components/svg/SearchIcon";
import Link from "next/link";
import { Map } from "@/components/map/GoogleMap";
import data from "../mock/data.json";
import { useState } from "react";
import { SearchDropDown } from "@/components/search/SearchDropDown";

const HomePage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  if (typeof window !== "undefined") {
    document.addEventListener("mouseup", () => {
      handleCloseDropDown();
    });
  }
  const filteredProperty = data.properties.filter((property) =>
    property?.title?.toLowerCase().includes(searchValue)
  );

  const handleCloseDropDown = () => {
    setIsOpen(false);
  };

  const handleInputChange = (event) => {
    setIsOpen(true);
    setSearchValue(event.target.value);
  };

  return (
    <main className="pb-8 pt-8">
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
              // onClick={handleClickLink}
            />

            <SearchDropDown
              setSearchValue={setSearchValue}
              setIsOpen={setIsOpen}
              isOpen={isOpen}
              filteredProperty={filteredProperty}
              setSelectedValue={setSelectedValue}
              selectedValue={selectedValue}
            />

            <div className="btn btn-outline btn-accent ">
              <SearchIcon />
            </div>
          </div>
        </div>
        <div className="container flex justify-center items-center px-8 gap-4">
          <div className="w-1/2 border-4 border-red-300 ">
            {data.properties.City}
          </div>
          <Map />
        </div>
      </div>
    </main>
  );
};

export default HomePage;
