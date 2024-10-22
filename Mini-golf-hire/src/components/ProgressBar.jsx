import React from "react";

const SpecialSection = () => {
  const stats = [
    { label: "Safe", value: 99 },
    { label: "Nationwide Service", value: 95 },
    { label: "Quality Assurance", value: 98 },
    { label: "Customer Satisfaction", value: 100 },
  ];

  return (
    <div className="bg-white py-12" style={{ marginLeft: '30px', marginRight: '30px' }}>
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
          Why We Are Special
        </h2>

        {/* Description */}
        <p className="mt-4 text-gray-600">
          We deliver safe, high-quality mini golf experiences nationwide, backed
          by 40+ years of expertise. With a 100% customer satisfaction rate,
          flexible course options, and dedicated on-site supervision, we ensure
          fun for every occasion, big or small.
        </p>

        {/* Stats with Progress Bars */}
        <div className="mt-8 space-y-5">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="flex justify-between w-full md:w-3/4">
                <div className="text-left font-semibold text-green-700">
                  {stat.label}
                </div>
                <div className="text-right text-green-700 font-bold">
                  {stat.value}%
                </div>
              </div>
              <div className="w-full md:w-3/4 mt-2">
                <div className="relative bg-green-100 h-2 rounded-full overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-full bg-green-700 rounded-full"
                    style={{ width: `${stat.value}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecialSection;
