import desertBg from "../assets/images/desert-brush.png";

const NotFound = () => {
  return (
    <section className="min-h-screen bg-[#f6f6f6] flex items-center justify-center">
      <div className="relative w-full max-w-6xl text-center px-6">

        

        {/* Background Brush Section */}
        <div
          className="relative -mt-32 md:-mt-40 h-[420px] md:h-[480px] flex items-center justify-center"
          style={{
            backgroundImage: `url(${desertBg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
        >
          {/* Content */}
          <div className="flex flex-col items-center text-center">
            {/* 404 */}
        <h1 className="text-[120px] md:text-[220px] font-extrabold text-black/70 leading-none">
          404
        </h1>
        <span className="bg-white px-5 py-2 rounded-full text-sm font-medium">
              Page Not Found
            </span>

            <p className="mt-4 text-lg font-semibold">
              It’s a desert
            </p>

            <p className="text-gray-600">
              Nothing to see here
            </p>

            <button className="mt-6 text-lg font-medium underline hover:text-orange-500 transition">
              Go Home
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
