import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Nav } from '../HomeComponents/Navbar';
import { Footer } from '../HomeComponents/footer';
import { Trash2, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { removeFromCart, updateQuantity } from '../redux/cartSlice';

const UserCart = () => {
  const cartItems = useSelector(state => state.cart.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleQuantityChange = (id, quantity) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ id, quantity })); 
    }
  };

  const handleCheckout = () => {
    alert('Proceeding to checkout...');
  };

 
  const calculateTotal = () => {
    return cartItems.reduce((acc, crop) => {
      const price = parseInt(crop.excatPrice); 
      const quantity = parseInt(crop.quantity, 10);
      console.log(`Crop ID: ${crop.id}, Price: ${price}, Quantity: ${quantity}`); 
      return acc + (isNaN(price) ? 0 : price) * (isNaN(quantity) ? 0 : quantity);
    }, 0);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <div className="flex-grow">
        <div className="p-6 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-6">Your Cart</h1>
          {cartItems.length === 0 ? (
            <div className="text-center">
              <p className="text-gray-600 mb-4">Your cart is empty.</p>
              <button
                onClick={() => navigate('/')}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
              >
                Back to Shopping
              </button>
            </div>
          ) : (
            <>
              <div className="space-y-4">
                {cartItems.map((crop, index) => (
                  <div key={index} className="bg-white p-4 rounded shadow flex justify-between items-center">
                    <img src={crop.src} alt={`${crop.cropName} image`} className="w-16 h-16 object-cover rounded" />
                    <div className="flex-1 ml-4">
                      <h2 className="text-lg font-semibold">{crop.cropName}</h2>
                      <p>{crop.farmerName}</p>
                      <p>
                        Rs {crop.excatPrice} x {crop.quantity}
                      </p>
                      <div className="flex items-center mt-2">
                        <label htmlFor={`quantity-${crop.id}`} className="mr-2">Quantity:</label>
                        <input
                          type="number"
                          id={`quantity-${crop.id}`}
                          min="1"
                          value={crop.quantity}
                          onChange={(e) => handleQuantityChange(crop.id, parseInt(e.target.value, 10))}
                          className="w-16 p-1 border rounded"
                        />
                      </div>
                      <p className="mt-2 font-semibold">
                        Total: Rs {isNaN(parseFloat(crop.excatPrice) * parseInt(crop.quantity, 10)) ? 0 : (parseFloat(crop.excatPrice) * parseInt(crop.quantity, 10)).toFixed(2)}
                      </p>
                    </div>
                    <button onClick={() => dispatch(removeFromCart({id: item.id}))} className="text-red-500 hover:text-red-700">
                      <Trash2 size={20} />
                    </button>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex justify-between items-center">
                <button
                  onClick={() => navigate(-1)}
                  className="flex items-center text-gray-600 hover:text-gray-800"
                >
                  <ArrowLeft className="mr-2" /> Continue Shopping
                </button>
                <div className="font-bold text-lg">Grand Total: Rs {calculateTotal().toFixed(2)}</div>
                <button
                  onClick={handleCheckout}
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                >
                  Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserCart;
