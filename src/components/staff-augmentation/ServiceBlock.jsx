const ServiceBlock = ({ title, text, image, reverse }) => {
  return (
    <section className="max-w-7xl text-left mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* IMAGE */}
        <div className={reverse ? "md:order-2" : "md:order-1"}>
          <img
            src={image}
            alt={title}
            className="w-full rounded-2xl"
          />
          <h3 className="mt-4 text-2xl font-bold text-black">
            {title}
          </h3>
        </div>

        {/* TEXT */}
        <div className={reverse ? "md:order-1" : "md:order-2"}>
          {Array.isArray(text) ? (
            text.map((para, index) => (
              <p
                key={index}
                className="text-gray-800 leading-relaxed mb-4 last:mb-0"
              >
                {para}
              </p>
            ))
          ) : (
            <p className="text-gray-800 leading-relaxed">{text}</p>
          )}
          <span className="block text-black text-xl font-bold mt-2 ">...</span>
        </div>

      </div>
    </section>
  );
};

export default ServiceBlock;
