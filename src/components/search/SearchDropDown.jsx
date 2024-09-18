import Link from "next/link";

export const SearchDropDown = ({
  filteredProperty,
  isOpen,
  setIsOpen,
  setSearchValue,
}) => {
  filteredProperty.length = 5;

  // const handleClickLink = () => {
  //   setIsOpen(false);
  //   setSearchValue("");
  // };

  return (
    <div
      className={`${
        isOpen ? "h-500 border" : "h-0"
      } flex flex-col gap-1 transition-all duration-200 overflow-hidden absolute rounded-2xl bg-white`}
    >
      {filteredProperty.map((properties) => {
        return (
          <Link onClick={setIsOpen} href={`/mock/${properties?.id}`}>
            <div className="p-3 border  rounded-xl text-wrap hover:bg-blue-100">
              {properties?.title}
            </div>
          </Link>
        );
      })}
    </div>
  );
};
