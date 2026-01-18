const TrainingHero = () => {
  return (
    <section className="w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h1 className="text-3xl font-semibold mb-4">
            Boost Your Career with Expert-Led
          </h1>
          <h1 className="text-3xl font-semibold mb-4">Training</h1>

          <p className="text-gray-600 mb-6">
            Stay ahead in your industry with hands-on training programs designed
            to enhance your skills and career growth
          </p>

          <div className="flex gap-4">
            <button className="px-6 py-3 bg-orange-500 text-white rounded-md">
              Start Learning
            </button>
            <button className="px-6 py-3 border rounded-md">
              Explore Courses
            </button>
          </div>
        </div>

        <img
          src="src/assets/images/image (12).png"
          className="rounded-xl object-cover"
        />
      </div>
    </section>
  );
};

export default TrainingHero;
