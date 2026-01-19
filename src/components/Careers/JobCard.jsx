const JobCard = ({ highlighted }) => {
  return (
    <div
      className={`bg-white rounded-xl p-6 transition-all duration-300
        ${
          highlighted
            ? "border-2 border-blue-500 shadow-lg scale-[1.02]"
            : "border border-transparent shadow-md hover:border-blue-400 hover:shadow-lg"
        }`}
    >
      <div className="flex items-center gap-2 mb-4">
        <span className="text-blue-600 font-semibold text-sm">Infosys</span>
        <span className="text-xs text-gray-400">Ltd.</span>
      </div>

      <h3 className="font-semibold mb-1">Front-end Developer</h3>
      <p className="text-sm text-gray-500 mb-4">Remote</p>

      <div className="flex items-center justify-between">
        <p className="text-sm font-medium">$3000 / Monthly</p>
        <button className="bg-orange-500 text-white text-xs px-4 py-2 rounded-md hover:bg-orange-600">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobCard;
