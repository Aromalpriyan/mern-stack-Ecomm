import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AuthContext from "../context/AuthContext";
import { toast } from "sonner";
import axios from "axios";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { auth, setAuth } = useContext(AuthContext);

  // 🔹 Logout
  const handleLogout = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/auth/logout"
      );

      if (data.success) {
        toast.success(data.message);
        setAuth({
          ...auth,
          user: null,
          token: "",
        });
        localStorage.removeItem("auth");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong while logging out");
    }
  };

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
        <div className="flex items-center px-6 lg:px-20 h-20
          bg-white/5 backdrop-blur-xl border-b border-white/10
          shadow-[0_8px_30px_rgba(0,0,0,0.3)] text-white">

          {/* 🔹 Logo */}
          <NavLink
            to="/"
            className="text-2xl lg:text-3xl font-bold tracking-wide
            bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent"
          >
            MyStore
          </NavLink>

          {/* 🔹 RIGHT SIDE */}
          <div className="hidden lg:flex items-center gap-8 font-medium ml-auto">

            {/* Home */}
            <NavLink to="/" className={({ isActive }) =>
              `relative group transition ${isActive ? "text-sky-400" : "text-black/80"}`
            }>
              Home
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-sky-400 group-hover:w-full transition-all"></span>
            </NavLink>

            {/* After Login Links */}
            {auth?.user && (
              <>
                <NavLink to="/about" className={({ isActive }) =>
                  `relative group transition ${isActive ? "text-sky-400" : "text-black/80"}`
                }>
                  About
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-sky-400 group-hover:w-full transition-all"></span>
                </NavLink>

                <NavLink to="/collection" className={({ isActive }) =>
                  `relative group transition ${isActive ? "text-sky-400" : "text-black/80"}`
                }>
                  Collection
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-sky-400 group-hover:w-full transition-all"></span>
                </NavLink>

                <NavLink to="/products" className={({ isActive }) =>
                  `relative group transition ${isActive ? "text-sky-400" : "text-black/80"}`
                }>
                  Products
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-sky-400 group-hover:w-full transition-all"></span>
                </NavLink>

                {/* USER DROPDOWN */}
                <div className="relative group">
                  <div className="flex items-center gap-2 cursor-pointer">
                    <span className="text-sky-400 font-semibold">
                      {auth?.user?.name}
                    </span>
                    <span className="text-xs">▼</span>
                  </div>

                  <div className="absolute right-0 mt-3 w-40 bg-white text-black rounded-lg shadow-lg
                    opacity-0 invisible group-hover:opacity-100 group-hover:visible
                    transition-all duration-300 z-50">

                    <NavLink
                      to={`/dashboard/${auth.user.role === "admin" ? "admin" : "user"}`}
                      className="block px-4 py-2 hover:bg-gray-100 rounded-t-lg"
                    >
                      Dashboard
                    </NavLink>

                    <NavLink
                      to="/profile"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Profile
                    </NavLink>

                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 hover:bg-red-100 text-red-500 rounded-b-lg"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </>
            )}

            {/* Before Login */}
            {!auth?.user && (
              <>
                <NavLink
                  to="/login"
                  className="px-5 py-2 rounded-md bg-sky-500 hover:bg-sky-600 font-semibold"
                >
                  Login
                </NavLink>

                <NavLink
                  to="/signup"
                  className="px-5 py-2 rounded-md bg-sky-500 hover:bg-sky-600 font-semibold"
                >
                  Sign Up
                </NavLink>
              </>
            )}
          </div>

          {/* 🔹 Mobile Icon */}
          <div
            className="text-white lg:hidden ml-auto cursor-pointer z-50"
            onClick={() => setOpen(!open)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </div>
        </div>

        {/* 🔹 Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-screen w-72 bg-black/90 backdrop-blur-xl
          flex flex-col gap-8 p-10 text-lg font-medium
          transform transition-transform duration-500 z-50
          ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>

          {auth?.user && (
            <>
              <NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink>
              <NavLink to="/collection" onClick={() => setOpen(false)}>Collection</NavLink>
              <NavLink to="/products" onClick={() => setOpen(false)}>Products</NavLink>
            </>
          )}

          <hr className="border-white/20" />

          {!auth?.user ? (
            <>
              <NavLink to="/login" onClick={() => setOpen(false)} className="px-5 py-2 bg-sky-500 text-center rounded-full">
                Login
              </NavLink>
              <NavLink to="/signup" onClick={() => setOpen(false)} className="px-5 py-2 bg-sky-500 text-center rounded-full">
                Sign Up
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to="/dashboard" onClick={() => setOpen(false)}>Dashboard</NavLink>
              <NavLink to="/profile" onClick={() => setOpen(false)}>Profile</NavLink>

              <button
                onClick={() => {
                  handleLogout();
                  setOpen(false);
                }}
                className="px-5 py-2 bg-red-500 rounded-full text-white"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </header>
    </>
  );
};

export default Navbar;