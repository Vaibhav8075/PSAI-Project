import JobCard from "./JobCard";

const JobGrid = () => {
  return (
    <section className="max-w-7xl mx-10 px-6">
      <div className="grid md:grid-cols-3 gap-6">
        {[...Array(9)].map((_, i) => (
  <JobCard key={i} />
))}

      </div>

      {/* Load More */}
      <div className="flex justify-center mt-12 ">
        <button className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 text-sm">
          Load More
        </button>
      </div>
    </section>
  );
};

export default JobGrid;
