import React from "react";

// ✅ Import images (Vite-safe)
import c1 from "../../assets/images/c1.png";
import c2 from "../../assets/images/c2.png";
import c3 from "../../assets/images/c3.png";
import c4 from "../../assets/images/c4.png";

const related = [c1, c2, c3, c4];

const RelatedContent = () => {
  return (
    <section className="mt-32 mb-20">
      <h2 className="text-2xl font-semibold mb-10">
        Related content you may Like
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {related.map((img, index) => (
          <div key={index}>
            <img
              src={img}
              alt="related blog"
              className="rounded-2xl mb-4 h-[220px] w-full object-cover"
            />

            <h3 className="font-semibold mb-2">
              Unlocking the power
            </h3>

            <p className="text-sm text-gray-600 mb-3">
              Social media marketing is the use of social media platforms promote.
            </p>

            <div className="flex items-center gap-2 text-xs text-gray-500">
              <div className="w-5 h-5 rounded-full bg-gray-300 text-center">
                T
              </div>
              <span>Tracey Wilson</span>
              <span>August 02, 2025</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelatedContent;
