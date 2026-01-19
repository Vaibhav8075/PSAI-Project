import React from "react";

// ✅ Import all images (Vite-safe)
import c1 from "../../assets/images/c1.png";
import c2 from "../../assets/images/c2.png";
import c3 from "../../assets/images/c3.png";
import c4 from "../../assets/images/c4.png";
import c5 from "../../assets/images/c5.png";
import c6 from "../../assets/images/c6.png";
import c7 from "../../assets/images/c7.png";
import c8 from "../../assets/images/c8.png";
import c9 from "../../assets/images/c9.png";
import c10 from "../../assets/images/c10.png";
import c11 from "../../assets/images/c11.png";
import c12 from "../../assets/images/c12.png";

// ✅ Image array
const blogs = [
  c1, c2, c3, c4,
  c5, c6, c7, c8,
  c9, c10, c11, c12
];

const BlogGrid = () => {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold mb-8">
        Recent Blog Posts
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {blogs.map((img, index) => (
          <div key={index}>
            <img
              src={img}
              alt="blog"
              className="rounded-2xl mb-4 h-[220px] w-full object-cover"
            />

            <h3 className="font-semibold mb-2">
              Unlocking the power
            </h3>

            <p className="text-sm text-gray-600 mb-3">
              Social media marketing is the use of social media platforms promote.
            </p>

            <div className="flex items-center gap-2 text-xs text-gray-500">
              <div className="w-5 h-5 rounded-full text-center bg-gray-300">
                <p>T</p>
              </div>
              <span>Tracey Wilson</span>
              <span>August 02, 2025</span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md">
          Load More
        </button>
      </div>
    </section>
  );
};

export default BlogGrid;
