import React from "react";

const MostCommonQuestions = () => {
  return (
    <section className="w-full bg-gray-50 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-lg font-medium text-center mb-12">
          Most Common Questions
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {Array(3)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="bg-white rounded-2xl border p-6">
                <h4 className="font-medium mb-3">
                  What is a software solutions company?
                </h4>

                <p className="text-black text-sm leading-relaxed mb-6 mr-13">
                  Thanks to their expert social media marketing, we saw a 3x
                  increase in interactions and brand awareness!"
                </p>

                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <div className="w-8 h-8 rounded-full bg-gray-300" />
                  <span className="font-semibold text-gray-800">Tracey Wilson</span>
                  <span>·</span>
                  <span>August 10, 2025</span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default MostCommonQuestions;
