
import React, { useState } from "react";
import kitchen1 from "../Assests/Cate/HomeKitchan/clock.webp";
import kitchen2 from "../Assests/Cate/HomeKitchan/char.webp";
import kitchen3 from "../Assests/Cate/HomeKitchan/current aduppu.webp";
import kitchen4 from "../Assests/Cate/HomeKitchan/kitchen starnd.webp";
import kitchen5 from "../Assests/Cate/HomeKitchan/kitchn.webp";
import kitchen6 from "../Assests/Cate/HomeKitchan/light night.webp";
import kitchen7 from "../Assests/Cate/HomeKitchan/metal kitchen cabinet.webp";
import kitchen8 from "../Assests/Cate/HomeKitchan/milk.webp";
import kitchen9 from "../Assests/Cate/HomeKitchan/mixci.webp";
import kitchen10 from "../Assests/Cate/HomeKitchan/mobile stand.webp";
import kitchen11 from "../Assests/Cate/HomeKitchan/multiperupose home kitchen.webp";
import kitchen12 from "../Assests/Cate/HomeKitchan/pan.webp";
import kitchen13 from "../Assests/Cate/HomeKitchan/slove gas.webp";
import kitchen14 from "../Assests/Cate/HomeKitchan/stroge cabinet.webp";
const HomeKitchen = ({ addToCart,toggle }) => {
  const [popup, setPopup] = useState(null);

  const kitchenItems = [
    { name: "Clock", image: kitchen1, price: 499, description: "Stylish clock for modern kitchens." },
    { name: "Chair", image: kitchen2, price: 1799, description: "Ergonomic chair for kitchen use." },
    { name: "Current Aduppu", image: kitchen3, price: 2299, description: "Efficient cooking stove." },
    { name: "Kitchen Stand", image: kitchen4, price: 499, description: "Durable kitchen stand for storage." },
    { name: "Kitchen Set", image: kitchen5, price: 699, description: "Complete kitchen set with essentials." },
    { name: "Night Light", image: kitchen6, price: 199, description: "Ambient night light for kitchen." },
    { name: "Metal Cabinet", image: kitchen7, price: 250, description: "Spacious metal kitchen cabinet." },
    { name: "Milk Can", image: kitchen8, price: 399, description: "Stainless steel milk can." },
    { name: "Mixer", image: kitchen9, price: 3899, description: "High-speed mixer for everyday use." },
    { name: "Mobile Stand", image: kitchen10, price: 199, description: "Convenient mobile stand for kitchens." },
    { name: "Multipurpose Set", image: kitchen11, price: 399, description: "Multipurpose kitchen tool set." },
    { name: "Pan", image: kitchen12, price: 549, description: "Non-stick frying pan." },
    { name: "Gas Stove", image: kitchen13, price: 2999, description: "4-burner gas stove." },
    { name: "Storage Cabinet", image: kitchen14, price: 400, description: "Multi-shelf storage cabinet." },
  ];

  const openPopup = (item) => setPopup(item);
  const closePopup = () => setPopup(null);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-center mb-6">Home Kitchen</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {kitchenItems.map((item, index) => (
       <div
       key={index}
       className={`p-4 bg-gray-100 rounded shadow-md hover:shadow-lg transition-all flex flex-col justify-between  hover:scale-105 hover:ease-linear hover:duration-700 cursor-pointer items-center ${toggle?"bg-gray-500":"bg-gray-100"}`}
   >
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded md:w-fit" />
            <h3 className="mt-2 text-lg font-bold">{item.name}</h3>
            <p className="text-gray-500">${item.price.toLocaleString()}</p>
            <div className="flex gap-2 mt-2">
              <button
                className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                onClick={() => addToCart(item)}
              >
                Add to Cart
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => openPopup(item)}
              >
                View
              </button>
            </div>
          </div>
        ))}
      </div>

      {popup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
          <div className="bg-white rounded-lg p-6 shadow-lg max-w-md w-full relative flex flex-col items-center justify-center">
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center"
            >
              &times;
            </button>
            <img
              src={popup.image}
              alt={popup.name}
              className="w-fit h-60 object-cover rounded mb-4"
            />
            <h3 className="text-xl font-bold">{popup.name}</h3>
            <p className="text-gray-500">${popup.price}</p>
            <p className="mt-2 text-gray-700">{popup.description}</p>
            <button
              className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600"
              onClick={() => {
                addToCart(popup);
                closePopup();
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeKitchen;
