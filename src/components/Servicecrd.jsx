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
        <p className="text-black text-base leading-relaxed mb-6 max-w-xl">
          {description}
        </p>
        <button className="px-3 py-1 border-3 border-orange-400 text-orange-500 rounded-md hover:border-orange-600 transition">
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
