import React, { useState } from "react";
import speaker1 from '../Assests/Cate/speakers/40W TV Soundbar Wired and Wireless Bluetooth Home Surround SoundBar for PC Theater TV Speaker with.jpeg';
import speaker2 from '../Assests/Cate/speakers/5_1 Channel Bluetooth Speaker Wooden Multimedia Home Theater Set Sound Box Super Subwoofer Wooden.jpeg';
import speaker3 from '../Assests/Cate/speakers/LG LHB675N 4_2 Blu-ray Disc Home Theater System.jpeg';
import speaker4 from '../Assests/Cate/speakers/SVS Prime Elevation Effects.jpeg';
import speaker5 from '../Assests/Cate/speakers/The Complete Home Theater Setup Guide for 2020.jpeg';
import speaker6 from '../Assests/Cate/speakers/beFree Sound 3-Speaker 40-Watt Black 2_1 Home Theater Speaker System _ 84995515M.jpeg';
import speaker7 from '../Assests/Cate/speakers/boat.webp';
import speaker8 from '../Assests/Cate/speakers/egate.webp';
import speaker9 from '../Assests/Cate/speakers/iLive 5_1 Home Theater System with Bluetooth, 6….jpeg';

const Speaker = ({ addToCart,toggle }) => {
    const [popup, setPopup] = useState(null);

    const speakers = [
        { name: "40W TV Soundbar", image: speaker1, price: 5999, description: "High-quality soundbar for your TV with wired and wireless options." },
        { name: "5.1 Channel Bluetooth Speaker", image: speaker2, price: 8999, description: "Powerful Bluetooth speaker with wooden subwoofer." },
        { name: "LG LHB675N Home Theater", image: speaker3, price: 29999, description: "Complete Blu-ray disc home theater system." },
        { name: "SVS Prime Elevation Effects", image: speaker4, price: 19999, description: "Premium elevation effects for immersive sound." },
        { name: "Home Theater Setup Guide", image: speaker5, price: 1999, description: "Comprehensive guide to set up your home theater." },
        { name: "beFree Sound 3-Speaker System", image: speaker6, price: 4999, description: "Compact 3-speaker system with great sound quality." },
        { name: "Boat Speaker", image: speaker7, price: 3999, description: "Stylish and portable boat speaker with premium audio." },
        { name: "Egate Speaker", image: speaker8, price: 4499, description: "Compact and efficient Egate speaker system." },
        { name: "iLive Home Theater System", image: speaker9, price: 12999, description: "Complete home theater system with Bluetooth connectivity." },
    ];

    const openPopup = (speaker) => setPopup(speaker);
    const closePopup = () => setPopup(null);


    return (
        <div className={`p-4 `}>
            <h2 className="text-2xl font-bold text-center mb-6">Speakers</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 justify-center items-center">
                {speakers.map((speaker, index) => (
                    <div
                        key={index}
                        className={`p-4 bg-gray-100 rounded shadow-md hover:shadow-lg transition-all flex flex-col justify-between  hover:scale-105 hover:ease-linear hover:duration-700 cursor-pointer items-center ${toggle?"bg-gray-500":"bg-gray-100"}`}
                    >
                        <img
                            src={speaker.image}
                            alt={speaker.name}
                            className="w-full md:w-fit object-cover" 
                        />
                        <h3 className="mt-2 text-lg font-bold">{speaker.name}</h3>
                        <p className="text-gray-500">₹{speaker.price.toLocaleString()}</p>
                        <div className="flex gap-2">
                            <button
                                className="mt-2 bg-green-500 text-white rounded hover:bg-green-600 py-1 px-2"
                                onClick={() => addToCart(speaker)}
                            >
                                Add to Cart
                            </button>
                            <button
                                onClick={() => openPopup(speaker)}
                                className="mt-2 bg-blue-500 text-white rounded hover:bg-blue-600 py-1 px-2"
                            >
                                View
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {popup && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
                    <div className="bg-white rounded-lg p-6 shadow-lg max-w-md w-full relative">
                        <button
                            onClick={closePopup}
                            className="absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center"
                        >
                            &times;
                        </button>
                        <img
                            src={popup.image}
                            alt={popup.name}
                            className="w-full h-60 object-cover rounded mb-4"
                        />
                        <h3 className="text-xl font-bold">{popup.name}</h3>
                        <p className="text-gray-500">(popup.price)</p>
                        <p className="mt-2 text-gray-700">{popup.description}</p>
                        <button
              className="mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors"
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

export default Speaker;
