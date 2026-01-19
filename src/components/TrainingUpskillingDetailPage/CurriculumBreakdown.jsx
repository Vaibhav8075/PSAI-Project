const CurriculumBreakdown = () => {
  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-center">
          <div className="flex justify-center">
            <img
              src="src/assets/images/image(15).png"
              alt="Curriculum work"
              className="w-35 max-w-xs h-420px object-cover rounded-2xl"
            />
          </div>

          <div className="text-center">
            <h2 className="text-xl font-medium mb-8">Curriculum Breakdown</h2>

            <ul className="space-y-6 text-sm text-black">
              <li>• Foundations of UI/UX</li>
              <li>• Advanced Design Tools & Techniques</li>
              <li>• Research & Testing</li>
              <li>• Real-World Project & Portfolio Building</li>
            </ul>
          </div>

          <div className="flex justify-center">
            <img
              src="src/assets/images/image(16).png"
              alt="Design planning"
              className="w-35 max-w-xs h-420px object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurriculumBreakdown;
