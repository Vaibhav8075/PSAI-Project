const testimonials = [
  {
    text: "Their creative strategies helped us gain thousands of followers and real customer conversions.",
    name: "Tracey Wilson",
    date: "August 01, 2025",
  },
  {
    text: "Thanks to their expert social media marketing, we saw a 3x increase in interactions and brand awareness!",
    name: "Tracey Wilson",
    date: "August 01, 2025",
  },
  {
    text: "Their creative strategies helped us gain thousands of followers and real customer conversions.",
    name: "Tracey Wilson",
    date: "August 01, 2025",
  },
];

const Testimonials = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 text-center ">
      <h3 className="font-semibold mb-12">Testimonials</h3>

      <div className="grid md:grid-cols-3 gap-8 items-center">
        {testimonials.map((t, i) => {
          const isCenter = i === 1;

          return (
            <div
              key={i}
              className={`rounded-2xl p-6 text-left transition-all duration-300
                ${
                  isCenter
                    ? "bg-white shadow-xl scale-105"
                    : "bg-white shadow-md scale-100"
                }`}
            >
              {/* Stars */}
              <div className="text-yellow-500 mb-4 text-lg">★★★☆☆</div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                {t.text}
              </p>

              {/* Profile */}
              <div className="flex items-center gap-3">
                {/* Avatar */}
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center font-semibold text-gray-700">
                  T
                </div>

                <div>
                  <p className="font-medium text-sm">{t.name}</p>
                  <p className="text-xs text-gray-600">{t.date}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
