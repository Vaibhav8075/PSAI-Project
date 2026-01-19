import texture from "../../assets/dark.png";

const DarkCard = ({ title, text }) => {
  return (
    <div
      className="relative text-white rounded-[40px] p-10 min-h-105"
      style={{
        backgroundImage: `url(${texture})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute bottom-0 right-0 pointer-events-none">
        <div className="absolute -bottom-10 right-24 w-48 h-16 bg-white/10 rounded-full blur-sm"></div>

        <div className="absolute -bottom-6 right-8 w-16 h-16 bg-white/10 rounded-full blur-sm"></div>
      </div>

      <div className="absolute top-12 left-10 w-20 h-20 bg-white/5 rounded-full blur-md"></div>

      <h3 className="text-xl font-semibold mb-6 relative z-10 text-center">
        {title}
      </h3>

      <p className="text-sm text-gray-200 leading-relaxed relative z-10 whitespace-pre-line">
        {text}
      </p>
    </div>
  );
};

const DarkCards = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-8">
      <DarkCard
        title="We aim to..."
        text={`Recruit and retain the highest calibre of experienced employees with proven ability.

We create stringent recruitment strategies bespoke to your business need, outlining a cost-effective recruitment process with defined timelines.

Provide clients with value for money invested and on-going support and advice.`}
      />

      <DarkCard
        title="Unique Services"
        text={`We invest time to understand your business, its organisational structure, culture, and strategic goals.

Professional Standards – we operate with strict ethical practices, ensuring complete confidentiality for both candidates and clients.`}
      />
    </section>
  );
};

export default DarkCards;
