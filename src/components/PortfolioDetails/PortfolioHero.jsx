import heroImg from "../../assets/images/p3.png";

const PortfolioHero = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center mx-3">
      
      {/* Left */}
      <div>
        <p className="text-sm text-gray-500 mb-3">Client Success Story</p>
        <h1 className="text-3xl md:text-4xl font-semibold leading-snug">
          Boosting Engagement and Sales for a Fashion E-Commerce Brand
        </h1>

        
      </div>

      {/* Right */}
      <div className="flex justify-center">
        <img
          src={heroImg}
          alt="Client"
          className="rounded-2xl w-[320px] object-cover"
        />
      </div>
    </section>
  );
};

export default PortfolioHero;
