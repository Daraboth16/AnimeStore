import { CartContext } from "../Data/CartContext";
import { IoIosAdd, IoMdRemove } from "react-icons/io";
import { useContext, useState } from "react";
import Footer from "../Footer/Footer2";
import { MdOutlineSummarize } from "react-icons/md";
import {
  FaCcAmazonPay,
  FaCcApplePay,
  FaCcMastercard,
  FaCcPaypal,
  FaCcVisa,
  FaPlane,
  FaTimes,
  FaTruck,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const { cartItems, updateQuantity, removeFromCart, cartCount ,clearCart } =
    useContext(CartContext);

  const handleIncrement = (productId) => {
    updateQuantity(
      productId,
      cartItems.find((item) => item.id === productId).quantity + 1
    );
  };
  const handlePayment = ()=>{
    nav("/payment")
  }
  const handleDecrement = (productId) => {
    const currentQuantity = cartItems.find(
      (item) => item.id === productId
    ).quantity;
    if (currentQuantity > 1) {
      updateQuantity(productId, currentQuantity - 1);
    } else {
      removeFromCart(productId);
    }
  };

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };
  const nav = useNavigate();
  const clickHome = () => {
    nav("/shop");
  };
 
  return (
    <div>
      <div className="flex justify-between h-full w-full">
        <div className="w-full lg:w-[80%] bg-[#0F172A]">
          <div className="max-w-[95%] mx-auto h-[10%] lg:py-3">
            <div className="mt-[20px] lg:mt-0 flex justify-between">
              <div className="text-xl lg:py-2 text-white font-font font-bold">
                Shopping Cart
              </div>
              <button
                onClick={clearCart}
                className="bg-red-600 hover:bg-red-800  text-white py-1 px-2 lg:px-4 rounded-lg font-font italic font-bold"
              >
                Clear All Carts
              </button>
              <div className="text-xl lg:py-2 text-white font-font font-bold flex gap-4 items-center">
                {cartCount} items
                <MdOutlineSummarize
                  className="lg:hidden cursor-pointer"
                  size={25}
                  onClick={togglePopup}
                />
              </div>
            </div>
            {/* bar */}
            <div className="mt-[10px] max-w-[99%] mx-auto h-[2px] bg-gray-400 bg-opacity-55"></div>
            {/* display label */}
            <div className="mt-[10px] font-font font-bold text-[15px] gap-3 flex max-w-[99%] mx-auto">
              <div className="w-[25%] text-[12px] lg:text-[13px] text-gray-400">
                PRODUCT DETAILS
              </div>
              <div className="w-[75%] flex justify-between text-white">
                <div className="text-gray-400 text-[12px] lg:text-[13px]">
                  QUANTITY
                </div>
                <div className="text-gray-400 text-[12px] lg:text-[13px] ml-[70px] lg:ml-[160px]">
                  PRICE
                </div>
                <div className="text-gray-400 text-[12px] lg:text-[13px]">
                  TOTAL
                </div>
              </div>
            </div>

            {/* display items */}
            <div>
              {cartItems.map((item) => (
                <div key={item.id}>
                  <div className="mt-[10px] lg:mt-[20px] font-font font-bold text-[15px] flex max-w-[99%] mx-auto h-[90%]">
                    <div className="w-[20%] text-gray-400">
                      <img
                        src={item.img}
                        className="w-20 h-20 object-cover"
                        alt={item.title}
                      />
                    </div>
                    <div className="w-[80%] flex justify-between text-white items-center">
                      <div className="text-gray-400 lg:flex items-center">
                        <button
                          onClick={() => handleDecrement(item.id)}
                          className="px-4 shadow text-xl font-bold py-2 bg-[#373646] text-white hover:bg-black hover:bg-opacity-65 bg-opacity-50 hover:text-black rounded"
                        >
                          <IoMdRemove />
                        </button>
                        <input
                          value={item.quantity}
                          readOnly
                          type="text"
                          className="text-center max-w-[40px] text-gray-500 mx-2"
                        />

                        <button
                          onClick={() => handleIncrement(item.id)}
                          className="px-4 shadow text-xl font-bold py-2 bg-[#373646] text-white hover:bg-black hover:bg-opacity-65 bg-opacity-50 hover:text-black rounded"
                        >
                          <IoIosAdd />
                        </button>
                        <div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="ml-[42px] mt-[10px] lg:mt-0 lg:ml-3 px-4 shadow text-[13px] font-bold py-2 bg-red-600 text-white hover:bg-red-800 rounded"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                      <div className="text-white italic">${item.price}</div>
                      <div className="text-white italic">
                        ${item.price * item.quantity}
                      </div>
                    </div>
                  </div>
                  <div
                    className="mt-2 text-[15px] text-white font-font"
                  >
                    {item.title}
                  </div>
                  <div className="mt-[10px] max-w-[99%] mx-auto h-[2px] bg-gray-400 bg-opacity-55"></div>
                
                </div>
              ))}
               <div
                    onClick={clickHome}
                    className=" mt-5 text-[18px] text-white cursor-pointer"
                  >
                    Back to Shopping
                  </div>
            </div>
          </div>
        </div>

        <div className="hidden rounded mr-3  text-white lg:block w-[20%] font-font mt-4">
          <div className="bg-[#1F2937] p-4 rounded">
            <h2 className="text-3xl  font-bold mb-4 mt-3">Order Summary</h2>
            <div className="flex justify-between text-[20px]">
              <span>Name</span>
              <span>Quantity</span>
            </div>
            <div className="mt-[10px] max-w-[99%] mx-auto h-[2px] bg-gray-400 bg-opacity-55 mb-2"></div>
            {cartItems.map((item, index) => (
              <div key={index} className="flex justify-between mb-3">
                <span>{item.title}</span>
                <span>*{item.quantity}</span>
              </div>
            ))}
            <div className="mt-[10px] max-w-[99%] mx-auto h-[2px] bg-gray-400 bg-opacity-55 mb-2"></div>
            <div className="flex justify-between">
              <span>Total Items</span>
              <span>
                {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
              </span>
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-[20px] font-bold">Total Price</span>
              <span className="text-[20px] font-bold">
                $
                {cartItems.reduce(
                  (acc, item) => acc + item.price * item.quantity,
                  0
                )}
              </span>
            </div>
            <button 
            onClick={handlePayment}
            className="px-4 py-2 w-full rounded bg-green-500 hover:bg-green-600 mt-3 font-font font-bold">
              Buy Now
            </button>
            <div className="flex justify-center gap-2 items-center mt-4">
              <FaTruck size={25} />
              <FaPlane size={25} />
              <FaCcAmazonPay size={30} />
              <FaCcApplePay size={30} />
              <FaCcVisa size={30} />
              <FaCcMastercard size={30} />
              <FaCcPaypal size={30} />
            </div>
            <span className="text-[12px] flex justify-center text-gray-400">
              Free Shopping and Free Return
            </span>
          </div>

          {/*  */}
        </div>
      </div>
      {isPopupVisible && (
        <div className="mt-[20px] fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-[#0F172A] text-white p-6 rounded-lg w-[80%] lg:w-[60%] relative">
            <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
            <div
              className="overflow-y-auto max-h-[400px] border border-gray-300 rounded p-4"
              style={{ maxHeight: "300px" }}
            >
              <ul className="divide-y divide-gray-300">
                {cartItems.map((item, index) => (
                  <li key={index} className="py-2">
                    <div className="flex justify-between items-center">
                      <span>{item.title}</span>
                      <span>*{item.quantity}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-4">
              <div className="flex justify-between">
                <span>Total Items</span>
                <span>
                  {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
                </span>
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-lg font-bold">Total Price</span>
                <span className="text-lg font-bold">
                  $
                  {cartItems.reduce(
                    (acc, item) => acc + item.price * item.quantity,
                    0
                  )}
                </span>
              </div>
            </div>
            <button className="mt-[5px] px-4 py-2 w-full font-font font-bold rounded text-white bg-green-500 hover:bg-green-600">
              Buy Now
            </button>
            <button
              className="absolute top-4 right-4 text-white bg-red-500 hover:text-red-600 hover:bg-red-500 p-2"
              onClick={togglePopup}
            >
              <FaTimes size={24} />
            </button>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Cart;
