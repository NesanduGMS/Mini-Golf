import React from 'react';
import golfball3 from '../assets/golfball3.jpg';
import golfball4 from '../assets/golfball4.jpg';
import golfball5 from '../assets/golfball5.jpg';

const AboutUs = () => {
  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Text section */}
        <div>
          <h2 className="text-sm text-green-600 font-semibold tracking-wide uppercase">About Us – Mini Golf Hire</h2>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900">
            The Original Portable Mini Golf Experience in Australia
          </h1>
          <p className="mt-4 text-gray-500">
            Welcome to Mini Golf Hire, Australia's leading provider of portable mini golf courses, operating since 1983.
            Family-owned and based in Melbourne, we proudly deliver unforgettable mini golf experiences to events all
            over Australia, with dedicated agents stationed in major cities nationwide.
          </p>
        </div>

        {/* Image section */}
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 lg:col-span-1">
            <img
              src={golfball3}
              alt="Mini Golf Course"
              className="object-cover h-[420px] w-full rounded-3xl"
            />
          </div>
          <div className="grid grid-rows-2 gap-4 col-span-2 lg:col-span-1">
            <div>
              <img
                src={golfball4}
                alt="Mini Golf Event"
                className="object-cover h-[205px] w-full rounded-3xl"
              />
            </div>
            <div>
              <img
                src={golfball5}
                alt="Mini Golf Setup"
                className="object-cover h-[205px] w-full rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
