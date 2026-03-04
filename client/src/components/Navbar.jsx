import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div
      className="fixed top-0 left-0 w-full z-50
      h-20 px-6 lg:px-24 flex justify-between items-center
      text-white
      bg-black/30 backdrop-blur-2xl
      border-b border-white/10
      shadow-[0_10px_40px_rgba(0,0,0,0.45)]
      transition-all duration-500"
    >
      {/* Logo */}
      <NavLink
        to="/"
        className="font-nav text-2xl lg:text-4xl tracking-wide hover:text-sky-500 transition"
      >
        MyStore
      </NavLink>

      <div className="flex gap-6 items-center">
        {/* Links */}
        <ul
          className={`
          hidden lg:flex lg:items-center lg:gap-10
          lg:static lg:w-auto lg:h-auto
          lg:bg-transparent lg:translate-x-0

          fixed top-20 right-0 w-64 h-screen
          flex flex-col lg:flex-row gap-8
          text-lg font-semibold font-nav2
          p-10
          transition-transform duration-500
          ${showLinks ? "translate-x-0" : "translate-x-full"}
        `}
        >
          <NavLink
            to="."
            className="hover:text-sky-500 transition"
            onClick={() => setShowLinks(false)}
          >
            Home
          </NavLink>

          <NavLink
            to="about"
            className="hover:text-sky-500 transition"
            onClick={() => setShowLinks(false)}
          >
            About
          </NavLink>

          <NavLink
            to="collection"
            className="hover:text-sky-500 transition"
            onClick={() => setShowLinks(false)}
          >
            Collection
          </NavLink>

          <NavLink
            to="products"
            className="hover:text-sky-500 transition"
            onClick={() => setShowLinks(false)}
          >
            Products
          </NavLink>

          
          <NavLink
            to="login"
            className="hover:text-sky-500 transition"
            onClick={() => setShowLinks(false)}
          >
            login
          </NavLink>

          <NavLink
            to="signup"
            className="hover:text-sky-500 transition"
            onClick={() => setShowLinks(false)}
          >
            Signup
          </NavLink>
        </ul>

        {/* Mobile Icon (same icons) */}
        <div
          className="cursor-pointer lg:hidden"
          onClick={() => setShowLinks(open => !open)}
        >
          {showLinks ? <CloseIcon /> : <MenuIcon />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
