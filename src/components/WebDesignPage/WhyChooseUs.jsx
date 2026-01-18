import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className=" text-3xl font-semibold mb-10">Why Choose Us?</h1>   

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-40 mb-12 text-lg text-gray-900">
          
          <div className="flex items-center justify-center gap-2">
            <span>✓</span>
            <span>User-Centered Design Approach</span>
          </div>

          <div className="flex items-center justify-center gap-2">
            <span>SEO-Friendly & Scalable Solutions</span>
            <span>✓</span>
          </div>

          <div className="text-end flex items-center justify-center gap-2">
            <span>✓</span>
            <span>Fast & Secure Websites</span>
          </div>

          <div className="flex items-center justify-center gap-2">
            <span>Tailored to Your Business Needs</span>
            <span>✓</span>
          </div>

        </div>

        {/* Button */}
        <button className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition">
          Explore Now
        </button>

      </div>
    </section>
  );
};

export default WhyChooseUs;
