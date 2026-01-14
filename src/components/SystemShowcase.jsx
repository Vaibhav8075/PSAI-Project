const SystemShowcase = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div className="flex flex-col items-end text-center">
          <img
            src="src/assets/images/image (10).png"
            alt="Client collaboration"
            className="w-full rounded-2xl object-cover mb-4"
          />

          <p className="text-sm text-black text-end mb-4 max-w-xs">
            Working closely with our customers as transformation partners
          </p>

          <button className="px-3 py-1 border-3 border-orange-400 text-orange-500 rounded-md hover:border-orange-600 transition">
            MORE
          </button>
        </div>

        <div>
          <img
            src="src/assets/images/image (11).png"
            alt="Client meeting"
            className="w-full h-full rounded-2xl object-cover"
          />
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">
            Some of our BFSI Clients
          </h2>

          <ul className="list-disc list-inside text-black space-y-1">
            <li>NABARD</li>
            <li>M.P.State Cooperative Bank.</li>
            <li>C.G. State Cooperative Bank.</li>
            <li>Krishna Mercantile CBL.</li>
            <li>Sadguru Nagrik SBL.</li>
            <li>Jaineshwar Nagrik SBL.</li>
            <li>Mahanagar Nagrik SBL.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SystemShowcase;
