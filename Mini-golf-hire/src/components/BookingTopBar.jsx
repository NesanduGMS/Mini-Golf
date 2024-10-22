import { topbarLinks } from "@/constants";
import { useFormCompletion } from "@/context/FormCompletionContext";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const BookingTopBar = () => {
  const { pathname } = useLocation();
  const { completedForms } = useFormCompletion();

  return (
    <nav>
      <ul className="flex gap-6 justify-center mt-6">
        {topbarLinks.map((link, index) => {
          const isActive = pathname === link.route;
          const isDisabled = !completedForms[link.route.split("/").pop()];

          return (
            <li
              key={link.label}
              className={`rounded-lg bg-n-1 border ${
                !isActive && "hover:bg-n-16 border-n-20 border-2"
              } transition group ${
                isActive && "bg-n-20 text-n-1"
              } min-w-[18rem] ${
                pathname === "/booknow/billing_details" && "min-w-[16rem]"
              } ${isDisabled && "pointer-events-none"}`}
            >
              <NavLink
                to={isDisabled ? "#" : link.route}
                className={`flex gap-4 items-center py-4 px-4 ${
                  isDisabled && "pointer-events-none"
                }`}
              >
                <div
                  className={`border border-n-1 w-6 h-6 rounded-full bg-n-1 flex justify-center hover:text-n-8 mr-4 ${
                    isActive && "bg-n-1 text-n-20"
                  } ${!isActive && "border-n-20 border-2"}`}
                >
                  {index + 1}
                </div>
                {link.label}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default BookingTopBar;
