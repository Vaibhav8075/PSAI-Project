import React, { useState } from "react";

// ✅ Import images (Vite-safe)
import scroll1 from "../../assets/images/scroll1.png";
import scroll2 from "../../assets/images/scroll2.png";
import scroll3 from "../../assets/images/scroll3.png";
import scroll4 from "../../assets/images/scroll4.png";
import scroll5 from "../../assets/images/scroll5.png";
import scroll6 from "../../assets/images/scroll6.png";
import scroll7 from "../../assets/images/scroll7.png";

const services = [
  {
    title: "Social Media Marketing",
    image: scroll1,
  },
  {
    title: "Web Design",
    image: scroll2,
  },
  {
    title: "System Integration",
    image: scroll7,
  },
  {
    title: "Staff Augmentation",
    image: scroll3,
  },
  {
    title: "Software Development",
    image: scroll4,
  },
  {
    title: "Training & Upskilling",
    image: scroll5,
  },
  {
    title: "Hardware Maintenance",
    image: scroll6,
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
      <h2 className="text-2xl font-semibold mb-8">
        All our Services
      </h2>

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
