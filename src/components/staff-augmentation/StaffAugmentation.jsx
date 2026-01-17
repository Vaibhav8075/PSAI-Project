import Hero from "./Hero";
import Commitment from "./Commitment";
import ServicesSection from "./ServicesSection";
import DarkCards from "./DarkCards";

const StaffAugmentation = () => {
  return (
    <div className="w-full ">
      <Hero />
      <Commitment />
      <ServicesSection />
      <DarkCards />
      {/*yaha pe i will insert footer and connect and navbar also*/}
    </div>
  );
};

export default StaffAugmentation;
