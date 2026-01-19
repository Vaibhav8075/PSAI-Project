import Services from "./components/ServicePage/Services";
import SystemIntegrate from "./components/SystemIntegrationPage/SystemIntegrate";
import TrainingUpskillingDetailPage from "./components/TrainingUpskillingDetailPage";
import WebDesignPage from "./components/WebDesignPage"; 
import FAQSection from "./components/FAQ/FAQSection";






const App = () => {
  return (
    <div>
      <Services />    
      <SystemIntegrate />
      <TrainingUpskillingDetailPage />
      <WebDesignPage />
      <FAQSection/>
      
    
      
    </div>
  );
};

export default App;
