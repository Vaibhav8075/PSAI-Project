const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-8">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="logo" className="w-8 h-8 rounded-full border border-orange-500 flex items-center justify-center text-[10px] font-bold text-orange-500"/>
            <div>
              <div className="text-sm font-semibold text-gray-900">
                Param Jyoti Infotech Pvt. Ltd.
              </div>
              <div className="text-[11px] text-gray-500">
                Empowering Innovation, Securing the Future
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 text-xs text-gray-600">
            <span>Home</span>
            <span>About Us</span>
            <span>Services</span>
            <span>Staff Augmentation</span>
            <span>System Integration</span>
            <span>Contact</span>
          </div>
        </div>
        <div className="mt-4 border-t border-gray-100 pt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-[11px] text-gray-500">
          <span>
            © {new Date().getFullYear()} Param Jyoti Infotech Pvt. Ltd. All rights
            reserved.
          </span>
          <span>Designed for Param Jyoti website layout reference.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

