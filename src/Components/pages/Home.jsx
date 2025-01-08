import React, { useState } from "react";
import { Link } from "react-router-dom";
import scroll1 from "../Assests/scl1.jpg";
import scroll2 from "../Assests/scl2.jpg";
import scroll3 from "../Assests/scl3.jpg";
import scroll4 from "../Assests/scl4.webp";


import Footer from "./Footer";
import OfferZone from "../Categories/Offerzone";

const Home = ({addToCart,toggle}) => {
  const imgs = [
    { img: scroll1, alt: "scr1" },
    { img: scroll2, alt: "scr2" },
    { img: scroll3, alt: "scr3" },
    { img: scroll4, alt: "scr4" },
  ];


  return (
    <div>
      {/* Horizontal Scroll Section */}
      <section className="p-4">
        <div className="flex gap-4 mt-4 overflow-x-auto scrollbar-hide">
          {imgs.map((item, i) => (
            <div key={i} className={`flex-shrink-0 w-full h-[60vh] hover:scale-105 ease-linear duration-1000 ${toggle?"mix-blend-color-dodge":""}`}>
              <img
                src={item.img}
                alt={item.alt}
                className="object-cover w-full h-full rounded-md"
              />
            </div>
          ))}
        </div>
      </section>
<OfferZone addToCart={addToCart}/>
      <Footer/>

     
    </div>
  );
};

export default Home;
