import Link from "next/link";
import { CloseIcon } from "../svg/CloseIcon";

export const StaySelectedValue = ({ selectedValue, setSelectedValue }) => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleClickLink = (event) => {
    setIsOpen(false);
    setSelectedValue(event.target.value);
  };

  const filteredPropertyValue = data.properties.filter((property) =>
    property?.City?.toLowerCase().includes(selectedValue)
  );

  return (
    <main>
      <div
        className={`${
          isOpen ? "border" : "h-0"
        } flex flex-col gap-1 transition-all duration-200 overflow-hidden absolute rounded-2xl bg-blue-200`}
      >
        {filteredPropertyValue.map((properties) => {
          return (
            <div
              className="p-3 border flex justify-center items-center rounded-xl relative text-wrap hover:bg-blue-400 text-black "
              onClick={handleClickLink}
            >
              {properties?.City}
            </div>
          );
        })}
      </div>
    </main>
  );
};
