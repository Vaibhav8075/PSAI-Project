import { Phone, Mail, Headphones } from "lucide-react";

const ContactInfoCards = () => {
  return (
    <section className="flex justify-center gap-8 mt-16 mb-20 flex-wrap">
      
      <div className="border border-gray-300 rounded-lg w-[240px] p-8 text-center">
        <Phone className="w-10 h-10 mx-auto mb-4 text-gray-700" />
        <h4 className="font-semibold text-gray-800 mb-2">
          Make a call
        </h4>
        <p className="text-gray-600 text-sm">
            Make a call for your general enquiries<br></br><br></br>
          870-9393-3839
        </p>
      </div>

      <div className="border border-gray-300 rounded-lg w-[240px] p-8 text-center">
        <Mail className="w-10 h-10 mx-auto mb-4 text-gray-700" />
        <h4 className="font-semibold text-gray-800 mb-2">
          Send us mail
        </h4>
        <p className="text-gray-600 text-sm">
            Send your Mail for general enquiries<br></br><br></br>
          pjplcompany@gmail.com
        </p>
      </div>

      <div className="border border-gray-300 rounded-lg w-[240px] p-8 text-center">
        <Headphones className="w-10 h-10 mx-auto mb-4 text-gray-700" />
        <h4 className="font-semibold text-gray-800 mb-2">
          Toll Free
        </h4>
        <p className="text-gray-600 text-sm">
          Toll free number for your customers<br></br><br></br>1870-939-3839
        </p>
      </div>

    </section>
  );
};

export default ContactInfoCards;
