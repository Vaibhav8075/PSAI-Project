const CTASection = () => {
  return (
    <section className="w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-16 bg-white rounded-xl shadow-sm flex justify-between items-center">
        <p className="font-medium">Online Presence with Stunning Web Design</p>

        <div className="flex gap-4">
          <button className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition">
            Get Started
          </button>
          <button className="border px-6 py-2 rounded-md">About us</button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
