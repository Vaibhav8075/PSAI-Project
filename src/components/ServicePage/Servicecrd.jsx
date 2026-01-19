import React from "react";

const Servicecrd = ({ title, description, image, reverse }) => {
  return (
    <div
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-center gap-16 mb-28`}
    >
      <div className="service-content">
        <h3 className="text-2xl font-semibold mb-4">{title}</h3>
        <p className="text-gray-800 text-base leading-relaxed mb-6 max-w-xl">
          {description}
        </p>
        <button className="inline-flex items-center justify-center px-6 py-2.5 border border-orange-400 text-orange-500 text-sm font-medium rounded-md transition duration-300 hover:border-orange-600 hover:bg-orange-50">
          MORE
        </button>
      </div>
      <div className="service-image flex-1 flex justify-center">
        <img src={image} className="w-full max-w-lg object-contain" />
      </div>
    </div>
  );
};

export default Servicecrd;
