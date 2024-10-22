import React from "react";
import golfballImage from "../assets/GolfBall.png";

const MiniGolfSection = () => {
  return (
    <div className="bg-green-100 py-8 px-6 md:px-16 lg:px-32">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-2xl md:text-4xl font-bold text-green-700 text-left">
            A Legacy of Fun & Innovation
        </h2>

        {/* Description */}
        <p className="mt-4 -mb-5 text-gray-700 text-left ml-20">
            Our journey began with homemade golf clubs, painted plywood courses, and used golf balls. 
            Fast forward to today, and we’ve evolved into the trusted name in{" "}
        <span className="font-semibold">portable mini golf</span>, providing{" "}
        <span className="font-semibold">premium, easy-to-set-up modular courses</span> 
            designed for everything from corporate events to fundraising, parties, and weddings.
        </p>


        {/* Image */}
        <div className="mt-8">
          <img 
            src={golfballImage} 
            alt="Golf Ball" 
            className="mx-auto h-20 md:h-24 lg:h-32"
          />
        </div>

        {/* Innovation at Every Turn */}
        <h2 className="mt-4 text-2xl md:text-4xl font-bold text-green-700 text-right">
          Innovation at Every Turn
        </h2>

        {/* Second Description */}
        <p className="mt-4 text-gray-700 text-right mr-20">
          We don’t just offer mini golf—we innovate! Mini Golf Hire was the first to introduce{" "}
          <span className="font-semibold">Portable Billiard Golf</span>, a fun, table-top twist 
          on the classic golf game, complete with obstacles and challenges that bring a new 
          level of excitement to any event.
        </p>
      </div>
    </div>
  );
};

export default MiniGolfSection;
