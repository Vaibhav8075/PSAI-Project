const BlogAlternating = () => {
  return (
    <section className="w-full bg-gray-50 py-24">
      <div className="mt-24 space-y-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            {/* <div className="w-56 h-0.5 bg-gray-300 mb-4"></div> */}
            <h3 className="text-xl font-semibold mb-4">
              Guide to Social Media
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Beyond content and analytics, social media marketing is about
              building relationships. Engaging with your audience through
              comments and messages fosters loyalty. <br></br>
              <br></br> In conclusion, social media marketing is a powerful tool
              for businesses of all sizes. By crafting compelling content,
              leveraging analytics, and fostering genuine connections, brands
              can effectively grow their online presence and drive long-term
              success. Whether you're just starting out or looking to refine
              your strategy, investing in social media marketing can yield
              significant returns in engagement, brand awareness, and revenue.
              <br></br>
              <br></br>
              Collaborating with influencers and brand advocates can also
              amplify your reach and credibility. As social media trends
              continue to evolve, staying adaptable and embracing new
              formats—such as live streaming, short-form videos, and
              user-generated content—can keep your brand relevant and
              competitive.
            </p>

            <button className="bg-orange-500 text-white px-6 py-2 rounded-md">
              Load More
            </button>
          </div>

          <img
            src="/src/assets/images/c8.png"
            className="rounded-2xl w-full h-125"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <img
            src="/src/assets/images/software2.png"
            className="rounded-2xl w-112.5 h-72.5"
          />

          <div>
            <div className="w-56 h-0.5 bg-gray-300 mb-4"></div>
            <h3 className="text-xl font-semibold mb-4">
              Guide to Social Media
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              Ultimately, social media marketing is more than just posting
              updates—it’s about storytelling, building relationships, and
              providing value to your audience. Businesses that invest time and
              effort into their social media presence can experience increased
              brand awareness, customer loyalty, and revenue growth. Whether
              you’re a startup or an established brand, leveraging social media
              effectively can take your business to new heights. <br></br>
              <br></br>A successful social media strategy involves consistency,
              creativity, and data-driven decisions. Posting regularly,
              leveraging trending topics, and analyzing performance metrics help
              businesses refine their approach and maximize engagement
            </p>
          </div>
        </div>

        <div className="mb-6 flex flex-col bg-300 text-center items-center">
          <div className="w-56 h-0.5 bg-gray-300 mb-4"></div>
        </div>
      </div>
    </section>
  );
};

export default BlogAlternating;
