import React from "react";

const About = ({toggle}) => {
  return (
    <div className={`contact-container px-6 py-8  text-gray-800 ${toggle?"text-white":" bg-white"}`}>
      <h1 className="text-4xl font-bold text-center text-violet-800 mb-6">
        About ON-SHOP
      </h1>
      <p className="text-lg leading-relaxed mb-4">
        Welcome to <strong>ON-SHOP</strong>! Our platform is designed to make shopping easy, convenient, and enjoyable. 
        Whether you’re looking for the latest gadgets, daily essentials, or home and kitchen products, we’ve got you covered.
      </p>
      <p className="text-lg leading-relaxed mb-4">
        At ON-SHOP, we specialize in offering a wide range of high-quality products, including:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Mobile Phones and Accessories</li>
        <li>Laptops and Electronics</li>
        <li>Books and Stationery</li>
        <li>Cloths for Mens</li>
        <li>Home and Kitchen Essentials</li>
      </ul>
      <p className="text-lg leading-relaxed">
        With features like a user-friendly cart system and seamless order management, ON-SHOP ensures a smooth and secure shopping experience. Start shopping today and discover the difference with ON-SHOP!
      </p>
    </div>
  );
};

export default About;
