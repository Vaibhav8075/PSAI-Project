const CourseOverview = () => {
  return (
    <section className="w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-16">
        <img
          src="src/assets/images/image (13).png"
          className="rounded-xl object-cover"
        />

        <div>
          <h2 className="text-2xl font-semibold mb-6">Course Overview</h2>
          <ul
            style={{ listStyleType: "circle" }}
            className="space-y-4 text-black text-sm"
          >
            <li>
              <span className="font-semibold">Course Name:</span> Advanced UI/UX
              Design & Prototyping
            </li>

            <li>
              <span className="font-semibold">Duration:</span> 12 weeks
            </li>

            <li>
              <span className="font-semibold">Difficulty Level:</span>{" "}
              Intermediate to Advanced
            </li>

            <li>
              <span className="font-semibold">Mode:</span> Online (Live +
              Recorded Sessions)
            </li>

            <li>
              <span className="font-semibold">Certification:</span> Yes, issued
              upon completion
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CourseOverview;
