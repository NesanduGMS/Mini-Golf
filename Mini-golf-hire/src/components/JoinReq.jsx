import React from "react";
import RoundButton from "./RoundButton";
import Heading from "./Heading";
import { golfball } from "../assets";
import PopupButton from "./PopupButton";

const JoinUs = () => {
  return (
    <div className="lg:flex mx-[5%] lg:mx-[10%] mt-10 relative">
      <div className="md:max-w-[35rem] lg:max-w-[25rem] xl:max-w-[35rem] relative">
        <div>
          <Heading
            className="md:max-w-md lg:max-w-2xl mb-4 text-n-14"
            title="Join With Us"
          />
          <p>Are you passionate about creating fun, memorable experiences?</p>
        </div>
        <div className="text-n-2 mt-4">
          <p className="text-sm">
            Become part of the Mini Golf Hire team and help us bring fun and
            excitement to events across Australia! As a valued agent, you'll
            receive full training, support, and access to high-quality
            equipment. Join our trusted, family-owned brand and be part of
            delivering unforgettable experiences. <br />
            Contact us today to learn more!
          </p>
        </div>
        <RoundButton className="text-n-1 hover:text-n-8 mt-4">
          Contact Us
        </RoundButton>
      </div>
      <div className="relative md:ml-[5rem]">
        <img
          src={golfball}
          alt="golfball"
          width={300}
          height={300}
          className="animate-pulse"
        />
        <PopupButton
          className="w-[17rem] sm:w-[18rem] absolute top-1/2 left-1/4 lg:left-1/2"
          title="Book Now"
        />
      </div>
    </div>
  );
};

export default JoinUs;
