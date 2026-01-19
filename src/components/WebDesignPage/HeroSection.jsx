const HeroSection = () => {
  return (
    <section className="w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-3xl font-semibold mb-4">
          Transform Your Online Presence with <br />
          Stunning Web Design
        </h1>

        <p className="text-black mb-8">
          We craft visually appealing, user-friendly, and high-performance
          websites tailored to your brand’s needs
        </p>

        <div className="flex justify-center gap-4">
          <button className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition">
            Start Learning
          </button>
          <button className="border px-6 py-3 rounded-md">
            Explore Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
