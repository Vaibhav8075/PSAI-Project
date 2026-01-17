const BlogContent = () => {
  return (
    <section className="mt-20 grid grid-cols-1 lg:grid-cols-4 gap-12">
      
      {/* LEFT CONTENT */}
      <div className="lg:col-span-3">
        <h2 className="text-2xl font-semibold mb-8">
          The Ultimate Guide to Social Media <br />
          Marketing in 2024
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-600 text-sm leading-relaxed">
          <p>
            In today’s digital world, social media marketing is one of the
            most effective ways to build brand awareness, engage with
            customers, and drive business growth.
          </p>

          <p>
            The key to success lies in creating high-quality content that
            resonates with your audience, whether through eye-catching
            visuals, informative blog posts, or interactive videos.
          </p>

          <p>
            Another essential aspect of social media marketing is
            understanding your audience and leveraging data-driven
            insights.
          </p>
        </div>
      </div>

      {/* RIGHT UPLOAD CARD */}
      <div className="bg-gray-100 rounded-2xl p-8 h-fit">
        <h3 className="text-xl font-semibold mb-4">
          Interesting ?
        </h3>

        <p className="text-gray-600 mb-6 text-sm">
          Upload your Blog Here to Stay connected with more people
          they may convert into customers.
        </p>

        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md">
          Upload
        </button>
      </div>

    </section>
  );
};

export default BlogContent;
