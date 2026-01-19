import { ContactSection } from "../Home/HomePage";

const AboutHero = () => {
  return (
    <section className="bg-[#111827] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-[1.1fr,0.9fr] gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium mb-4">
            About Us
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-3">
            Your trusted partner for business and technology
          </h1>
          <p className="text-sm lg:text-base text-gray-200 leading-relaxed mb-6">
            We combine consulting, technology, manpower, and media expertise to help
            organizations transform, build trust, and scale securely.
          </p>
          <div className="flex gap-4 text-xs text-gray-200">
            <div>
              <div className="font-semibold text-white">Multi-domain expertise</div>
              <p>Banking, government, enterprise, and media solutions.</p>
            </div>
            <div>
              <div className="font-semibold text-white">Outcome focused</div>
              <p>Measurable impact in efficiency, reach, and customer experience.</p>
            </div>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden bg-black/40">
          <img
            src="/aboutus.png"
            alt="About Param Jyoti"
            className="w-full h-64 lg:h-72 object-cover opacity-90"
          />
        </div>
      </div>
    </section>
  );
};

const AboutStory = () => {
  return (
    <section
      id="about-details-anchor"
      className="bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-[1.05fr,0.95fr] gap-10 items-start">
        <div className="space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
            Building trust, fostering relationships
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Param Jyoti Infotech Pvt. Ltd. brings together specialists across software
            development, digital marketing, system integration, and manpower sourcing. Our
            teams work closely with clients to understand their environment, challenges,
            and ambitions before designing the right mix of technology and services.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            From banking automation projects to large-scale recruitment drives and
            full-funnel digital campaigns, we focus on delivering long-term value rather
            than short-term fixes.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 text-sm text-gray-800">
            <div className="bg-gray-50 rounded-xl px-4 py-4">
              <div className="text-2xl font-bold text-orange-500 mb-1">15+</div>
              <div className="text-xs text-gray-600">Years of experience</div>
            </div>
            <div className="bg-gray-50 rounded-xl px-4 py-4">
              <div className="text-2xl font-bold text-orange-500 mb-1">50+</div>
              <div className="text-xs text-gray-600">Institutions and enterprises</div>
            </div>
            <div className="bg-gray-50 rounded-xl px-4 py-4">
              <div className="text-2xl font-bold text-orange-500 mb-1">4+</div>
              <div className="text-xs text-gray-600">Key marketing locations</div>
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          <img
            src="src/assets/executive.jpg"
            alt="Team at work"
            className="w-full h-44 object-cover rounded-2xl"
          />
          <div className="grid grid-cols-2 gap-4">
            <img
              src="src/assets/honesty.jpg"
              alt="Honesty"
              className="h-32 w-full object-cover rounded-2xl"
            />
            <img
              src="src/assets/negotiation.jpg"
              alt="Negotiation"
              className="h-32 w-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialsBand = () => {
  return (
    <section className="bg-[#111827] text-white">
      <div className="max-w-5xl mx-auto px-6 py-12 text-center">
        <h2 className="text-xl md:text-2xl font-semibold mb-3">Testimonials</h2>
        <p className="text-sm text-gray-200 leading-relaxed">
          Our clients value our ability to execute complex projects reliably while staying
          transparent, responsive, and focused on outcomes. From first engagement to
          long-term partnership, we work as an extension of their teams.
        </p>
      </div>
    </section>
  );
};

const TeamSection = () => {
  const team = [
    {
      name: "Leadership Team",
      role: "Strategy and Delivery",
      image: "src/assets/sa-1.jpg",
    },
    {
      name: "Technology Team",
      role: "Engineering and Implementation",
      image: "src/assets/sa-2.jpg",
    },
    {
      name: "People Team",
      role: "Recruitment and Training",
      image: "src/assets/manpower.jpg",
    },
    {
      name: "Media Team",
      role: "Digital and Creative",
      image: "src/assets/sa-3.jpg",
    },
  ];

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6">
          Our team
        </h2>
        <div className="grid gap-6 md:grid-cols-4">
          {team.map((member) => (
            <div
              key={member.name}
              className="rounded-2xl border border-gray-200 bg-gray-50 overflow-hidden text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="h-40 w-full object-cover"
              />
              <div className="px-4 py-3">
                <div className="text-sm font-semibold text-gray-900">
                  {member.name}
                </div>
                <div className="text-[11px] text-gray-600 mt-1">
                  {member.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ClientsSection = () => {
  const logos = [
    "src/assets/images/c5.png",
    "src/assets/images/c6.png",
    "src/assets/images/c7.png",
    "src/assets/images/c8.png",
    "src/assets/images/c9.png",
    "src/assets/images/c10.png",
    "src/assets/images/c11.png",
    "src/assets/images/c12.png",
    "src/assets/images/c13.png",
    "src/assets/images/c14.png",
  ];

  return (
    <section className="bg-[#f5f5f7]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6">
          Our clients
        </h2>
        <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-5 items-center">
          {logos.map((logo) => (
            <div
              key={logo}
              className="bg-white rounded-xl border border-gray-200 flex items-center justify-center px-4 py-3"
            >
              <img src={logo} alt="Client logo" className="h-10 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutPage = () => {
  return (
    <div>
      <AboutHero />
      <AboutStory />
      <TestimonialsBand />
      <TeamSection />
      <ClientsSection />
      <ContactSection />
    </div>
  );
};

export default AboutPage;

