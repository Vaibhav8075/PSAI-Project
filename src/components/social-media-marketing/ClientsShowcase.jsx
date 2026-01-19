import social9 from "../../assets/images/social9.png";
import social10 from "../../assets/images/social11.png";
import social11 from "../../assets/images/social8.png";
const images = [social9, social10, social11];

const ClientsShowcase = () => {
  return (
    <section className="px-6">
      <div className="flex flex-col lg:flex-row gap-10 items-center">
        <div className="flex-1 max-w-sm">
          <h3 className="text-2xl font-semibold">See all</h3>

          <p className="mt-2 text-sm text-gray-600">Successful Clients</p>

          <button className="mt-6 bg-orange-500 hover:bg-orange-600 transition text-white px-6 py-2 rounded-lg text-sm">
            Show all
          </button>
        </div>

        {images.map((img, index) => (
          <div key={index} className="h-80 rounded-2xl overflow-hidden">
            <img
              src={img}
              alt="client"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientsShowcase;
