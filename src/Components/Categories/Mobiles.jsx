import React, { useEffect, useState } from "react";
import scroll1 from "../Assests/Cate/Mobile/scroll/mobile.webp";
import scroll2 from "../Assests/Cate/Mobile/scroll/mobile1.webp";
import scroll3 from "../Assests/Cate/Mobile/scroll/mobile2.webp";

import Mobi from "../Assests/Cate/Mobile/Infinix Note 40 Pro Series_ Power-packed Features Ajleeblog.jpeg"
import Mobi1 from "../Assests/Cate/Mobile/Jethro SC490 4G Unlocked Big Button Cell Phone for Seniors, Larger Screen, Quick Charging Table Dock, SOS Button, Speed Dial, Hearing Aid Support, Easy to Use for Elderly & Kids.jpeg"
import Mobi2 from "../Assests/Cate/Mobile/Motorola Razr 50 Ultra 12_512GB Peach Fuzz Libre.jpeg"
import Mobi3 from "../Assests/Cate/Mobile/OPPO A3x with Dimensity 6300, 5,100mAh Battery Launched in India.jpeg"
import Mobi4 from "../Assests/Cate/Mobile/Nokia 6310 Dials in the Nostalgia With the Return of the Brick Phone.jpeg"
import Mobi5 from "../Assests/Cate/Mobile/Redmi 13 256 GB _ 8 GB - Smartphone - pearl pink Smartphone (6,79 Zoll, 256 GB Speicherplatz).jpeg"
import Mobi6 from "../Assests/Cate/Mobile/realme c65 Smartphone 8+256 Go, 50MP AI Camera, 6_67'' Eye Comfort Display with 90Hz Refresh Rate, 45W Fast Charge, 5000mAh Massive Battery, NFC Supported, Starlight Gold.jpeg"
import Mobi7 from "../Assests/Cate/Mobile/iQOO 9 SE 5G phone worth 40 thousand is available for only 13 thousand.jpeg"
import Mobi8 from "../Assests/Cate/Mobile/realme Note 50 Smartphone 3+64GB, 90Hz Vivid Display, 48-Month Fluency Protection, 13MP AI Camera, 7_99 mm Ultra Slim, 5000 mAh Massive Battery, Midnight Black (no adapter).jpeg"
import Mobi9 from "../Assests/Cate/Mobile/Xiaomi Mi 11 Lite 5G NE - Unlocked Smartphone 5G.jpeg"
import Mobi10 from "../Assests/Cate/Mobile/Vivo Y18s Launch_ New Budget Phone in Vietnam.jpeg"
import Mobi11 from "../Assests/Cate/Mobile/Redmi 13 256 GB _ 8 GB - Smartphone - pearl pink Smartphone (6,79 Zoll, 256 GB Speicherplatz).jpeg"
import mobil12 from "../Assests/Cate/Mobile/Vivo V40e Launched_ A Powerful Mid-Range Smartphone Ajleeblog.jpeg"
import mobil13 from "../Assests/Cate/Mobile/Redmi Note 12 Pro 5G.jpeg"
import mobil14 from "../Assests/Cate/Mobile/Vivo V23 5G Mobile Phone Price In Pakistan.jpeg"
import mobil15 from "../Assests/Cate/Mobile/Realme 8 Pro 5G With Charger And Cable.jpeg"
import mobil16 from "../Assests/Cate/Mobile/Oppo a3x phone, 6_ 67-inch, 128gb, 4gb ram – red.jpeg"
import mobil17 from "../Assests/Cate/Mobile/OnePlus 12,12GB RAM+256GB,Dual-SIM.jpeg"
import mobil18 from "../Assests/Cate/Mobile/OPPO Reno12 Pro 5G 512GB - Nebula Silver.jpeg"
import mobil19 from "../Assests/Cate/Mobile/OnePlus 11 5G.jpeg"
import mobil20 from "../Assests/Cate/Mobile/Motorola moto G24 (Dual Sim, 128GB_4GB, 6_6'') - Pink Lavender.jpeg"


