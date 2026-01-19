const Navbar = ({ currentPage, onNavigate }) => {
  const linkClasses = (key) =>
    [
      "px-3 py-2 text-sm font-medium transition-colors",
      currentPage === key ? "text-orange-500" : "text-gray-700 hover:text-orange-500",
    ].join(" ");

  const handleContactClick = () => {
    onNavigate("home");

    if (typeof window !== "undefined") {
      window.setTimeout(() => {
        const el = document.getElementById("contact-section");
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 50);
    }
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-8">
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Param Jyoti logo"
            className="h-[60px] w-[60px] object-contain"
          />
        </div>

        <nav className="hidden md:flex items-center gap-1">
          <button
            type="button"
            className={linkClasses("home")}
            onClick={() => onNavigate("home")}
          >
            Home
          </button>
          <button
            type="button"
            className={linkClasses("about")}
            onClick={() => onNavigate("about")}
          >
            About Us
          </button>
          <button
            type="button"
            className={linkClasses("services")}
            onClick={() => onNavigate("services")}
          >
            Services
          </button>
          <button
            type="button"
            className={linkClasses("staff")}
            onClick={() => onNavigate("staff")}
          >
            Staff Augmentation
          </button>
          <button
            type="button"
            className={linkClasses("system")}
            onClick={() => onNavigate("system")}
          >
            System Integration
          </button>
        </nav>

        <button
          type="button"
          onClick={handleContactClick}
          className="text-sm font-semibold bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full shadow-sm"
        >
          Contact Us
        </button>
      </div>
    </header>
  );
};

export default Navbar;

