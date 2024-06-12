import React from "react";
import img from "../assets/image/file.png";

import { scroller } from "react-scroll";
function ShopHeader() {
  const handleScrollToProducts = () => {
    scroller.scrollTo("product-section", {
      duration: 50,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };
  return (
    <div className="mt-[40px] max-w-[95%] flex justify-between items-center mx-auto bg-[#1F2937] p-4 max-h-[300px]">
      <div className="text-white w-[60%] h-full">
        <div className="text-xl text-white font-font font-bold italic">
          Welcome to Our Anime<span className="text-blue-600">Shop</span>
        </div>
        <p className="mt-[5px] text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, fuga
          maiores? Saepe, vel minima odio iste iure magni officiis, doloremque
          ab tempore ipsam necessitatibus aspernatur! Explicabo eos id vel
          placeat?
        </p>
        <button
        onClick={handleScrollToProducts}
        className="mt-[10px] font-font hover:bg-green-600 hover:duration-105 hover:scale-105 py-2 px-5 bg-green-500 rounded-full">Buy Now</button>
      </div>
      <div className=" w-[29%] h-full">
        <img src={img} className="h-[200px] lg:h-[470px] max-w-[100%]" alt="" />
      </div>
    </div>
  );
}

export default ShopHeader;
