import img1 from "../../assets/sa-1.jpg";
import img2 from "../../assets/sa-2.jpg";
import img3 from "../../assets/sa-3.jpg";
const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h1 className="text-4xl font-bold text-black mb-6">
          Staff Augmentation
        </h1>

        <p className="text-slate-900 leading-relaxed max-w-xl">
          Staff augmentation is a flexible outsourcing strategy where we hire
          skilled professionals on a temporary basis to fill specific roles or
          meet project demands. It allows us to scale our workforce quickly
          without long-term commitments.
        </p>
      </div>

      <div className="relative w-full h-105">
        <img
          src={img1}
          className="absolute top-0 right-0 w-64 rounded-xl shadow-lg"
        />
        <img
          src={img2}
          className="absolute top-32 left-12 w-56 rounded-xl shadow-lg"
        />
        <img
          src={img3}
          className="absolute bottom-0 right-13 w-56 rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
