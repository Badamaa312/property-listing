import Link from "next/link";
import { CloseIcon } from "../svg/CloseIcon";

export const SearchDropDown = ({
  filteredProperty,
  isOpen,
  setIsOpen,
  setSearchValue,
}) => {
  // filteredProperty.length = 5;

  const handleClickLink = (event) => {
    setIsOpen(false);
    setSearchValue(event.target.value);
  };

  return (
    <div
      className={`${
        isOpen ? "border" : "h-0"
      } flex flex-col gap-1 transition-all duration-200 overflow-hidden absolute rounded-2xl bg-blue-200`}
    >
      {filteredProperty.map((properties) => {
        return (
          <div className="p-3 border flex justify-center items-center rounded-xl relative text-wrap hover:bg-blue-400 text-black">
            {properties?.title}
            <CloseIcon />
          </div>
        );
      })}
    </div>
  );
};
