import social2 from "../../assets/images/social1.png";
import social3 from "../../assets/images/social3.png";
import social4 from "../../assets/images/social4.png";

const images = [social2, social3, social4];

const ImageHighlights = () => {
  return (
    <section className="px-6 mt-10  mx-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {images.map((img, index) => (
          <div key={index} className="h-55 rounded-2xl overflow-hidden">
            <img
              src={img}
              alt="highlight"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageHighlights;
