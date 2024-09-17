import { LogoIcon } from "@/components/svg/LogoIcon";
import { SearchIcon } from "@/components/svg/SearchIcon";
import Image from "next/image";
import Link from "next/link";
import { Map } from "@/components/map/GoogleMap";

export default function Home() {
  return (
    <main className="pb-8 pt-8">
      <div className="w-full flex justify-center items-center">
        <div className="container flex justify-center items-center px-8 gap-4">
          <Link href="/">
            <LogoIcon />
          </Link>

          <div className="flex rounded-md bg-[#E8E8EA] text-wrap gap-2 items-center">
            <div className="btn btn-outline btn-accent dropdown-left">Rent</div>
            <input
              placeholder="Search"
              //   value={searchValue}
              type="text"
              className="bg-[#E8E8EA] outline-none rounded-md"
              //   onChange={handleInputChange}
            />
            <div className="btn btn-outline btn-accent ">
              <SearchIcon />
            </div>

            {/* {
          <SearchDropDown
            setSearchValue={setSearchValue}
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            filteredArticle={filteredArticle}
          />
        } */}
          </div>
          <Map />
        </div>
      </div>
    </main>
  );
}

// https://maps.googleapis.com/maps/api/js?key=AIzaSyBeK6kNAnqtWp2xZpPHmcXOjESpg5cu6ek&libraries=places&language=en

// AIzaSyBeK6kNAnqtWp2xZpPHmcXOjESpg5cu6ek
