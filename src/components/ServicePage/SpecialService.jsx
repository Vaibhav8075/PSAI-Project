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
            <h3 className="text-2xl font-semibold text-black mb-4">
              {title}
            </h3>

            <p className="text-black leading-relaxed mb-6">{description}</p>

            <button className="px-3 py-1 border-3 border-orange-400 text-orange-500 rounded-md hover:border-orange-600 transition">
              MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialService;
