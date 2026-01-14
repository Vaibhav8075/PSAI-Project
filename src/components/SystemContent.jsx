const SystemContent = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-16">
      <div>
        <h1 className="text-3xl font-semibold mb-6">System Integration</h1>

        <p className="text-gray-600 mb-4">
          20+ years of System Integrations services in BFSI Sector.
        </p>

        <p className="text-black leading-relaxed mb-6">
          Today, businesses demand global vision, an in-depth understanding of
          customers and suppliers, demonstrated thought leadership and a
          consultative partnership approach to offer the highest possible
          returns on IT investment.We help businesses achieve these ends.
        </p>

        <button className="px-3 py-1 border-3 border-orange-400 text-orange-500 rounded-md hover:border-orange-600 transition">
          MORE
        </button>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <img
          src="src/assets/images/image (6).png"
          className="rounded-xl object-cover"
        />
        <img
          src="src/assets/images/image (7).png"
          className="rounded-xl object-cover"
        />
      </div>
    </section>
  );
};

export default SystemContent;
