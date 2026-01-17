const JobDescription = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 pb-16">

      <div className="space-y-8 text-gray-800 leading-relaxed mx-10">

        <div>
          <h4 className="font-semibold mb-2">
            Job Title: <span className="font-normal">Front-End Developer</span>
          </h4>
        </div>

        <div>
          <h4 className="font-semibold mb-2">
            Reports To:
          </h4>
          <p className="text-sm">
            (e.g., Lead Front-End Developer, Engineering Manager, Director of Technology)
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Summary:</h4>
          <p className="text-sm">
            We are seeking a talented and passionate Front-End Developer to join our
            growing team. You will be responsible for developing and maintaining
            high-quality, user-friendly web applications and websites. You will work
            closely with designers, product managers, and back-end developers to
            deliver exceptional user experiences.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Responsibilities:</h4>

          <ul className="space-y-4 text-sm">
            <li>
              <strong>Code Quality:</strong> Adhere to coding best practices and maintain
              clean, well-documented code. Participate in code reviews.
            </li>

            <li>
              <strong>Technology Exploration:</strong> Stay up-to-date with the latest
              front-end technologies and trends.
            </li>

            <li>
              <strong>Performance Optimization:</strong> Optimize web applications for
              speed and scalability.
            </li>

            <li>
              <strong>Testing & Debugging:</strong> Write and execute unit and integration
              tests. Perform cross-browser testing.
            </li>

            <li>
              <strong>Development:</strong> Build and maintain responsive, cross-browser
              compatible applications using HTML, CSS, and JavaScript (ES6+).
            </li>

            <li>
              <strong>Collaboration:</strong> Work closely with designers and back-end
              developers to integrate front-end components.
            </li>
          </ul>
        </div>

        {/* Bottom Buttons */}
        <div className="flex justify-center gap-4 pt-8">
          <button className="bg-orange-500 text-white px-6 py-2 rounded-md text-sm hover:bg-orange-600">
            Apply Now
          </button>

          <button className="border border-gray-300 px-6 py-2 rounded-md text-sm hover:bg-gray-100">
            Share
          </button>
        </div>

      </div>
    </section>
  );
};

export default JobDescription;
