import React from 'react';
import golfball from "../assets/Golf2.jpg"; // Import the golf ball image

const CoursesHeader = () => {
  return (
    <div
      className="relative text-white h-40 bg-center"
      style={{
        backgroundImage: `url(${golfball})`, // Use the imported image as background
        backgroundSize: 'cover',              // Ensure the image covers the entire div
        backgroundPosition: 'center',         // Center the image
      }}
    >
      {/* Optional semi-transparent overlay */}
      <div className="absolute inset-0 bg-black opacity-25"></div>
      
    </div>
  );
};

const CoursesPage = () => {
  return (
    <div>
      <CoursesHeader />
    </div>
  );
};

export default CoursesPage;
