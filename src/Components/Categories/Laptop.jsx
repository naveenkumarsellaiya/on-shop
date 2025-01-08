import React, { useState } from 'react';
import laptop from '../Assests/Cate/Laptop/ASUS 2022 14_ Thin Light Business Student Laptop Computer, Intel Celeron N4020 Processor, 4GB DDR4 RAM, 320 GB Storage, 12Hours Battery, Webcam, Zoom Meeting, Win11 + 1 Year Office 365, Rose Gold.jpeg';
import laptop1 from '../Assests/Cate/Laptop/ASUS Zenbook 14 OLED (UX3405)｜Laptops For Home｜ASUS Baltics.jpeg';
import laptop2 from '../Assests/Cate/Laptop/Acer Aspire 3 A315-24P-R7VH Slim Laptop.jpeg';
import laptop3 from '../Assests/Cate/Laptop/Acer Aspire Lite 13th Gen Intel Core i3-1305U Thin and Light Premium Laptop (Windows 11.jpeg';
import laptop4 from '../Assests/Cate/Laptop/Asus vivobook 14 intel core i7 1165g7, 16gb ram, 1tb ssd, 14 inch, windows 11 laptop _ ___.jpeg';
import laptop5 from '../Assests/Cate/Laptop/Dell Gaming G15 5525 2022 AMD Edition Laptops Launched in India _ Tech Stories India _ Technology News Online.jpeg';
import laptop6 from '../Assests/Cate/Laptop/HP 14s-dq2575TU.jpeg';
// import laptop7 from '../Assests/Cate/Laptop/Hp 17t-cn000 Entertainment Laptop (Intel i5-1135G7 4-Core, 17_3in 60Hz Full HD (1920x1080), Nvidia Mx450, 64gb Ram, 1TB PCIe Ssd, Wifi, Hdmi, Webcam, Win 10 Home) with Dv4k Dock, Size_75 IN, Silver.jpeg';
import laptop8 from '../Assests/Cate/Laptop/Lenovo V15 Laptop, 15_6_ FHD Display, AMD Ryzen 5 5500U Hexa-core Processor (Beat Intel i7-1065G7), 16GB RAM, 512GB SSD, HDMI, RJ45, Numeric Keypad, Wi-Fi, Windows 11 Pro, Black.jpeg';
import laptop9 from '../Assests/Cate/Laptop/Lenovo Yoga 9i 14 inch 2_8K OLED Intel Evo Core Ultra 7 155H 16GB RAM 1TB SSD Windows 11 Home Notebook.jpeg';

const Laptop = ({addToCart}) => {
    const laptops = [
        { name: "ASUS Thin Light Laptop", price:59999, image: laptop },
        { name: "ASUS Zenbook 14 OLED", price: 99999, image: laptop1 },
        { name: "Acer Aspire 3", price: 69999, image: laptop2 },
        { name: "Acer Aspire Lite", price: 79999, image: laptop3 },
        { name: "Asus Vivobook 14", price: 89999, image: laptop4 },
        { name: "Dell Gaming G15", price: 119999, image: laptop5 },
        { name: "HP 14s-dq2575TU", price: 54999, image: laptop6 },
        // { name: "HP 17t-cn000", price: 139999, image: laptop7 },
        { name: "Lenovo V15", price: 64999, image: laptop8 },
        { name: "Lenovo Yoga 9i", price: 49999, image: laptop9 },
    ];

    const [popup, setPopup] = useState(null);

    const openPopup = (laptop) => {
        setPopup(laptop);
    };

    const closePopup = () => {
        setPopup(null);
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold text-center mb-6">Laptop Collections</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {laptops.map((laptop, index) => (
                      <div
                      key={index}
                      className="border rounded-md p-4 shadow-md hover:shadow-lg flex flex-col justify-center items-center cursor-pointer hover:scale-105 transition-transform duration-700 "
                     
                    >
                        <img src={laptop.image} alt={laptop.name} className="w-full md:w-fit h-40 object-cover" />
                        <h3 className="mt-2 text-lg font-bold">{laptop.name}</h3>
                        <p className="text-gray-500">₹{laptop.price.toLocaleString()}</p>
                        <div className='flex gap-2'>

                        <button className='mt-2 bg-green-500 text-white  rounded hover:bg-green-600 py-1 px-2' onClick={()=>addToCart(laptop)}>
                            Add to Cart
                        </button>
                        <button
                            onClick={() => openPopup(laptop)}
                            className="mt-2 bg-blue-500 text-white  rounded hover:bg-blue-600 py-1 px-2"
                        >
                            View
                        </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Popup Modal */}
            {popup && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg p-6 shadow-lg max-w-md w-full relative ">
                        <button
                            onClick={closePopup}
                            className="absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center"
                        >
                            &times;
                        </button>
                        <img src={popup.image} alt={popup.name} className="w-full h-60 object-cover mb-4 hover:scale-105 " />
                        <h3 className="text-xl font-bold">{popup.name}</h3>
                        <p className="text-gray-500">{popup.price}</p>
                       
                        <button className='mt-2 bg-green-500 text-white  rounded hover:bg-green-600 py-1 px-2' onClick={()=>{addToCart(laptop);closePopup()}}>
                            Add to Cart
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Laptop;
