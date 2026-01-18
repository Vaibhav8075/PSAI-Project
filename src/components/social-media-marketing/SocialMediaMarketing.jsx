import Hero from "./Hero";
import ImageHighlights from "./ImageHighlights";
import WhatWeDo from "./WhatWeDo";
import StatsCards from "./StatsCards";
import AboutBenefits from "./AboutBenefits";
import ClientsShowcase from "./ClientsShowcase";
import CTASection from "./CTASection";
import AboutYou from "./AboutYou";

const SocialMediaMarketing = () => {
  return (
    <div className="w-full">
      <Hero />
      <ImageHighlights />

       <div className="mt-32 lg:mt-40">
      <div className="space-y-24 mx-10">
        <div className="flex flex-col lg:flex-row gap-10 px-6">
          <WhatWeDo />
          <StatsCards />
          <AboutYou />
        </div>

        <AboutBenefits />
        <ClientsShowcase />
        <CTASection />
      </div>
      </div> 
    </div>
  );
};

export default SocialMediaMarketing;
