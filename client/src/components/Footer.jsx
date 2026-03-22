

const Footer = () => {
  return (
    <footer className="mt-10 px-6 py-4 bg-black/30 backdrop-blur-xl border-t border-white/10 text-white">

      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">

        {/* Left Section */}
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-sky-500 shadow-md">
            <span className="font-bold text-white">M</span>
          </div>

          <ul className="flex gap-6 text-sm text-gray-300">
            <li>
              <a href="#" className= "hover:text-sky-400 transition font-bold">
                Terms
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-sky-400 transition font-bold">
                Privacy
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <ul className="flex gap-6 text-sm text-gray-300">
          <li>
            <a href="#" className="hover:text-sky-400 transition font-bold">
              Instagram
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-sky-400 transition font-bold">
              Facebook
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-sky-400 transition font-bold">
              Twitter
            </a>
          </li>
        </ul>

      </div>

      {/* Bottom Line */}
      <div className="text-center text-xs text-black mt-6">
        © {new Date().getFullYear()} MyStore. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;