import React, {  useState } from "react";

import cloth1 from "../Assests/Cate/cloths/00a318d2-f623-443d-872e-8a51536b32f9.jpeg";
import cloth2 from "../Assests/Cate/cloths/Antonios Business Casual Black Jeans - Preto _ 30.jpeg";
import cloth3 from "../Assests/Cate/cloths/Aonga Vintage Casual Loong Printed O Neck T Shirt For Male Trebdy Short Sleeve Gyms Train Blouse 2024 Men Oversize Shirts Tops 12-3XL.jpeg";
import cloth4 from "../Assests/Cate/cloths/Beach Clothes For Men 2 Piece Set Quick Dry Hawaiian Shirt and Shorts Set Men Fashion Clothing Printing Casual Outfits Summer - 7 _ XL.jpeg";
import cloth5 from "../Assests/Cate/cloths/Bellagio Checkered Long Sleeve.jpeg";
import cloth6 from "../Assests/Cate/cloths/Black and white tribal ankara wax print short sleeve button shirt with front pocket - Medium.jpeg";
import cloth7 from "../Assests/Cate/cloths/Calça Jeans Masculina Casual Reta Stretch Moda Clássica Azul Trabalho Calça Jeans Masculina WTHINLEE Marca Roupas Tamanho 28-40 - 201-black _ 40.jpeg";
import cloth8 from "../Assests/Cate/cloths/Camisas masculinas clássicas xadrez casual com botões e capuz manga comprida bolsos duplos camisa com capuz jaqueta de flanela - Lonbeifz-401 _ XXL.jpeg";
import cloth9 from "../Assests/Cate/cloths/Jacket.jpeg";
import cloth10 from "../Assests/Cate/cloths/LifeHe Men Denim Jacket With Patches Light Blue.jpeg";
import cloth11 from "../Assests/Cate/cloths/Luxury fashion & independent designers.jpeg";
import cloth12 from "../Assests/Cate/cloths/Men Fall Fashion.jpeg";
import cloth13 from "../Assests/Cate/cloths/Men Random Paisley Scarf Print Shirt & Shorts Without Tee.jpeg";
import cloth14 from "../Assests/Cate/cloths/pant2.jpeg";
import cloth15 from "../Assests/Cate/cloths/OrcaJump – Mens Cargo Pants Elastic Drawstring Multi-Pocket Solid Color Casual Everyday Sports Stylish Army Green Khaki Micro-Elastic.jpeg";
import cloth16 from "../Assests/Cate/cloths/Spodnie Materiałowe Jogger Bojówki Męskie Oliwkowe Jigga Wear Stripe Zip Cargo.jpeg";
import cloth17 from "../Assests/Cate/cloths/f5350d09-0fb2-4fbc-95eb-3a07e32e3072.jpeg";
import cloth18 from "../Assests/Cate/cloths/f7aa6150-1700-484e-a957-52b33db919ad.jpeg";
import cloth19 from "../Assests/Cate/cloths/pour des Hommes Veste Fornet, Noir.jpeg";
import cloth20 from "../Assests/Cate/cloths/shirt.jpeg";

const Cloths = ({ addToCart, toggle }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showStatus, SetshowStatus] = useState("");

  const handleAddToCart = (product) => {
    addToCart(product);
    SetshowStatus(`${product.name} add to cart successfully...😊`);
    setIsVisible(true);
    setInterval(() => {
      setSelectedProduct("");
      setIsVisible(false);
    }, 3000);
  };

  const products = [
    { image: cloth1, name: "Casual Shirt", price: 299 },
    { image: cloth2, name: "Black Jeans", price: 499 },
    { image: cloth3, name: "Printed T-Shirt", price: 199 },
    { image: cloth4, name: "Hawaiian Shirt", price: 349 },
    { image: cloth5, name: "Checkered Shirt", price: 399 },
    { image: cloth6, name: "Tribal Print Shirt", price: 259 },
    { image: cloth7, name: "Casual Blue Jeans", price: 449 },
    { image: cloth8, name: "Flannel Shirt", price: 399 },
    { image: cloth9, name: "Men's Jacket", price: 699 },
    { image: cloth10, name: "Denim Jacket", price: 599 },
    { image: cloth11, name: "Luxury Shirt", price: 999 },
    { image: cloth12, name: "Fall Fashion Shirt", price: 299 },
    { image: cloth13, name: "Paisley Print Shorts", price: 249 },
    { image: cloth14, name: "Casual Pants", price: 399 },
    { image: cloth15, name: "Cargo Pants", price: 499 },
    { image: cloth16, name: "Jogger Pants", price: 299 },
    { image: cloth17, name: "Vintage Shirt", price: 299 },
    { image: cloth18, name: "Trendy Shirt", price: 329 },
    { image: cloth19, name: "Black Jacket", price: 899 },
    { image: cloth20, name: "Formal Shirt", price: 399 },
  ];

  const openPopup = (product) => {
    setSelectedProduct(product);
  };

  const closePopup = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="p-4 relative">
      {isVisible && (
        <div className="z-50 fixed bottom-9 right-0 -translate-x-1/2 transform  text-white  p-1  font-bold bg-green-600 rounded-md ease-linear duration-500 delay-700 transition-all">
          {showStatus}
        </div>
      )}
      <h2 className="text-2xl font-bold text-center mb-6">
        Clothing Collection
      </h2>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <div
            key={index}
            className={`p-4 bg-gray-100 rounded shadow-md hover:shadow-lg transition-all flex flex-col justify-between  hover:scale-105 hover:ease-linear hover:duration-700 cursor-pointer items-center ${
              toggle ? "bg-gray-500" : "bg-gray-100"
            }`}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full md:w-fit h-40 object-cover rounded-md"
            />
            <h3 className="mt-2 text-lg font-bold">{product.name}</h3>
            <p className="text-gray-500">₹{product.price.toLocaleString()}</p>

            <div className="flex gap-2 mt-4">
              <button
                className="bg-green-600 text-white py-2
                 px-2 rounded hover:bg-green-700 transition-colors"
                onClick={() => {
                  handleAddToCart(product);
                }}
              >
                Add to Cart
              </button>
              <button
                className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
                onClick={() => openPopup(product)}
              >
                View
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Product Popup */}
      {selectedProduct && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white relative p-6 rounded-lg shadow-lg w-4/5 sm:w-2/3 lg:w-1/3 flex flex-col items-center">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-2xl"
              onClick={closePopup}
              aria-label="Close"
            >
              &times;
            </button>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-fit h-60 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold">{selectedProduct.name}</h3>
            <p className="text-gray-500 mt-2">
              ₹{selectedProduct.price.toLocaleString()}
            </p>
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

export default Cloths;
