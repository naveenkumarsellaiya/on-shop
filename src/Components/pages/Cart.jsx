
  import React from "react";
  import PropTypes from "prop-types";
  
  const Carts = ({ cart, updateCart, removeFromCart }) => {
    const calculateTotal = () => {
      return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };
    const orderme=()=>{
      console.log("Sucessfully add to order page")
      alert(`you product is send to order team`)
    }
  
    return (
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        {cart.length === 0 ? (
          <p className="text-lg">Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-4 border rounded-md"
              >
                <img src={item.image} alt={item.name} className="w-20 h-auto rounded-md" />
                <div className="flex-1 ml-4">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-green-600">₹{item.price.toLocaleString()}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      className="px-2 py-1 bg-gray-300 rounded-md"
                      onClick={() =>
                        updateCart(item.name, Math.max(1, item.quantity - 1))
                      }
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="px-2 py-1 bg-gray-300 rounded-md"
                      onClick={() => updateCart(item.name, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  className="px-4 py-2 bg-red-600 text-white rounded-md"
                  onClick={() => removeFromCart(item.name)}
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="text-right mt-4">
              <h3 className="text-xl font-bold">
                Total: ₹
                {calculateTotal().toLocaleString("en-IN", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </h3>
              <button className="px-6 py-2 mt-2 text-white bg-blue-600 rounded-md" onClick={orderme}>
               Go to Order
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  Carts.propTypes = {
    cart: PropTypes.array.isRequired,
    updateCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired,
  };
  
  export default Carts;
  