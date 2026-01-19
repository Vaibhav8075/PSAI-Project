import c1 from "../../assets/images/image(23).png";
import c2 from "../../assets/images/image(24).png";
import c3 from "../../assets/images/image(25).png";

const clients = [c1, c2, c3];

const ClientsShowcase = () => {
  return (
    <section className="w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
        {clients.map((client, i) => (
          <img key={i} src={client} className="rounded-2xl" />
        ))}

        <div>
          <h1 className="text-3xl font-semibold">See all</h1>
          <p className="text-xl mb-4">Successful Clients</p>
          <button className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition">
            Show all
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClientsShowcase;
