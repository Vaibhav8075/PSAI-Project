const clients = [
  "c1","c2","c3","c4",
  "c5","c6","c7","c8"
];

const TopClients = () => {
  return (
    <section className="mt-24">
      <h2 className="text-2xl font-semibold mb-10">
        Our Top Clients
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {clients.map((img, index) => (
          <div key={index}>
            <img
              src={`/src/assets/images/${img}.png`}
              className="rounded-2xl mb-4 h-[220px] w-full object-cover"
            />

            <h3 className="font-semibold mb-2">
              Unlocking the power
            </h3>

            <p className="text-sm text-gray-600 mb-3">
              Social media marketing is the use of social media platforms promote .
            </p>

            <div className="flex items-center gap-2 text-xs text-gray-500">
              <div className="w-5 h-5 rounded-full bg-gray-300 text-center ">T</div>
              <span>Tracey Wilson</span>
              <span>August 02, 2025</span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md">
          Load More
        </button>
      </div>
    </section>
  );
};

export default TopClients;
