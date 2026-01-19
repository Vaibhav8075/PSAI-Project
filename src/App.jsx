import { useState } from "react";
import HomePage from "./components/Home/HomePage";
import AboutPage from "./components/About/AboutPage";
import Services from "./components/ServicePage/Services";
import StaffAugmentation from "./components/staff-augmentation/StaffAugmentation";
import SystemIntegrate from "./components/SystemIntegrationPage/SystemIntegrate";
import TrainingUpskillingDetailPage from "./components/TrainingUpskillingDetailPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
    </div>
  );
};

export default App;
