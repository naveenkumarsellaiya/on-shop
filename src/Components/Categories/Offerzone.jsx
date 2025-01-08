import React, { useState } from 'react';
import offer1 from '../Assests/offer/book02.webp';
import offer2 from '../Assests/offer/speakers.webp';
import offer3 from '../Assests/offer/cook.webp';
import offer4 from '../Assests/offer/books.webp';
import offer5 from '../Assests/offer/crocs.webp';
import offer6 from '../Assests/offer/dress.webp';
import offer7 from '../Assests/offer/laptop.webp';
import offer8 from '../Assests/offer/pant.webp';
import offer9 from '../Assests/offer/laptop2.webp';
import offer10 from '../Assests/offer/phone.webp';
import offer11 from '../Assests/offer/phone2.webp';
import offer12 from '../Assests/offer/shos.webp';
const OfferZone = ({ addToCart,toggle }) => {
    const [popup, setPopup] = useState(null);
  
    const offers = [
      { name: "ReactJS For Beginners", price: 499, image: offer1 },
      { name: "Home Theatre", price: 2199, image: offer2 },
      { name: "Cooker", price: 2799, image: offer3 },
      { name: "Java Programming Guide", price: 899, image: offer4 },
      { name: "Croks Shoes", price: 999, image: offer5 },
      { name: "Mens Fashion", price: 1099, image: offer6 },
      { name: "Hp Chromebook", price: 42199, image: offer7 },
      { name: "Cotton Pant", price: 799, image: offer8 },
      { name: "Samsung Galaxy Book 4", price: 50299, image: offer9 },
      { name: "One Plus", price: 19299, image: offer10 },
      { name: "iQOO Z9 S", price: 23299, image: offer11 },
      { name: "Combo Shoes", price: 799, image: offer12 },
    ];
  
    const openPopup = (offer) => setPopup(offer);
  
    const closePopup = () => setPopup(null);
  
    return (
      <div className="p-4">
        <h2 className="text-2xl font-bold text-center mb-6">Offer Zone</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 ">
          {offers.map((offer, index) => (
            <div
              key={index}
              className={` p-4 rounded-md flex items-center flex-col justify-center shadow-md hover:shadow-lg transition-all duration-500 hover:scale-105 ease-linear cursor-pointer  ${toggle?"bg-gray-100 text-white mix-blend-color-burn":"bg-gray-400 text-black"}`}
            >
              <img
                src={offer.image}
                alt={offer.name}
                className="w-30 h-40 object-cover rounded-md mix-blend-color-burn"
              />
              <h3 className="mt-2 text-lg font-bold">{offer.name}</h3>
              <p >${offer.price.toLocaleString()}</p>
              <div className="flex gap-2">
                <button
                  className="mt-2 bg-green-500 text-white rounded hover:bg-green-600 py-1 px-2"
                  onClick={() => addToCart(offer)}
                >
                  Add to Cart
                </button>
                <button
                  className="mt-2 bg-blue-500 text-white rounded hover:bg-blue-600 py-1 px-2"
                  onClick={() => openPopup(offer)}
                >
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
  
        {popup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 top-24">
            <div className="bg-white rounded-lg p-6 shadow-lg max-w-md w-full relative flex flex-col items-center">
              <button
                className="absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center"
                onClick={closePopup}
              >
                &times;
              </button>
              <img
                src={popup.image}
                alt={popup.name}
                className="w-fit h-60 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-bold">{popup.name}</h3>
              <p className="text-gray-500">${popup.price}</p>
              <div className="flex gap-4">
                <button
                  className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                  onClick={() => {
                    addToCart(popup);
                    closePopup();
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default OfferZone;
  