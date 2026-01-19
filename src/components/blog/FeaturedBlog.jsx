const FeaturedBlog = () => {
  return (
    <div className="lg:col-span-2 flex flex-col gap-16">
      <div className="flex gap-8 items-start">
        <img
          src="/src/assets/images/c13.png"
          alt="featured"
          className="w-90 h-65 object-cover rounded-2xl"
        />

        <div>
          <h3 className="text-xl font-semibold mb-4">
            Unlocking the Full <br />
            Potential fo your <br />
            Business
          </h3>

          <p className="text-gray-600 mb-4">
            The goal of social media marketing is to boost brand
            awareness, engage target audiences, and drive website
            traffic through compelling content. It aims to .
          </p>

          <button className="text-orange-500 font-medium">
            Read More
          </button>
        </div>
      </div>


      <div className="flex gap-8 items-start">
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Unlocking the Full <br />
            Potential fo your <br />
            Business
          </h3>

          <p className="text-gray-600 mb-4">
            The goal of social media marketing is to boost brand
            awareness, engage target audiences, and drive website
            traffic through compelling content. It aims to .
          </p>

          <button className="text-orange-500 font-medium">
            Read More
          </button>
        </div>

        <img
          src="/src/assets/images/c14.png"
          alt="featured"
          className="w-90 h-65 object-cover rounded-2xl"
        />
      </div>

    </div>
  );
};

export default FeaturedBlog;
