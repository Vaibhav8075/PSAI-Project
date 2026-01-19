import React from "react";

// ✅ Import images (Vite-safe)
import c10 from "../../assets/images/c10.png";
import image9 from "../../assets/images/image-9.png";

const ClientSuccess = () => {
  return (
    <section className="mt-28 flex flex-col lg:flex-row items-start gap-16">
      
      {/* LEFT TEXT */}
      <div className="max-w-xl">
        <h2 className="text-2xl font-semibold mb-4">
          Client Success Stories
        </h2>

        <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
          <div className="w-5 h-5 rounded-full bg-gray-300 text-center">
            T
          </div>
          <span>Tracey Wilson</span>
          <span>August 02, 2025</span>
        </div>

        <p className="text-gray-600 mb-6 leading-relaxed">
          A sustainable fashion startup struggled with low engagement
          and brand awareness despite high-quality products. We revamped
          their social media strategy by implementing influencer
          collaborations, interactive polls, and data-driven paid
          campaigns. Within three months, their follower count grew by
          150%, engagement rates tripled, and website traffic increased
          by 85%.
          <br /><br />
          Additionally, a viral TikTok campaign led to 40% sales growth
          within a week. By leveraging targeted content and strategic
          advertising, we transformed their online presence into a
          powerful revenue-driving asset.
        </p>

        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md">
          See More
        </button>
      </div>

      {/* RIGHT IMAGES */}
      <div className="flex gap-6">
        <img
          src={c10}
          alt="client success 1"
          className="w-[220px] h-[300px] object-cover rounded-2xl"
        />
        <img
          src={image9}
          alt="client success 2"
          className="w-[220px] h-[200px] object-cover rounded-2xl"
        />
      </div>
    </section>
  );
};

export default ClientSuccess;
