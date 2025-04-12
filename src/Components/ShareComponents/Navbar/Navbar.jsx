import { Link, useLocation } from "react-router-dom";
import { FaOpencart, FaBars, FaTimes } from "react-icons/fa";
import { SiThemoviedatabase } from "react-icons/si";
import { motion } from "framer-motion";
import { useAppContext } from "../../../Context/AppContextProvider";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

const lineVariant = {
  hidden: { opacity: 0, x: "100%" },
  visible: { opacity: 1, x: "0%", transition: { duration: 0.9 } },
};

function Navbar() {
  const _location = useLocation();
  const { cartQty } = useAppContext();
  const [isLogin, setIsLogin] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); 

  useEffect(() => {
    Cookies.get("token") && setIsLogin(true);
  }, []);

  const handelLogout = () => {
    Cookies.remove("token");
    location.reload();
  };

  return (
    <>
      <div className="mt-5 open-sans-body flex justify-between items-center px-6 lg:px-12">
        {/* Logo */}
        <motion.div
          initial={{ y: -200 }}
          animate={{ y: -8 }}
          transition={{ delay: 0.8, duration: 1, type: "spring", stiffness: 100 }}
          className="text-orange-400 text-5xl lg:text-6xl"
        >
          <SiThemoviedatabase aria-label="The Movie Database logo"/>
        </motion.div>

        {/* Mobile Menu Button */}
        <button
          className="text-orange-400 text-3xl md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links (Desktop & Mobile) */}
        <div
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent py-4 md:py-0 transition-all duration-300 ${
            menuOpen ? "block" : "hidden md:flex"
          }`}
        >
          <ul className="flex flex-col md:flex-row md:items-center md:space-x-6 text-lg text-center">
            {isLogin && (
              <Link
                tabIndex="0"
                to="/dashboard"
                className={`block md:inline ${
                  _location.pathname === "/dashboard" ? "text-white" : "text-orange-400"
                }`}
              >
                Dashboard
              </Link>
            )}
            <Link tabIndex="0" to="/" className={_location.pathname === "/" ? "text-white font-bold" : "text-orange-400"}>
              Home
            </Link>
            <Link
               tabIndex="0"
               to="/movies"
               className={_location.pathname === "/movies" ? "text-white font-bold" : "text-orange-400"}
               aria-label="Browse Movies" 
               title="Browse Movies"
               rel="noopener noreferrer"
                  >
                Movie
             </Link>

            <Link
              tabIndex="0"
              to="/category"
              className={_location.pathname === "/category" ? "text-white font-bold" : "text-orange-400"}
            >
              Category
            </Link>
          </ul>
        </div>

        {/* Cart & Login/Logout */}
        <div className="flex items-center space-x-4">
          <Link tabIndex="0" to="/cart" className="relative">
            <FaOpencart className="w-8 h-8 text-orange-400" />
            {cartQty() > 0 && (
              <span className="bg-rose-700 text-sm text-amber-50 absolute size-4.5 text-center -top-3 rounded-full -right-3">
                {cartQty()}
              </span>
            )}
          </Link>

          {isLogin ? (
            <button onClick={handelLogout} className="text-sm text-white">
              Logout
            </button>
          ) : (
            <Link tabIndex="0" to="/login" className="text-sm text-white">
              Login
            </Link>
          )}
        </div>
      </div>

      {/* Animated Line */}
      <motion.div variants={lineVariant} initial="hidden" animate="visible">
        <motion.hr className="border-t-2 border-white w-full" />
      </motion.div>
    </>
  );
}

export default Navbar;







