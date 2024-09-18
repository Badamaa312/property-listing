"use client";

import { LogoIcon } from "@/components/svg/LogoIcon";
import { SearchIcon } from "@/components/svg/SearchIcon";
import Image from "next/image";
import Link from "next/link";
import { Map } from "@/components/map/GoogleMap";
import data from "../mock/data.json";
import { useState, useEffect } from "react";
import { SearchDropDown } from "@/components/search/SearchDropDown";

export default function Home() {
  const [searchValue, setSearchValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  if (typeof window !== "undefined") {
    document.addEventListener("mouseup", () => {
      handleCloseDropDown();
    });
  }
  const filteredProperty = data.properties.filter((property) =>
    property?.title?.toLowerCase().includes(searchValue)
  );

  console.log(filteredProperty);

  const handleCloseDropDown = () => {
    setIsOpen(false);
  };

  const handleInputChange = (event) => {
    setIsOpen(true);
    setSearchValue(event.target.value);
  };

  // useEffect(() => {
  //   fetchSearchData();
  // }, []);

  return (
    <main className="pb-8 pt-8">
      <div className="w-full flex flex-col gap-10 justify-center items-center">
        <div className="container flex justify-center items-center px-8 gap-4">
          <Link href="/">
            <LogoIcon />
          </Link>

          <div className="flex rounded-md bg-[#E8E8EA] text-wrap gap-2 items-center">
            <div className="btn btn-outline btn-accent dropdown-left">Rent</div>
            <input
              placeholder="Search"
              value={searchValue}
              type="text"
              className="bg-[#E8E8EA] outline-none rounded-md"
              onChange={handleInputChange}
            />
            <div className="btn btn-outline btn-accent ">
              <SearchIcon />
            </div>
            {/* <p>{data.title}</p> */}

            {
              <SearchDropDown
                setSearchValue={setSearchValue}
                setIsOpen={setIsOpen}
                isOpen={isOpen}
                filteredProperty={filteredProperty}
              />
            }
          </div>
        </div>
        <Map />
      </div>
    </main>
  );
}

// https://maps.googleapis.com/maps/api/js?key=AIzaSyBeK6kNAnqtWp2xZpPHmcXOjESpg5cu6ek&libraries=places&language=en

// AIzaSyBeK6kNAnqtWp2xZpPHmcXOjESpg5cu6ek

// const [articlesForSearch, setArticlesForSearch] = useState([]);
// const [searchValue, setSearchValue] = useState("");
// const [isOpen, setIsOpen] = useState(false);

// if (typeof window !== "undefined") {
//   document.addEventListener("mouseup", () => {
//     handleCloseDropDown();
//   });
// }
// const filteredArticle = articlesForSearch.filter((article) =>
//   article?.title?.toLowerCase().includes(searchValue)
// );

// const handleCloseDropDown = () => {
//   setIsOpen(false);
// };

// const handleInputChange = (event) => {
//   setIsOpen(true);
//   setSearchValue(event.target.value);
// };

// const fetchSearchData = () => {
//   fetch(`https://dev.to/api/articles?per_page=100`)
//     .then((response) => response.json())
//     .then((data) => setArticlesForSearch(data));
// };

// useEffect(() => {
//   fetchSearchData();
// }, []);

// return (
//   <main className="pb-8 pt-8">
//     <div className="w-full flex justify-around relative">
//       <div className="container flex justify-between items-center px-8">
//         <Link href="/">
//           <LogoIcon />
//         </Link>
//         <div className="flex items-center justify-center ">
//           <Link href="/">
//             <button className="px-2">Home</button>
//           </Link>
//           <Link href="/blogs">
//             <button className="px-2">Blog</button>
//           </Link>
//           <Link href="/contact-us">
//             <button className="px-2">Contact</button>
//           </Link>
//         </div>
//         <div className="flex rounded-md bg-[#E8E8EA] text-wrap gap-2 pr-2 pl-3 pb-2 pt-2 items-center relative">
//           <input
//             placeholder="Search"
//             value={searchValue}
//             type="text"
//             className="bg-[#E8E8EA] outline-none rounded-md"
//             onChange={handleInputChange}
//           />
//           {
//             <SearchDropDown
//               setSearchValue={setSearchValue}
//               setIsOpen={setIsOpen}
//               isOpen={isOpen}
//               filteredArticle={filteredArticle}
//             />
//           }
//           <SearchIcon />
//         </div>
//       </div>
//     </div>
//   </main>
// );
