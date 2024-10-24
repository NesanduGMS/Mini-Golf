


// CourseList.js
import React from "react";
import { useNavigate } from "react-router-dom";
import Calendar from "./Calendar"; // Import the Calendar component

const CourseList = () => {
  const navigate = useNavigate(); // Hook for navigation

  const courses = [
    { name: '9 HOLE COURSES' },
    { name: 'HOLE IN ONE COURSES' },
    { name: 'POSTAL GOLF' },
  ];

  return (
    <div className="min-h-screen bg-gray-400 flex items-center justify-center">
      {/* Flex container for course list and calendar */}
      <div className="w-full max-w-5xl flex flex-row space-x-10">
        {/* Left: Course List */}
        <div className="w-2/3">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-black">Perth</h1>
            <p className="text-gray-600">Western Australia</p>
          </div>

          {courses.map((course, index) => (
            <div
              key={index}
              className="flex justify-between items-center mb-4 p-4 bg-white rounded-lg shadow"
            >
              <p className="text-lg font-semibold">{course.name}</p>
              <button
                onClick={() => navigate("/booknow")} // Navigate to /booknow
                className="bg-[#fffe00] text-black px-4 py-2 rounded-full hover:bg-yellow-400"
              >
                Book Now
              </button>
            </div>
          ))}
        </div>

        {/* Right: Calendar */}
        <div className="w-1/3">
          <Calendar />
        </div>
      </div>
    </div>
  );
};

export default CourseList;
