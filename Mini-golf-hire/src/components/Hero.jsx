import { useRef } from "react";
import { golfPlayer, golfbg } from "../assets";
import RoundButton from "../components/RoundButton";
import { BackgroundCircles } from "../components/design/Hero";
import { ScrollParallax } from "react-just-parallax";
import PopupButton from "./PopupButton";
import { collabText, heroIcons } from "../constants";

const Hero = () => {
  const parallaxRef = useRef(null);
  return (
    <div className="relative bg-n-16 h-[50rem]" ref={parallaxRef}>
      <img
        src={golfPlayer}
        className="absolute w-full h-full lg:max-w-[40rem] xl:max-w-[50rem] right-0 top-0 z-0 object-cover object-top"
      />
      <div className="relative pt-[5rem] z-1 mx-[5%] lg:mx-[10%]">
        <div className="max-w-[40rem] mt-[2rem] pt-[7.25rem] pb-10">
          <p className=" text-green-800 text-xl font-semibold">
            Only hire the original and the best of
          </p>
          <h1 className="text-6xl text-n-5 font-bold pt-6">
            PORTABLE <br />
            mini golf
          </h1>
          <p className="text-xl text-n-5 pt-5">
            Come to us for the Portable Mini Golf
            <br /> Experience in Australia!
          </p>
        </div>
        <div className="relative flex gap-10">
          <RoundButton href="" className="text-n-1 hover:text-n-8">
            Get Started
          </RoundButton>
          <RoundButton href="" white className="text-n-8 hover:text-n-14">
            Call
          </RoundButton>
          <div className="relative z-1 -right-[4rem] mx-[5%] lg:mx-[10%]">
            <ScrollParallax isAbsolutelyPositioned>
              <PopupButton
                className="hidden absolute w-[18rem] lg:flex "
                title="Book Now"
              />
            </ScrollParallax>
          </div>
        </div>
      </div>
      <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24 mt-[5.25rem]">
        <BackgroundCircles />
      </div>
      <div className="relative mx-[5%] lg:mx-[10%] pt-[3rem] lg:pt-[2.5rem] max-w-[65rem]">
        <ul className="gap-8 hidden md:flex w-full">
          {heroIcons.map((icon, index) => (
            <li
              key={index}
              className="bg-n-1 items-center w-full shadow-md flex flex-col rounded-lg"
            >
              <img src={icon.iconUrl} className="object-cover w-15 h-15 mt-4" />
              <h5 className="text-n-8 text-base font-bold items-center mt-2">
                {icon.title}
              </h5>
              <div className="flex items-center justify-center p-2">
                <span className="text-n-4 text-base font-normal items-center text-center">
                  {icon.text}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Hero;
