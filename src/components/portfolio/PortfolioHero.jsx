const PortfolioHero = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between mt-20 gap-12">
      
      {/* LEFT CONTENT */}
      <div className="max-w-xl">
        <h1 className="text-3xl font-semibold mb-4">
          Our Social Media Marketing <br />
          Success Stories
        </h1>

        <p className="text-gray-600 mb-6">
          Engage, Inspire, Convert – Elevate Your Brand <br />
          with Smart Social Marketing
        </p>

        <div className="flex gap-4">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md">
            Get Started
          </button>
          <button className="border border-gray-300 px-6 py-2 rounded-md">
            More About Us
          </button>
        </div>
      </div>

      {/* RIGHT IMAGES */}
      <div className="relative w-[380px] h-[420px]">
        <img
          src="/src/assets/images/c10.png"
          className="absolute top-0 left-0 w-[160px] rounded-2xl"
        />
        <img
          src="/src/assets/images/social8.png"
          className="absolute top-28 right-0 w-[160px] rounded-2xl"
        />
        <img
          src="/src/assets/images/social9.png"
          className="absolute bottom-0 left-9 w-[160px] rounded-2xl"
        />
      </div>

    </section>
  );
};

export default PortfolioHero;
