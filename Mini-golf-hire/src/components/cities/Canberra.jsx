import React from 'react';
import { useNavigate } from 'react-router-dom';

const CourseList = () => {
  const navigate = useNavigate(); // Hook for navigation

  const courses = [
    { name: '9 HOLE COURSES' },
    { name: '6 HOLE COURSES' },
    { name: 'HOLE IN ONE COURSES' },
    { name: 'POSTAL GOLF' },
    { name: 'CHIP GOLF' },
  ];

  return (
    <div className="min-h-screen bg-gray-400 flex flex-col items-center justify-center">
      <div className="w-full max-w-md">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-black">Canberra</h1>
          <p className="text-gray-600">New South Wales</p>
        </div>

        {courses.map((course, index) => (
          <div
            key={index}
            className="flex justify-between items-center mb-4 p-4 bg-white rounded-lg shadow"
          >
            <p className="text-lg font-semibold">{course.name}</p>
            <button
              onClick={() => navigate('/booknow')} // Navigate to /booknow
              className="bg-[#fffe00] text-black px-4 py-2 rounded-full hover:bg-yellow-400"
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;


