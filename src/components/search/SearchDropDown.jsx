import { CloseIcon } from "../svg/CloseIcon";

export const SearchDropDown = ({ filteredProperty, isOpen }) => {
  const gotoCityHotels = (City) => {
    // json city geern filter => hotels
    //  hotels => hajuutakruu ugnu
    console.log("hi");
  };
  return (
    <div
      className={`${
        isOpen ? "border" : "h-0"
      } flex flex-col gap-1 transition-all duration-200 overflow-hidden absolute z-[1] rounded-2xl bg-blue-200`}
    >
      {filteredProperty.map((properties) => {
        return (
          <div
            onClick={gotoCityHotels(properties?.City)}
            className="p-3 border flex justify-center items-center rounded-xl z-[1] relative text-wrap hover:bg-blue-400 text-black"
          >
            {properties?.City}
            <CloseIcon />
          </div>
        );
      })}
    </div>
  );
};
