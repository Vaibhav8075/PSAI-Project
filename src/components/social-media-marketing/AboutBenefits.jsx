import social8 from "../../assets/images/social10.png";

const AboutBenefits = () => {
  return (
    <section className="px-6">
      <div className="flex flex-col lg:flex-row gap-14 items-center">
        <div className="relative flex-1">
          <img
            src={social8}
            alt="before after"
            className="h-90 w-full object-cover rounded-2xl"
          />

          <div className="absolute top-6 left-6 bg-white px-4 py-2 rounded-xl shadow text-sm font-medium">
            Before
          </div>

          <div className="absolute bottom-6 left-6 bg-white px-4 py-2 rounded-xl shadow text-sm font-medium">
            After
          </div>

          <div className="absolute bottom-6 right-6 bg-white rounded-xl shadow p-4 flex gap-4 text-xs">
            <div className="text-center">
              <p className="font-semibold">298K</p>
              <p className="text-gray-500">Reach</p>
            </div>
            <div className="text-center">
              <p className="font-semibold">537</p>
              <p className="text-gray-500">Leads</p>
            </div>
            <div className="text-center">
              <p className="font-semibold">1,744</p>
              <p className="text-gray-500">Clicks</p>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <h2 className="text-3xl font-semibold leading-snug">
            Who we are and what you get from us
          </h2>

          <p className="mt-6 text-sm text-gray-600 leading-relaxed">
            The goal of social media marketing is to boost brand awareness,
            engage target audiences, and drive website traffic through
            compelling content. It aims to foster meaningful connections with
            customers, build trust, and enhance brand loyalty. By leveraging
            data-driven strategies, it converts engagement into measurable leads
            and sales.
          </p>

          <p className="mt-4 text-sm text-gray-600 leading-relaxed">
            Social media marketing involves creating and sharing content,
            running ads, and engaging with followers to increase brand
            awareness, drive website traffic, and generate leads or sales.
          </p>

          <button className="mt-6 bg-orange-500 hover:bg-orange-600 transition text-white px-6 py-2 rounded-lg text-sm">
            Read more
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutBenefits;
