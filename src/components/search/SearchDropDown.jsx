import Link from "next/link";

export const SearchDropDown = ({
  filteredArticle,
  isOpen,
  setIsOpen,
  setSearchValue,
}) => {
  filteredArticle.length = 5;

  const handleClickLink = () => {
    setIsOpen(false);
    setSearchValue("");
  };

  return (
    <div
      className={`${
        isOpen ? "h-200 border" : "h-0"
      } flex flex-col gap-1 transition-all duration-200 overflow-hidden absolute rounded-2xl bg-white`}
    >
      {filteredArticle.map((article) => {
        return (
          <Link onClick={setIsOpen} href={`/blogs/${article?.id}`}>
            <div className="p-3 border  rounded-xl text-wrap hover:bg-blue-100">
              {article?.title}
            </div>
          </Link>
        );
      })}
    </div>
  );
};
