const Filters = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {["Location", "Experience Level", "Remote"].map((item, i) => (
        <select
          key={i}
          className="px-4 py-2 rounded-lg border text-sm text-gray-500 bg-white"
        >
          <option>{item}</option>
        </select>
      ))}
    </div>
  );
};

export default Filters;
