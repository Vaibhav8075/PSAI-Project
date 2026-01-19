import React from "react";
import Servicecrd from "./Servicecrd.jsx";
import SpecialService from "./SpecialService.jsx";
import WhatWeDo from "./WhatWeDo.jsx";
import ServicesHero from "./ServicesHero.jsx";
import webdesign2 from "../../assets/images/webdesign2.png";
import webdesign1 from "../../assets/images/webdesign1.png";
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
        description="PJPL, Formally PS Associates, specializes in delivering technology solutions to meet the needs of Digital India, with global vision, in-depth understanding of customers and suppliers, demonstrated thought leadership and a consultative partnership approach an offer the highest possible returns on IT investment."
        image="src/assets/images/image(1).png"
      />

      <Servicecrd
        title="Hardware Maintanance"
        description="PJIPL's outstanding services in the Field of Computer Hardware Maintenance. Our philosophy of dealing direct enables us to anticipate, understand and address your unique needs and supply you with customized solutions that provide the maximum return on your IT investment."
        image="src/assets/images/image(2).png"
        reverse
      />

      <Servicecrd
        title="Social Media Marketing"
        description="PJIPL, Formally PS Associates, provides Social Media Marketing Solutions and helps businesses grow online. We help increase leads and sales for businesses through social media."
        image="src/assets/images/image(3).png"
      />

      <SpecialService
        title="Staff Augmentation"
        description="PJIPL offer staff augmentation solutions to help organizations scale efficiently with skilled professionals."
        imageLeft={software1}
        imageRight={software2}
        dominant="left"
      />
    </div>
  );
};

export default Services;
