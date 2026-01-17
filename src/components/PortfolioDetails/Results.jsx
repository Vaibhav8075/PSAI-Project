import resultImg from "../../assets/images/image (11).png";

const results = [
  "300% increase in engagement within three months.",
  "40% boost in website traffic from social media.",
  "20% higher conversion rate on social ads.",
  "50% decrease in CPA, making ads more cost-effective.",
  "Growth from 10K to 50K followers organically."
];

const Results = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">

      <div className="flex justify-center">
        <img src={resultImg} alt="Results" className="rounded-2xl w-[320px]" />
      </div>

      <div>
        <h3 className="font-semibold text-2xl mb-6">Results</h3>
        <ul className="space-y-3">
          {results.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-gray-600">
              <span className="text-green-500">✔</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Results;
