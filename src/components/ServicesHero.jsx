import React, { useState } from "react";

const services = [
  {
    title: "Social Media Marketing",
    image: "src/assets/images/scroll1.png",
  },
  {
    title: "Web Design",
    image: "src/assets/images/scroll2.png",
  },
  {
    title: "System Integration",
    image: "src/assets/images/scroll7.png",
  },
  {
    title: "Staff Augmentation",
    image: "src/assets/images/scroll3.png",
  },
  {
    title: "Software Development",
    image: "src/assets/images/scroll4.png",
  },
  {
    title: "Training & Upskilling",
    image: "src/assets/images/scroll5.png",
  },
  {
    title: "Hardware Maintenance",
    image: "src/assets/images/scroll6.png",
  },
];

const ServicesHero = () => {
  const [index, setIndex] = useState(0);

  const prevService = () => {
    setIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const nextService = () => {
    setIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 text-center">

      <h2 className="text-2xl font-semibold mb-8">All our Services</h2>

      {/* Banner */}
      <div className="relative rounded-2xl overflow-hidden">

        <img
          src={services[index].image}
          alt={services[index].title}
          className="w-full h-[360px] object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h3 className="text-white text-3xl font-semibold">
            {services[index].title}
          </h3>
        </div>

        {/* Controls */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2">
          <button
            onClick={prevService}
            className="bg-white/80 hover:bg-white p-2 rounded-full shadow"
          >
            ↑
          </button>
          <button
            onClick={nextService}
            className="bg-white/80 hover:bg-white p-2 rounded-full shadow"
          >
            ↓
          </button>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="mt-6 text-sm text-gray-600">
        <p className="font-medium">Scroll Up or Down</p>
        <p className="text-xs">To Know All Our Services</p>
      </div>
    </div>
  );
};

export default ServicesHero;
