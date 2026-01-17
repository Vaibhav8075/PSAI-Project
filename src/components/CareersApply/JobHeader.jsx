const JobHeader = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      <div className="flex flex-wrap items-center mx-10 justify-between gap-6">

        {/* Company Info */}
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-gray-200 rounded-lg flex items-center justify-center font-semibold text-blue-600">
            Infosys
          </div>

          <div>
            <h3 className="font-semibold">Infosys Ltd.</h3>
            <p className="text-sm text-gray-600">
              New York, USA <span className="text-red-500 ml-2">Remote</span>
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-500">Posted 12hr ago</span>

          <button className="bg-orange-500 text-white px-5 py-2 rounded-md text-sm hover:bg-orange-600">
            Apply Now
          </button>

          <button className="border border-gray-400 px-5 py-2 rounded-md text-sm hover:bg-gray-100">
            Share
          </button>
        </div>

      </div>
    </section>
  );
};

export default JobHeader;
