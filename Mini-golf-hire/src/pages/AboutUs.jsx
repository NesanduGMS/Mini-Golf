// import React from "react";

// const AboutUs = () => {
//   return <div>AboutUs</div>;
// };

// export default AboutUs;

import MiniGolfExperience from "../components/MiniGolfExperience";
import VisionMission from "../components/Vision&Mission";
import LegacyofFun from "../components/LegacyofFun";
import ProgressBar from "../components/ProgressBar";
import AboutHeading from "../components/AboutHeading";

const Home = () => {
  return (
    <div className="w-full -mt-[7.25rem]">
      <AboutHeading />
      <MiniGolfExperience />
      <VisionMission />
      <LegacyofFun />
      <ProgressBar />
    </div>
  );
};

export default Home;

