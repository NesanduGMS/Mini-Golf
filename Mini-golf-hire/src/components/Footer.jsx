import React from "react";
import { logo, logoSymbol } from "../assets";
import { navigation, socials } from "../constants";

const Footer = () => {
  return (
    <>
      <div className="bg-n-14 flex flex-col md:flex-row mx-[5%] lg:mx-[10%] mt-10 rounded-t-lg py-[2rem] gap-4 justify-center items-center">
        <div className="max-w-[18rem] pt-5 w-full">
          <div className="flex items-center">
            <img src={logoSymbol} width={48} height={48} alt="mini-golf-hire" />
            <h5 className="h5 text-n-1 font-semibold text-xl md:text-3xl ml-2">
              Mini Golf Hire
            </h5>
          </div>
          <p className="text-xl md:text-xs text-n-1 mt-5">
            Bringing Portable Mini Golf Fun to Every Event Since 1983. Quality,
            Safety, and Entertainment Australia-wide.
          </p>
          <div className="flex sm:justify-between justify-center items-center gap-7 max-sm:flex-col mt-8">
            <ul className="flex gap-5 flex-wrap">
              {socials.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  className="flex items-center justify-center w-10 h-10 md:w-6 md:h-6 rounded-full border border-n-1 transition-colors"
                >
                  <img
                    src={item.iconUrl}
                    width={14}
                    height={14}
                    alt={item.title}
                  />
                </a>
              ))}
            </ul>
          </div>
        </div>
        <div className="max-w-[15rem] pt-3 lg:mx-16 mx-4">
          <div className="pl-2 border-l-4 h-6 flex items-center">
            <h5 className="h6 text-n-1 font-semibold text-3xl md:text-2xl">
              Quick Links
            </h5>
          </div>
          <div className="mt-8 ml-4">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                className={`block relative text-xl text-n-1 transition-colors ${
                  item.onlyMobile ? "lg:hidden" : ""
                } pb-2 md:text-xs lg:leading-5 lg:hover:text-n-8`}
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
        <div className="max-w-[15rem] pt-3 lg:ml-8 ml-4">
          <div className="pl-2 border-l-4 h-6 flex items-center">
            <h5 className="h6 text-n-1 font-semibold text-3xl md:text-2xl">
              Contact
            </h5>
          </div>
          <div className="mt-8 ml-4">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                className={`block relative text-xl text-n-1 transition-colors ${
                  item.onlyMobile ? "lg:hidden" : ""
                } pb-2 md:text-xs lg:leading-5 lg:hover:text-n-8`}
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-n-14 py-3 text-center text-n-8 mx-[5%] lg:mx-[10%]">
        <hr className="border-n-1 max-w-[35rem] mx-auto" />
        <p className="text-xs mt-2 text-n-1">
          © 2024 Mini Golf Hire. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
