import React from "react";
import { golfball2 } from "../assets";
import Heading from "./Heading";
import RoundButton from "./RoundButton";

const Experience = () => {
  return (
    <div className="px-[5%] lg:px-[10%] flex w-full justify-center bg-n-17 pb-10 pt-[9.5rem]">
      <div className="relative">
        <img
          src={golfball2}
          className="object-cover object-bottom h-[519px] w-[444px] rounded-3xl"
        />
        <div className="bg-n-14 absolute bottom-8 -right-28 flex flex-col items-center justify-center px-8 py-3">
          <p className="text-n-1 text-6xl font-bold">40+</p>
          <p className="text-n-2 text-2xl font-bold">Years of experience!</p>
        </div>
      </div>
      <div className="relative max-w-[40rem] mx-auto mt-5">
        <Heading
          title="Bringing Fun and Excitement to Events Across Australia"
          className="text-n-8"
        />
        <p className="text-n-4">
          At Mini Golf Hire, we specialize in delivering high-quality, portable
          mini golf courses for events of all kinds—corporate functions,
          fundraisers, parties, and more. With over 40 years of experience, our
          family-owned business provides custom-designed courses that are easy
          to set up and tailored to your needs. Operating Australia-wide, we
          pride ourselves on offering fun, affordable, and top-quality
          entertainment for all ages.
        </p>
        <div className="w-full flex items-center justify-center gap-4">
          <button
            href=""
            className="text-n-14 hover:text-n-1 mt-8 border border-n-14 rounded-3xl px-6 py-2 hover:bg-n-14"
          >
            See more...
          </button>
        </div>
      </div>
    </div>
  );
};

export default Experience;
