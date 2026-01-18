import PortfolioHero from "./PortfolioHero";
import TopClients from "./TopClients";
import ClientSuccess from "./ClientSuccess";

const Portfolio = () => {
  return (
    <div className="px-6 lg:px-16">
      <PortfolioHero />
      <TopClients />
      <ClientSuccess />
    </div>
  );
};

export default Portfolio;
