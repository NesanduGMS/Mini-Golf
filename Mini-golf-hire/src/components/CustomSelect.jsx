import { useState } from "react";
import { downArrow } from "@/assets";
import { Input } from "./ui/input";

const CustomSelect = ({ field, options, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelect = (option) => {
    setSelectedOption(option);
    field.onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full">
      <div
        className="shad-input pr-2 rounded-lg w-full flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Input
          type="text"
          className="relative w-full cursor-pointer border-none"
          value={selectedOption || ""}
          readOnly
          placeholder={placeholder}
          {...field}
        />
        <img
          src={downArrow}
          alt="down arrow"
          className="ml-2"
          width={25}
          height={25}
        />
      </div>
      {isOpen && (
        <ul className="absolute bg-white shadow-md mt-2 w-full z-10 max-h-40 overflow-y-auto rounded-lg">
          {options.map((option, index) => (
            <li
              key={index}
              className="py-2 px-4 hover:bg-gray-200 cursor-pointer"
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
