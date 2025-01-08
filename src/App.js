import React, { useState, useEffect } from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/pages/Navbar";
import Slidebar from "./Components/pages/Slidebar";
import Home from "./Components/pages/Home";
import Mobile from "./Components/Categories/Mobiles";
import Cloths from "./Components/Categories/Cloths";
import About from "./Components/pages/About";
import Contact from "./Components/pages/Contact";
import Carts from "./Components/pages/Cart";
import Laptop from "./Components/Categories/Laptop";
import Speaker from "./Components/pages/Speakers";
import Book from "./Components/pages/Book";
import HomeKitchen from "./Components/Categories/Kitchan";
import OfferZone from "./Components/Categories/Offerzone";
import Login from "./Components/pages/Login";
import Register from "./Components/pages/Register";

function App() {
  const [toggle, setToggle] = useState(false);
  const [changeIcon, setChengeIcon] = useState(false);
  const [cart, setCart] = useState([]);

  // Persist cart items in localStorage
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    if (savedCart) {
      setCart(savedCart);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.name === item.name);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const updateCart = (name, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.name === name ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (name) => {
    setCart((prevCart) => prevCart.filter((item) => item.name !== name));
  };

  return (
    <Router>
      {/* Navbar Component */}
      <Navbar
        toggle={toggle}
        setToggle={setToggle}
        changeIcon={changeIcon}
        setChengeIcon={setChengeIcon}
        CartCount={cart.reduce((count, item) => count + item.quantity, 0)}
      />

      {/* Sidebar Component */}
      <Slidebar toggle={toggle} setToggle={setToggle} changeIcon={changeIcon} setChengeIcon={setChengeIcon} />

      {/* Routes */}
      <Routes>
        <Route path="/On-shop-shopping-page" element={<Home addToCart={addToCart} toggle={toggle}/>} />
        <Route path="/about" element={<About toggle={toggle}/>} />
        <Route path="/contact" element={<Contact toggle={toggle}/>} />
        <Route path="/login" element={<Login />} toggle={toggle}/>
        <Route path="/register" element={<Register />} toggle={toggle}/>

        <Route path="/mobiles" element={<Mobile addToCart={addToCart} />} />
        <Route path="/laptops" element={<Laptop addToCart={addToCart} />} />
        <Route path="/cloths" element={<Cloths addToCart={addToCart} toggle={toggle}/>} />
        <Route path="/books" element={<Book addToCart={addToCart} toggle={toggle}/>} />
        <Route path="/speakers" element={<Speaker addToCart={addToCart} toggle={toggle}/>} />
        <Route path="/home/kit" element={<HomeKitchen addToCart={addToCart} toggle={toggle}/>} />
        <Route path="/offerzone" element={<OfferZone addToCart={addToCart} />} />

        <Route path="/carts" element={<Carts cart={cart} updateCart={updateCart} removeFromCart={removeFromCart} />} />
      </Routes>
    </Router>
  );
}

export default App;
