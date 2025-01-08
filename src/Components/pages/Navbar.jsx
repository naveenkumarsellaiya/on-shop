import React, { useEffect } from "react";
import { FaCartPlus, FaUserAlt, FaSun, FaMoon, FaSearch } from "react-icons/fa";
import { IoReorderThreeOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Navbar = ({ toggle, setToggle, setChengeIcon, changeIcon, CartCount }) => {
  // Handle dark mode toggle
  useEffect(() => {
    if (toggle) {
      document.body.classList.add("bg-gray-800", "text-white");
    } else {
      document.body.classList.remove("bg-gray-800", "text-white");
    }
  }, [toggle]);

  const icons = [
    { name: "Login", icon: <FaUserAlt />, path: "/login" },
    { name: "Cart", icon: <FaCartPlus />, path: "/carts" },
  ];

  const subnav = [
    { name: "Home"},
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const toggleCategories = () => setChengeIcon(!changeIcon);

  return (
    <nav className="w-full select-none bg-slate-200 z-50">
      {/* Main Navbar */}
      <div className="flex items-center justify-between px-4 py-5 font-semibold">
        {/* Title */}
        <h2 className="text-2xl transition duration-500 cursor-pointer hover:text-violet-800 text-violet-600">
          <NavLink to="/">ON-SHOP</NavLink>
        </h2>

      

        {/* Icons and Dark/Light Toggle */}
        <div className="flex items-center gap-5 md:gap-9 lg:gap-14">
          {icons.map((icon, index) => (
            <NavLink
              key={index}
              to={icon.path}
              className={({ isActive }) =>
                `flex items-center gap-1 text-lg cursor-pointer hover:text-orange-500 ${
                  isActive ? "text-pink-600" : "text-black"
                }`
              }
              title={icon.name}
            >
              {icon.icon}
              {icon.name === "Cart" && (
                <div className="relative">
                  {CartCount > 0 && (
                    <p className="absolute top-0 -right-2 bg-blue-700 px-1 rounded-full w-4 h-4 text-white flex items-center text-sm justify-center">
                      {CartCount}
                    </p>
                  )}
                </div>
              )}
              {icon.name}
            </NavLink>
          ))}
          <button
            className="flex items-center gap-2 text-lg cursor-pointer hover:text-orange-500 text-black"
            onClick={() => setToggle(!toggle)}
            title="Toggle Theme"
          >
            {toggle ? (
              <>
                Light <FaSun className="transition duration-300 hover:rotate-45 text-black" />
              </>
            ) : (
              <>
                Dark <FaMoon />
              </>
            )}
          </button>
        </div>
      </div>

      {/* Subnavigation */}
      <section className={`bg-slate-300 ${toggle ? "text-gray-800" : "text-black"}`}>
        <div className="flex justify-between px-4">
          <p
            className="flex items-center gap-2 font-medium transition duration-300 cursor-pointer hover:text-orange-500 text-md"
            onClick={toggleCategories}
            title="Toggle Categories"
          >
            <IoReorderThreeOutline size={30} />
          </p>

          <ul className="flex justify-around gap-16 py-3 ">
            {subnav.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `font-medium text-md transition duration-300 cursor-pointer hover:text-orange-500 ${
                      isActive ? "text-pink-600" : "text-black"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
