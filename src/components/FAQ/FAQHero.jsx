import React from "react";
import { FaSearch } from "react-icons/fa";

const FAQHero = () => {
  return (
    <section className="w-full bg-gray-50 pt-24 pb-16 text-center">
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-3xl font-medium mb-2">
          You Have Questions?
        </h2>

        <p className="text-gray-600 mb-10">
          We Have Answers
        </p>

        <div className="flex justify-center items-center gap-3">
          <div className="flex items-center gap-2 border rounded-lg px-4 py-2 w-75 text-gray-500">
            <FaSearch className="text-sm" />
            <input
              type="text"
              placeholder="Search for Questions..."
              className="outline-none w-full text-sm"
            />
          </div>

          <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition">
            Search
          </button>
        </div>

      </div>
    </section>
  );
};

export default FAQHero;
