import { SearchIcon } from "@/components/svg/SearchIcon";
import Link from "next/link";

export const Header = () => {
  return (
    <main className="pb-8 pt-8">
      <div className="w-full flex justify-around relative">
        <div className="container flex justify-between items-center px-8">
          {/* <Link href="/">
            <LogoIcon />
          </Link> */}
          <div className="flex items-center justify-center ">
            <Link href="/">
              <button className="px-2">Home</button>
            </Link>
            <Link href="/blogs">
              <button className="px-2">Blog</button>
            </Link>
            <Link href="/contact-us">
              <button className="px-2">Contact</button>
            </Link>
          </div>
          <div className="flex rounded-md bg-[#E8E8EA] text-wrap gap-2 pr-2 pl-3 pb-2 pt-2 items-center relative">
            <input
              placeholder="Search"
              //   value={searchValue}
              type="text"
              className="bg-[#E8E8EA] outline-none rounded-md"
              //   onChange={handleInputChange}
            />
            {/* {
              <SearchDropDown
                setSearchValue={setSearchValue}
                setIsOpen={setIsOpen}
                isOpen={isOpen}
                filteredArticle={filteredArticle}
              />
            } */}
            <SearchIcon />
          </div>
        </div>
      </div>
    </main>
  );
};
