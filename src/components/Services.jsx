import React from "react";
import Servicecrd from "./Servicecrd.jsx";
import SpecialService from "./SpecialService";

const Services = () => {
  return (
    <div className="services max-w-7xl mx-auto px-6 py-20">
      <Servicecrd
        title="System Integration"
        description="PJPL, Formally PS Associates, specializes in delivering technology solutions to meet the needs of Digital India, with global vision, in-depth understanding of customers and suppliers, demonstrated thought leadership and a consultative partnership approach an offer the highest possible returns on IT investment."
        image="src/assets/images/image (1).png"
      />
      <Servicecrd
        title="Hardware Maintanance"
        description="PJIPL's outstanding services in the Field of Computer Hardware Maintenance. Our philosophy of dealing direct enables us to anticipate, understand and address your unique needs and supply you with customized solutions that provide the maximum return on your IT investment."
        image="src/assets/images/image (2).png"
        reverse
      />

      <Servicecrd
        title="Social Media Marketing"
        description="PJIPL, Formally PS Associates, provides Social Media Marketing Solutions and helps businesses grow online. We help increase leads and sales for businesses through social media."
        image="src/assets/images/image (3).png"
      />
      <SpecialService
        title="Staff Augmentation"
        description="PJIPL is one of Central India’s fastest emerging names in Manpower consultancy which provides a wide range of recruitment solutions for diverse requirements. We have a clear vision of achieving success and growth for both organizations and candidates."
        imageLeft="src/assets/images/image (4).png"
        imageRight="src/assets/images/image (5).png"
      />
    </div>
  );
};

export default Services;
