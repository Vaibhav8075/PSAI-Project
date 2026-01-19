import social6 from "../../assets/images/social6.png";
import social7 from "../../assets/images/social7.png";

const StatsCards = () => {
  return (
    <div className="flex-1 flex flex-col gap-6">
      <div className="relative h-50 rounded-3xl overflow-hidden">
        <img
          src={social6}
          alt="Trusted users"
          className="w-full h-full object-cover"
        />

        <div className="absolute bottom-6 left-6">
          <h3 className="text-2xl font-semibold text-black">2M+</h3>
          <p className="text-sm text-gray-700">Trusted Users</p>
        </div>
      </div>

      <div className="relative h-50 rounded-3xl overflow-hidden">
        <img
          src={social7}
          alt="Ad revenues"
          className="w-full h-full object-cover"
        />

        <div className="absolute bottom-6 left-6">
          <h3 className="text-2xl font-semibold text-black">95%</h3>
          <p className="text-sm text-gray-700">Ad Revenues</p>
        </div>
      </div>
    </div>
  );
};

export default StatsCards;
