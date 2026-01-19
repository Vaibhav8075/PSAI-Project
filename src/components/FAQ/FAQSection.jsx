import React from "react";
import FAQHero from "./FAQHero";
import MostCommonQuestions from "./MostCommonQuestions";

const FAQSection = () => {
  return (
    <section className="w-full bg-white">
      <FAQHero />
      <MostCommonQuestions />

      {/* Floating chat button */}
      <div className="fixed right-6 bottom-6">
        <button className="bg-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-orange-600 transition">
          💬
        </button>
      </div>
    </section>
  );
};

export default FAQSection;
