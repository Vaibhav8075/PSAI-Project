const BlogHero = () => {
  return (
    <section className="w-full bg-gray-50">
      <div
        className="mt-10 h-80 rounded-2xl flex flex-col justify-center items-center text-white text-center bg-cover bg-center"
        style={{ backgroundImage: "url('/src/assets/images/scroll2.png')" }}
      >
        <h1 className="text-3xl font-semibold mb-2">Blog Detail Page</h1>
        <p className="text-sm opacity-80">Blog | Detail</p>
      </div>
    </section>
  );
};

export default BlogHero;