const products = [
  { image: Mobi, name: "Infinix Note 40 Pro", price: 24999, del: "Free Shipping" },
  { image: Mobi1, name: "Jethro SC490", price: 2999, del: "Free Shipping" },
  { image: Mobi2, name: "Motorola Razr 50 Ultra", price: 81999, del: "Free Shipping" },
  { image: Mobi3, name: "OPPO A3x", price: 18999, del: "Free Shipping" },
  { image: Mobi4, name: "Nokia 6310", price: 1599, del: "Free Shipping" },
  { image: Mobi5, name: "Redmi 13", price: 29999, del: "Free Shipping" },
  { image: Mobi6, name: "Realme C65", price: 20999, del: "Free Shipping" },
  { image: Mobi7, name: "iQOO 9 SE", price: 32999, del: "Free Shipping" },
  { image: Mobi8, name: "Realme Note 50", price: 15999, del: "Free Shipping" },
  { image: Mobi9, name: "Xiaomi Mi 11 Lite 5G", price: 24999, del: "Free Shipping" },
  { image: Mobi10, name: "Vivo Y18s", price: 16999, del: "Free Shipping" },
  { image: mobil12, name: "Vivo V40e", price: 23999, del: "Free Shipping" },
  { image: mobil13, name: "Redmi Note 12 Pro 5G", price: 29999, del: "Free Shipping" },
  { image: mobil14, name: "Vivo V23 5G", price: 27999, del: "Free Shipping" },
  { image: mobil15, name: "Realme 8 Pro 5G", price: 20999, del: "Free Shipping" },
  { image: mobil16, name: "Oppo A3x", price: 18999, del: "Free Shipping" },
  { image: mobil17, name: "OnePlus 12", price: 74999, del: "Free Shipping" },
  { image: mobil18, name: "OPPO Reno12 Pro 5G", price: 54999, del: "Free Shipping" },
  { image: mobil19, name: "OnePlus 11 5G", price: 62999, del: "Free Shipping" },
  { image: mobil20, name: "Motorola Moto G24", price: 18999, del: "Free Shipping" },
];

const Mobile = ({ addToCart }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const scroll = [scroll1, scroll2, scroll3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % scroll.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [scroll.length]);

  const openPopup = (product) => {
    setSelectedProduct(product);
  };

  const closePopup = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-center mb-4">Upcoming Smartphones</h2>
      <div className="flex justify-center items-center">
        <img
          src={scroll[currentIndex]}
          alt={`Smartphone ${currentIndex + 1}`}
          className="w-full max-h-48 object-cover rounded-md shadow-md"
        />
      </div>

      <h2 className="text-xl text-center mt-6 font-semibold">Smartphone World</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="border rounded-md p-4 shadow-md hover:shadow-lg flex flex-col justify-between cursor-pointer hover:scale-105 transition-transform duration-700 items-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full md:w-fit h-40 object-cover" />
            <div>
              <h3 className="mt-2 text-lg font-bold">{product.name}</h3>
              <p className="text-gray-500">₹{product.price.toLocaleString()}</p>
              <div className="flex gap-2">
                <button
                  className="mt-4 bg-green-600 text-white py-2 px-2 rounded hover:bg-green-700 transition-colors"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
                <button
                  className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
                  onClick={() => openPopup(product)}
                >
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white relative flex flex-col justify-center items-center p-3 rounded-lg shadow-lg w-1/2 sm:w-2/3 lg:w-1/3">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              onClick={closePopup}
            >
              &times;
            </button>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-fit h-60 hover:scale-105 ease-linear duration-300 cursor-pointer object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold">{selectedProduct.name}</h3>
            <p className="text-gray-500 mt-2">₹{selectedProduct.price.toLocaleString()}</p>
            <p className="text-gray-600 mt-4">{selectedProduct.del}</p>
            <button
              className="mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors"
              onClick={() => {
                addToCart(selectedProduct);
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

export default Mobile;