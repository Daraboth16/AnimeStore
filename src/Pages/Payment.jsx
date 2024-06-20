import React, { useContext, useState } from "react";
import { CartContext } from "../Data/CartContext";
import { useNavigate } from "react-router-dom";
import Footer2 from "../Footer/Footer2";
import { toast } from "react-hot-toast";

// Custom toast component
const EmptyCartToast = ({ navigate }) => (
  <div>
    <p className="text-white">Your cart is empty. Please go shopping.</p>
    <button
      onClick={() => navigate("/shop")}
      className="bg-blue-600 text-white p-2 rounded mt-2"
    >
      Back to Shopping
    </button>
  </div>
);

const Payment = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvc, setCvc] = useState("");

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/cart");
  };

  const handlePayment = () => {
    if (cartItems.length === 0) {
      toast.custom(<EmptyCartToast navigate={navigate} />);
      return;
    }
    toast.success("Payment successful");
    clearCart();
  };

  return (
    <div className="bg-[#0F172A] min-h-screen flex flex-col justify-between">
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl text-white font-bold">Payment Details</h1>
          <div
            onClick={handleBack}
            className="text-blue-600 cursor-pointer italic"
          >
            Go back to basket
          </div>
        </div>

        <div className="bg-[#0F172A] p-4 shadow-md rounded border">
          <h2 className="text-xl text-white font-bold mb-4">Order Summary</h2>
          <ul className="divide-y text-white divide-gray-400 mb-4">
            {cartItems.map((item, index) => (
              <li key={index} className="py-2 flex justify-between">
                <div className="flex gap-2">
                  <div>
                    <img src={item.img} className="w-10 h-10 object-cover" alt="" />
                  </div>
                  <span>{item.title}</span>
                </div>
                <span>
                  {item.quantity} x ${item.price} = ${item.quantity * item.price}
                </span>
              </li>
            ))}
          </ul>
          <div className="flex justify-between text-white text-lg font-bold">
            <span>Total Price</span>
            <span>${totalPrice}</span>
          </div>
        </div>

        <div className="bg-[#0F172A] text-white p-4 shadow-md rounded mt-4">
          <h2 className="text-xl font-bold mb-4">Credit card</h2>
          <div className="mb-4">
            <label className="block text-white">Card number</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
          </div>
          <div className="flex gap-4 mb-4">
            <div className="w-1/2">
              <label className="block text-gray-100">Expiration date</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={expirationDate}
                onChange={(e) => setExpirationDate(e.target.value)}
              />
            </div>
            <div className="w-1/2">
              <label className="block text-gray-100">CVC</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button
              onClick={handlePayment}
              className="bg-blue-600 text-white p-2 rounded w-full"
            >
              Pay
            </button>
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
};

export default Payment;
