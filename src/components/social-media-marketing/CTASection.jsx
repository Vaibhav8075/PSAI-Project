const CTASection = () => {
  return (
    <section className="px-6 mb-20">
      <div className="bg-white rounded-2xl shadow-md px-10 py-12 flex flex-col lg:flex-row items-center mx-4 justify-between gap-6">
        <h2 className="text-3xl font-semibold text-center lg:text-left">
          Turn Followers Into New Customers
        </h2>

        <div className="flex gap-4">
          <button className="bg-orange-500 hover:bg-orange-600 transition text-white px-6 py-2 rounded-lg text-sm">
            Get Started
          </button>

          <button className="bg-orange-500 hover:bg-orange-600 transition text-white px-6 py-2 rounded-lg text-sm">
            About us
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
