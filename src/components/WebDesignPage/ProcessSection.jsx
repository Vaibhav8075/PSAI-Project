const ProcessSection = () => {
  return (
    <section className="w-full  bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-16">
          Process (How It Works)
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          <div className="flex flex-col items-center text-center gap-6">
            <img
              src="src/assets/images/image (21).png"
              alt="Consultation"
              className="rounded-2xl w-full max-w-sm object-cover"
            />

            <div className="flex gap-3 items-center">
              <span className="w-2 h-2 border border-black rounded-full shrink-0"></span>
              <div>
                <p className="text-black text-sm text-left">
                  Wireframing & UI Design
                </p>
                <p className="text-black text-sm text-left">
                  Consultation & Planning We start by understanding your
                  business goals and requirements.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="src/assets/images/image (22).png"
              alt="Process"
              className="rounded-2xl w-full max-w-md object-cover"
            />
          </div>

          <div className="space-y-4">
            <div className="flex gap-3 items-center">
              <span className="w-2 h-2 border border-black rounded-full shrink-0"></span>
              <div>
                <p className="text-black text-sm">Wireframing & UI Design</p>
                <p className="text-black text-sm">
                  We create wireframes and high-fidelity UI designs for
                  approval.
                </p>
              </div>
            </div>

            <div className="flex gap-3 items-center">
              <span className="w-2 h-2 border border-black rounded-full shrink-0"></span>
              <div>
                <p className="text-black text-sm">Development & Testing</p>
                <p className="text-black text-sm">
                  The approved design is converted into a fully functional
                  website, tested for speed, security, and responsiveness.
                </p>
              </div>
            </div>

            <div className="flex gap-3 items-center">
              <span className="w-2 h-2 border border-black rounded-full shrink-0"></span>
              <div>
                <p className="text-black text-sm">Launch & Optimization</p>
                <p className="text-black text-sm">
                  Once finalized, we deploy the site with performance
                  optimizations.
                </p>
              </div>
            </div>

            <div className="flex gap-3 items-center">
              <span className="w-2 h-2 border border-black rounded-full shrink-0"></span>
              <div>
                <p className="text-black text-sm">Maintenance & Support</p>
                <p className="text-black text-sm">
                  We provide ongoing support, updates, and optimization
                  services.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <button className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition">
            Read more
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
