import React from "react";

const SpecialService = ({ title, description, imageLeft, imageRight }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div>
          <img
            src={imageLeft}
            alt={title}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        <div className="flex flex-col gap-8">
          <img
            src={imageRight}
            alt={title}
            className="w-full h-64 object-cover rounded-xl"
          />

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              {title}
            </h3>

            <p className="text-gray-600 leading-relaxed mb-6">{description}</p>

            <button className="inline-flex items-center justify-center px-6 py-2.5 border border-orange-400 text-orange-500 text-sm font-medium rounded-md transition duration-300 hover:border-orange-600">
              MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialService;
