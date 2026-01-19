const LearningOutcomes = () => {
  return (
    <section className="w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Learning Outcomes</h2>
          <ul
            style={{ listStyleType: "circle" }}
            className="space-y-3 text-black"
          >
            <li>Master advanced UI/UX design principles and heuristics</li>
            <li>
              Learn Figma, Adobe XD, and Protopie for interactive prototyping
            </li>
            <li>Design for accessibility and inclusivity</li>
            <li>Work on real-world projects and build a strong portfolio</li>
            <li>Get insights into user research and A/B testing</li>
          </ul>
        </div>

        <img
          src="src/assets/images/image(14).png"
          className="rounded-xl object-cover"
        />
      </div>
    </section>
  );
};

export default LearningOutcomes;
