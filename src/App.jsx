import { useState } from "react";
import HomePage from "./components/Home/HomePage";
import AboutPage from "./components/About/AboutPage";
import React from "react";
import Services from "./components/ServicePage/Services";
import StaffAugmentation from "./components/staff-augmentation/StaffAugmentation";
import SystemIntegrate from "./components/SystemIntegrationPage/SystemIntegrate";
import TrainingUpskillingDetailPage from "./components/TrainingUpskillingDetailPage"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WebDesignPage from "./components/WebDesignPage"; 
import FAQSection from "./components/FAQ/FAQSection";
import SocialMediaMarketing from "./components/social-media-marketing/SocialMediaMarketing.jsx";
import BlogPage from "./components/blog/BlogPage.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";
import ContactUs from "./components/contact-us/ContactUs.jsx";
import BlogDetail from "./components/blog-detail/BlogDetail.jsx";
import PortfolioDetails from "./components/PortfolioDetails/PortfolioDetails.jsx";
import Careers from "./components/Careers/Careers.jsx";
import CareersApply from "./components/CareersApply/CareersApply.jsx";
import NotFound from "./components/NotFound.jsx";

const App = () => {
  const [page, setPage] = useState("home");

  return (
    <div className="min-h-screen bg-[#f5f5f7] flex flex-col">
      <Navbar currentPage={page} onNavigate={setPage} />

      <main className="flex-1">
        {page === "home" && <HomePage />}
        {page === "about" && <AboutPage />}
        {page === "services" && <Services />}
        {page === "staff" && <StaffAugmentation />}
        {page === "system" && <SystemIntegrate />}
        {page === "training" && <TrainingUpskillingDetailPage />}
      </main>

      <Footer />
    <div>
      <Services /> 
      <SystemIntegrate /> 
      <SocialMediaMarketing/>
      <BlogPage/>
      <Portfolio/>
      <TrainingUpskillingDetailPage />
      <WebDesignPage />
      <FAQSection/>
      <ContactUs/>
       <BlogDetail/> 
       <PortfolioDetails/> 
       <Careers/> 
       <CareersApply/> 
       <NotFound/> 
    </div>
  </div>
  );
};

export default App;
