import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="mt-[40px] lg:mt-[10px] bg-[#1F2937] text-gray-300 py-10 px-4 md:px-20">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="lg:w-1/2 flex flex-col items-center lg:items-start">
          <p className="text-center lg:text-left mb-8 lg:mb-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            ullam, libero consequatur id minus rerum, nemo iste accusamus
            corporis repellat beatae cumque excepturi hic recusandae iure quas
            dolor itaque sequi! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Eum ipsum ullam dolorem cupiditate distinctio
            corporis sapiente, accusantium voluptates officia enim sequi nisi
            numquam dolor maiores veniam, nulla tempore aspernatur eius!
          </p>
          <div className="flex lg:flex-row flex-col space-y-4 lg:space-y-0 lg:space-x-4 mt-4">
            <Link to="/shop" className="button button-shop">
              <span>Shop</span>
            </Link>
            <Link to="/about" className="button button-about">
              <span>About</span>
            </Link>
            <Link to="/contact" className="button button-contact">
              <span>Contact</span>
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center lg:justify-center">
          <div className="w-48 h-48 overflow-hidden bg-gray-800 flex items-center justify-center">
            <img
              src="https://hianime.to/images/discussion.png" // replace with actual image path
              alt="Recycle"
              className="object-cover h-full w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
