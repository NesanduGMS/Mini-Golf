import { useState } from "react";
import { Input } from "./ui/input";

const CustomInputWithPlaceholder = ({ field, placeholder, type, icon }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative w-full">
      {!isFocused && !field.value && (
        <span className="absolute left-3 top-2 text-gray-400 pointer-events-none">
          {placeholder}
        </span>
      )}
      <img
        src={icon}
        alt="Icon"
        className="absolute right-3 top-2.5 pointer-events-none w-5 h-5"
      />
      <Input
        type={type}
        className="relative shad-input w-full pl-10"
        {...field}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  );
};

export default CustomInputWithPlaceholder;
