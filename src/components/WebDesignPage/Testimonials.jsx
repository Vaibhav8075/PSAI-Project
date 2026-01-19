import { FaStar } from "react-icons/fa6";

const testimonials = [
  {
    rating: 3,
    text: "Their creative strategies helped us gain thousands of followers and real customer conversions",
    name: "Tracey Wilson",
    date: "August 10, 2025",
  },
  {
    rating: 3,
    text: "Thanks to their expert social media marketing, we saw a 3x increase in interactions and brand awareness!",
    name: "Tracey Wilson",
    date: "August 10, 2025",
    featured: true,
  },
  {
    rating: 2,
    text: "Their creative strategies helped us gain thousands of followers and real customer conversions",
    name: "Tracey Wilson",
    date: "August 10, 2025",
  },
];

const Testimonials = () => {
  return (
    <section className="w-full bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-2xl font-semibold mb-16">
          Testimonials
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-sm ${
                item.featured ? "py-10" : ""
              }`}
            >
              <div className="flex gap-1 mb-6">
                {[...Array(4)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={i < item.rating ? "text-black" : "text-gray-300"}
                  />
                ))}
              </div>

              <p className="text-black leading-relaxed mb-8">{item.text}</p>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gray-300"></div>

                <div className="flex items-center gap-3 text-sm">
                  <span className="font-medium text-gray-900">{item.name}</span>
                  <span className="text-gray-500 text-xs lm-544">
                    {item.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
