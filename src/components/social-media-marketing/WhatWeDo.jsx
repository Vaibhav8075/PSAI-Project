import social5 from "../../assets/images/social5.png";

const WhatWeDo = () => {
  return (
    <div className="flex-1">
      <div className="relative h-[420px] rounded-3xl overflow-hidden">
        <img
          src={social5}
          alt="What we do"
          className="w-full h-full object-cover"
        />

        {/* Text overlay */}
        <div className="absolute bottom-6 left-6 right-6">
          <h3 className="text-2xl font-semibold text-black">
            What We Do
          </h3>
          <p className="mt-2 text-sm text-gray-700 max-w-xs">
            Build meaningful connections with our audience
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
