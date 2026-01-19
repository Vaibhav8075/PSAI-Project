const SystemService = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-16">
      <div>
        <h2 className="text-xl font-semibold mb-4">Our Services include -</h2>

        <ul className="list-disc list-inside text-black space-y-2">
          <li>Site Inspection and Planning</li>
          <li>Selection and supply of Hardware/software</li>
          <li>Installation and Implementation of Hardware and Software</li>
          <li>System Integration.</li>
          <li>Web Development & Maintenance</li>
          <li>Master Data Creation</li>
          <li>
            Training to Managers and other Bank Staff (Class room and On-Job)
          </li>
        </ul>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <img
            src="src/assets/images/image(8).png"
            className="rounded-xl object-cover"
          />
          <div>
            <img
              src="src/assets/images/image(9).png"
              className="rounded-xl object-cover"
            />
            <p className="text-black mb-4">
              we deliver and implement innovative software solutions across a number of technology platforms
            </p>
            <button className="px-3 py-1 border-3 border-orange-400 text-orange-500 rounded-md hover:border-orange-600 transition">
              MORE
            </button>
          </div>
        </div>

        <div></div>
      </div>
    </section>
  );
};

export default SystemService;
