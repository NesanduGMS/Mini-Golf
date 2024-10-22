
import React from 'react';
import Map from '../components/Map';
import CoursesHeading from "../components/CoursesHeading";

const Home = () => {
  return (
    <div className="w-full -mt-[7.25rem]">
      <CoursesHeading />
      <Map />
    </div>
  );
};

export default Home;