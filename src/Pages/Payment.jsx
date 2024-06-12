import React, { useContext } from "react";
import { CartContext } from "../Data/CartContext";
import { useNavigate } from "react-router-dom";
import Footer2 from "../Footer/Footer2";

const Payment = () => {
  const { cartItems } = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const nav = useNavigate();
  const handleBack = () => {
    nav("/cart");
  };

  return (
    <div className="bg-[#0F172A] ">
      <div className="container mx-auto p-4 ">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold mb-4 text-white">Payment Details</h1>
          <div
            onClick={handleBack}
            className="text-white mb-4 mt-3 text-2xl font-font font-bold cursor-pointer italic"
          >
            Back to Shop
          </div>
        </div>

        <div className="bg-[#1E293B] text-white shadow-md border rounded p-4">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <ul className="divide-y divide-gray-300 mb-4">
            {cartItems.map((item, index) => (
              <li key={index} className="py-2 flex justify-between">
                <div className="flex gap-2">
                    <div><img src={item.img} className="w-10 h-10 object-cover" alt="" /></div>
                <span>{item.title}</span>
                </div>
                <span>
                  {item.quantity} x ${item.price} = $
                  {item.quantity * item.price}
                </span>
              </li>
            ))}
          </ul>
          <div className="flex justify-between text-lg font-bold">
            <span>Total Price</span>
            <span>${totalPrice}</span>
          </div>
        </div>
      </div>
      <Footer2/>
    </div>
  );
};

export default Payment;
