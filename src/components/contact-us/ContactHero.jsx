import { Search } from "lucide-react";
import heroBg from "../../assets/images/contact-bg.png";

const ContactHero = () => {
  return (
    <section className="mx-6 mt-6 rounded-2xl overflow-hidden">
      <div
        className="h-[320px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="bg-white rounded-full w-1/2 py-4 px-6 flex items-center shadow-md relative">
          
          {/* Centered Text */}
          <div className="absolute left-1/2 -translate-x-1/2 text-center">
            <h2 className="text-xl mb-1 font-semibold text-gray-800">
              Contact Us
            </h2>
            <p className="text-sm text-gray-500">
              Home | Contact
            </p>
          </div>

          {/* Right Aligned Search Icon */}
          <div className="ml-auto">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100">
              <Search className="w-5 h-5 text-gray-600" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactHero;
