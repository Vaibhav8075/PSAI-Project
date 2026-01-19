import React from "react";
import Servicecrd from "./Servicecrd.jsx";
import SpecialService from "./SpecialService.jsx";
import WhatWeDo from "./WhatWeDo.jsx";
import ServicesHero from "./ServicesHero.jsx";
import webdesign2 from "../../assets/images/webdesign2.png";
import webdesign1 from "../../assets/images/Webdesign1.png";
import training1 from "../../assets/images/training1.png";
import software1 from "../../assets/images/software1.png";
import software2 from "../../assets/images/software2.png";
import image1 from "../../assets/images/image-1.png";
import image2 from "../../assets/images/image-2.png";
import image3 from "../../assets/images/image-3.png";

const Services = () => {
  return (
    <div className="services max-w-7xl mx-auto px-6 py-20">
      <ServicesHero />
      <WhatWeDo />

      <SpecialService
        title="Web Design"
        description="PJIPL offers a complete suite of Web Solutions to venture-backed companies, helping them build a solid online foundation for growth. We offer Web Designing, Web Development, Internet Marketing /SEO, and Social Media Marketing."
        imageLeft={webdesign2}
        imageRight={webdesign1}
        dominant="left"
      />

      <Servicecrd
        title="Training & Upskilling"
        description="PJIPL enables skill development by providing SMART Training Solutions using digital tools to improve understanding and employability."
        image={training1}
      />

      <SpecialService
        title="Software Development"
        description="PJIPL products include Smart Credit, HotelPro, and enterprise-grade software solutions for operational excellence."
        imageLeft={software1}
        imageRight={software2}
        dominant="left"
      />

      <Servicecrd
        title="System Integration"
        description="PJIPL specializes in delivering technology solutions aligned with Digital India, ensuring maximum return on IT investments."
        image={image1}
      />

      <Servicecrd
        title="Hardware Maintenance"
        description="PJIPL provides outstanding computer hardware maintenance services with customized solutions for maximum ROI."
        image={image2}
        reverse
      />

      <Servicecrd
        title="Social Media Marketing"
        description="PJIPL helps businesses grow online through effective social media marketing solutions."
        image={image3}
      />

      <SpecialService
        title="Staff Augmentation"
        description="PJIPL offers staff augmentation solutions to help organizations scale efficiently with skilled professionals."
        imageLeft={software1}
        imageRight={software2}
        dominant="left"
      />
    </div>
  );
};

export default Services;
