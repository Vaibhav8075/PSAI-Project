const ImageShowcase = () => {
  const images = [
    "/src/assets/images/image (17).png",
    "/src/assets/images/image (18).png", 
    "/src/assets/images/image (19).png",
    "/src/assets/images/image (20).png"
  ];

  return (
    <section className="w-full bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">

      {images.map((img, i) => (
          <img
          key={i}
          src={img}
          className="rounded-2xl object-cover"
          />
        ))}
        </div>
    </section>
  );
};

export default ImageShowcase;
