import React from "react";
import Heading from "./Heading";
import { benefits } from "../constants";
import Arror from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";

const Services = () => {
  return (
    <div className="relative z-2 mx-[5%] lg:mx-[8%] ">
      <Heading
        className="md:max-w-md lg:max-w-2xl ml-[4rem] mb-8 text-n-14"
        title="Our Services"
      />

      <div className="flex flex-wrap gap-10 mb-10 w-full justify-center">
        {benefits.map((item) => (
          <div
            className="block relative p-0.5 sca sm:scale-100 max-w-[24rem] min-h-[366px]"
            style={{
              backgroundImage: `url(${item.backgroundUrl})`,
            }}
            key={item.id}
          >
            <div className="relative z-2 flex flex-col min-h-[22rem] p-[2rem] pointer-events-none">
              <h5 className="text-xl mb-3 text-n-14">{item.title}</h5>
              <p className="body-2 mb-2 text-n-3">{item.text}</p>
              <div className="flex items-center mt-auto">
                <img
                  src={item.iconUrl}
                  width={48}
                  height={48}
                  alt={item.title}
                  className="bg-n-18 rounded-xl p-1"
                />
                <p className="ml-auto font-code text-xs font-bold text-n-14 uppercase tracking-wider">
                  Explore more
                </p>
                <Arror />
              </div>
            </div>
            {item.light && <GradientLight />}

            <div
              className="absolute inset-0.5 bg-n-1 "
              style={{ clipPath: "url(#benefits)" }}
            >
              <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                {item.imageUrl && (
                  <img
                    src={item.imageUrl}
                    width={380}
                    height={380}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            </div>

            <ClipPath />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
