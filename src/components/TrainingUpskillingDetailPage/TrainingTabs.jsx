const TrainingTabs = () => {
  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-xl font-medium mb-12">
          Training and Upskilling
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            "Course Overview",
            "Learning Outcomes",
            "Curriculum Breakdown",
            "Pricing & Enrollment Details",
          ].map((title) => (
            <div
              key={title}
              className="
                bg-white
                rounded-2xl
                p-8
                text-center
                shadow-sm
                hover:shadow-md
                transition
                duration-300
              "
            >
              <h3 className="text-base font-semibold mb-4">{title}</h3>

              <p className="text-sm text-black leading-relaxed">
                Stay ahead in your industry with hands-on training programs
                designed to enhance your skills and career growth
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingTabs;
