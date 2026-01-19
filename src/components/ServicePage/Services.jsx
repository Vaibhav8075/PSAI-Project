import React from "react";
import Servicecrd from "./Servicecrd.jsx";
import SpecialService from "./SpecialService.jsx";
import WhatWeDo from "./WhatWeDo.jsx";
import ServicesHero from "./ServicesHero.jsx";


const Services = () => {
  return (
    <div className="services max-w-7xl mx-auto px-6 py-20">
      <ServicesHero/>
      <WhatWeDo/>
      <SpecialService
        title="Web Design"
        description="PJIPL offers a complete suite of Web Solutions to venture-backed companies, helping them build a solid online foundation for growth. We offer the following web services: Web Designing, Web Development, Internet Marketing /SEO, and Social Media Marketing."
        imageLeft="src/assets/images/webdesign2.png"
        imageRight="src/assets/images/Webdesign1.png"
        dominant="left"
      />
      <Servicecrd
        title="Training & Upskilling"
        description="PJIPL, Formally PS Associates, is enabling Skill development by providing SMART Training Solutions using Digital tools toenable better understanding of concepts and increases Employ-ability of trainee."
        image="src/assets/images/training1.png"
      />
      <SpecialService
        title="Software Development"
        description="PJIPL Products range include:- Smart Credit Online Branch Automation System for Credit Societies HotelPro HotelPro is a revolutionary software Solution for achieving excellence in hotel operations and consequent increase in Profitability resulting from improved guest service referral sales."
        imageLeft="src/assets/images/software1.png"
        imageRight="src/assets/images/software2.png"
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
        description="PJIPL Products range include:- Smart Credit Online Branch Automation System for Credit Societies HotelPro HotelPro is a revolutionary software Solution for achieving excellence in hotel operations and consequent increase in Profitability resulting from improved guest service referral sales."
        imageLeft="src/assets/images/software1.png"
        imageRight="src/assets/images/software2.png"
        dominant="left"
      />
    </div>
  );
};

export default Services;
