import React from "react";
import { NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

// Import images
import mobilesImage from "../Assests/mobile.webp";
import laptop from "../Assests/laptop.webp";
import speaker from "../Assests/speaker.jpg";
import books from "../Assests/books.webp";
import menCloths from "../Assests/mencloths.jpg";
import home from "../Assests/home.jpeg";
import offer from "../Assests/Offer.jpeg";

function Slidebar({ changeIcon, setChengeIcon, toggle, setToggle }) {
  const categories = [
    { name: "mobiles", displayName: "Mobiles & Gadgets", img: mobilesImage },
    { name: "laptops", displayName: "Laptops & Computers", img: laptop },
    { name: "speakers", displayName: "Audio & Speakers", img: speaker },
    { name: "books", displayName: "Books & Literature", img: books },
    { name: "cloths", displayName: "Men's Clothing", img: menCloths },
    { name: "home/kit", displayName: "Home & Kitchen", img: home },
    { name: "offerzone", displayName: "Exclusive Offers", img: offer },
  ];

  // Toggle Sidebar visibility
  const removeSlide = () => {
    setChengeIcon(!changeIcon);
  };

  return (
    <section
      className={`absolute z-50 ${
        changeIcon ? "translate-x-0" : "-translate-x-full"
      } w-full sm:w-[50%] lg:w-[30%] h-full transition-transform duration-300 ease-in-out`}
    >
      {/* Sidebar Container */}
      <div
        className={`absolute w-full h-full ${
          toggle ? "bg-gray-300 text-white" : "bg-slate-100 text-black"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-2">
          <button
            className="text-gray-600 transition-colors duration-300 rounded-full hover:text-blue-500"
            onClick={removeSlide}
            aria-label="Close Sidebar"
          >
            <FaTimes size={20} />
          </button>
        </div>

        {/* Sidebar Content */}
        <div className="flex flex-col gap-4 p-5 h-[calc(100vh-60px)] overflow-y-auto">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-3 transition-transform duration-200 ease-in-out rounded-md cursor-pointer hover:scale-105 hover:bg-gray-300"
            >
              <NavLink
                to={category.name === "offerzone" ? "/offerzone" : `/${category.name}`}
                onClick={removeSlide}
                className={({ isActive }) =>
                  `text-lg font-medium flex items-center gap-2 w-full hover:text-pink-800 ${
                    isActive ? "text-pink-600 py-3" : "text-black"
                  }`
                }
              >
                <img
                  src={category.img}
                  alt={category.name}
                  className="w-12 h-12 rounded-full"
                />
                {category.displayName}
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Slidebar;
