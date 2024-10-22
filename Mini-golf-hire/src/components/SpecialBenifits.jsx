import React from "react";
import { benifitsBg } from "../assets";
import Heading from "./Heading";
import { special_benefits } from "../constants";

const SpecialBenifits = () => {
  return (
    <div className="px-[5%] lg:px-[8%] relative">
      <img
        src={benifitsBg}
        className="absolute top-0 left-0 w-full h-full object-cover object-top"
        alt="Benefits Background"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/50 to-black/50" />
      <Heading
        title="Why Choose Us?"
        className="relative text-n-1 md:max-w-md lg:max-w-2xl pt-12 pb-8 w-full flex justify-center"
      />
      <div className="relative max-w-[40rem] mx-auto">
        <p className="text-n-1 text-center">
          At Mini Golf Hire, we are committed to delivering a unique and
          engaging experience for every event. With our tailored mini golf
          setups, we provide high-quality, portable courses that cater to
          corporate, fundraising, and domestic events. Our flexible options, fun
          variations, and nationwide availability make us the go-to choice for a
          memorable mini golf experience
        </p>
      </div>
      <div className="flex flex-wrap gap-10 mb-10 w-full items-center text-center justify-center">
        {special_benefits.map((item) => (
          <div
            className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] text-center"
            key={item.id}
          >
            <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
              <h5 className="h5 mb-5 text-n-1">{item.title}</h5>
              <p className="body-2 mb-6 text-n-3">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialBenifits;
