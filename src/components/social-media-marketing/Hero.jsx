import social1 from "../../assets/images/social2.png";
import {
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="px-6 mt-6">
      <div
        className="relative h-105 rounded-2xl overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${social1})` }}
      >
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 h-full max-w-xl flex flex-col justify-center px-10 text-white">
          <h1 className="text-4xl font-semibold leading-tight">
            Convert Followers Into Loyal Customers
          </h1>

          <p className="mt-4 text-sm text-gray-200">
            The goal of social media marketing is to boost brand awareness,
            engage target audiences, and drive website traffic through
            compelling content.
          </p>

          <div className="mt-6 flex flex-col  gap-6">
            <button className="bg-orange-500 hover:bg-orange-600 transition px-6 py-2 w-1/3 rounded-lg text-sm">
              Learn More
            </button>

            <div className="flex items-center gap-3">
              {[FaInstagram, FaFacebookF, FaXTwitter, FaLinkedinIn].map(
                (Icon, index) => (
                  <button
                    key={index}
                    className="w-9 h-9 rounded-full border border-white/40 flex items-center justify-center hover:bg-white/20 transition"
                  >
                    <Icon size={14} />
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
