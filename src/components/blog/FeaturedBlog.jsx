import React from "react";

// ✅ Import images (Vite-safe)
import c13 from "../../assets/images/c13.png";
import c14 from "../../assets/images/c14.png";

const FeaturedBlog = () => {
  return (
    <div className="lg:col-span-2 flex flex-col gap-12 md:gap-16">
      
      {/* TOP FEATURED BLOG */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
        <img
          src={c13}
          alt="featured"
          className="
            w-full md:w-[320px] lg:w-[360px]
            h-[220px] sm:h-[240px] lg:h-[260px]
            object-cover rounded-2xl
          "
        />

        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-4">
            Unlocking the Full <br />
            Potential fo your <br />
            Business
          </h3>

          <p className="text-gray-600 mb-4 text-sm sm:text-base">
            The goal of social media marketing is to boost brand
            awareness, engage target audiences, and drive website
            traffic through compelling content. It aims to.
          </p>

          <button className="text-orange-500 font-medium">
            Read More
          </button>
        </div>
      </div>

      {/* BOTTOM FEATURED BLOG */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-4">
            Unlocking the Full <br />
            Potential fo your <br />
            Business
          </h3>

          <p className="text-gray-600 mb-4 text-sm sm:text-base">
            The goal of social media marketing is to boost brand
            awareness, engage target audiences, and drive website
            traffic through compelling content. It aims to.
          </p>

          <button className="text-orange-500 font-medium">
            Read More
          </button>
        </div>

        <img
          src={c14}
          alt="featured"
          className="
            w-full md:w-[320px] lg:w-[360px]
            h-[220px] sm:h-[240px] lg:h-[260px]
            object-cover rounded-2xl
          "
        />
      </div>
    </div>
  );
};

export default FeaturedBlog;
