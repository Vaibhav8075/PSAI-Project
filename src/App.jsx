import React from "react";
import Services from "./components/services.jsx";
import SystemIntegrate from "./components/SystemIntegrate.jsx";
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
  return (
    <div>
      {/* <Services /> */}
      <SystemIntegrate /> 
      {/*<SocialMediaMarketing/> */}
      {/*<BlogPage/>*/}
      {/*<Portfolio/>*/}
      {/*<ContactUs/>*/}
      {/* <BlogDetail/> */}
      {/* <PortfolioDetails/> */}
      {/* <Careers/> */}
      {/* <CareersApply/> */}
      <NotFound/>
    </div>
  );
};

export default App;
