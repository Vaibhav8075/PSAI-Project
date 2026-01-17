import midImg from "../../assets/images/c12.png";

const ChallengesSolution = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12 items-center text-center">

      {/* Challenges */}
      <div>
        <h3 className="font-semibold text-lg mb-4">Challenges</h3>
        <ul className="list-disc list-inside text-left text-gray-800 space-y-2">
          <li>Low engagement on Instagram and Facebook.</li>
          <li>Declining website traffic from social media.</li>
          <li>High cost per acquisition (CPA).</li>
          <li>Poor conversion rates despite strong products.</li>
        </ul>
      </div>

      {/* Image */}
      <div className="flex justify-center">
        <img
          src={midImg}
          alt="Working"
          className="rounded-2xl w-[280px]"
        />
      </div>

      {/* Solution */}
      <div>
        <h3 className="font-semibold text-lg mb-4">Our Solution</h3>
        <ul className="list-disc list-inside text-left text-gray-800 space-y-2">
          <li>Content revamp</li>
          <li>User-Generated Content (UGC)</li>
          <li>Reels & short videos</li>
          <li>Targeted ads</li>
          <li>Interactive stories & polls</li>
        </ul>
      </div>
    </section>
  );
};

export default ChallengesSolution;
