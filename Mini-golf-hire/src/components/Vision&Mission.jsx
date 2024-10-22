import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faBullseye } from '@fortawesome/free-solid-svg-icons'; // Importing the new icons

const VisionMission = () => {
  return (
    <div className="bg-white py-16 px-4 mx-5">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-15">
        {/* Vision */}
        <div className="bg-green-100 p-8 rounded-lg flex flex-col items-center">
          <div className="flex items-center mb-4"> {/* Flex container for icon and title */}
            <div className="bg-green-700 text-white p-4 rounded-full flex justify-center items-center">
              <FontAwesomeIcon icon={faEye} className="h-6 w-6" />
            </div>
            <h3 className="text-lg leading-6 font-medium text-green-600 ml-2">Our Vision</h3>
          </div>
          <p className="mt-2 text-gray-500 text-center">
            To be Australia’s leading provider of portable mini golf experiences, bringing fun and connection to every event, big or small.
          </p>
          <p className="mt-4 text-gray-500 text-center">
            We strive to create memorable experiences for our clients and their guests, fostering joy and community through our innovative services.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-green-700 p-8 rounded-lg flex flex-col items-center">
          <div className="flex items-center mb-4"> {/* Flex container for icon and title */}
            <div className="bg-white text-green-600 p-4 rounded-full flex justify-center items-center">
              <FontAwesomeIcon icon={faBullseye} className="h-6 w-6" />
            </div>
            <h3 className="text-lg leading-6 font-medium text-white ml-2">Our Mission</h3>
          </div>
          <p className="mt-2 text-white text-center">
            To deliver safe, high-quality, and affordable mini golf experiences nationwide, with a focus on customer satisfaction, innovation, and community engagement.
          </p>
          <p className="mt-4 text-white text-center">
            Our mission is to exceed expectations by providing exceptional service and unique experiences that create lasting memories.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
