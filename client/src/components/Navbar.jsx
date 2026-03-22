import { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Collection", path: "/collection" },
    { name: "Products", path: "/products" },
  ];

  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50">
        <div className="flex justify-between items-center px-6 lg:px-20 h-20
          bg-white/5 backdrop-blur-xl border-b border-white/10
          shadow-[0_8px_30px_rgba(0,0,0,0.3)] text-white">

          {/* Logo */}
          <NavLink
            to="/"
            className="text-2xl lg:text-3xl font-bold tracking-wide
            bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent"
          >
            MyStore
          </NavLink>

          {/* Desktop Links */}
          <nav className="font-medium hidden lg:flex items-center gap-10">
            {links.map((link, i) => (
              <NavLink
                key={i}
                to={link.path}
                className={({ isActive }) =>
                  `relative group transition ${
                    isActive ? "text-sky-400" : "text-black/80"
                  }`
                }
              >
                {link.name}

                {/* underline animation */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-sky-400 transition-all group-hover:w-full"></span>
              </NavLink>
            ))}
          </nav>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-6">
            <NavLink
              to="/login"
              className="text-white px-5 py-2 rounded-md bg-sky-500 hover:bg-sky-600 transition shadow-lg font-semibold"
            >
              Login
            </NavLink>

            <NavLink
              to="/signup"
              className="px-5 py-2 rounded-md bg-sky-500 hover:bg-sky-600 transition shadow-lg font-semibold"
            >
              Sign Up
            </NavLink>
          </div>

          {/* Mobile Menu Icon */}
          <div
            className="lg:hidden cursor-pointer z-50"
            onClick={() => setOpen(!open)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-screen w-72 bg-black/90 backdrop-blur-xl
          flex flex-col gap-8 p-10 text-lg font-medium
          transform transition-transform duration-500 z-50
          ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          {links.map((link, i) => (
            <NavLink
              key={i}
              to={link.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `transition ${
                  isActive ? "text-sky-400" : "text-white/80"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <hr className="border-white/20" />

          <NavLink to="/login" onClick={() => setOpen(false)}>
            Login
          </NavLink>

          <NavLink
            to="/signup"
            onClick={() => setOpen(false)}
            className="px-5 py-2 text-center rounded-full bg-sky-500"
          >
            Sign Up
          </NavLink>
        </div>
      </header>
    </>
  );
};

export default Navbar;