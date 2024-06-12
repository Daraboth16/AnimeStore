import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer2 = () => {
  return (
    <div>
        <div className="mt-[30px] w-full h-[1px] bg-white"></div>;
      <footer className=" bg-[#0F172A] text-white py-10 px-4 md:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start">
            <div className="mb-8 lg:mb-0 lg:w-1/4 flex flex-col items-center lg:items-start">
              <div className="flex items-center mb-4">
                <img
                  src="https://www.pngall.com/wp-content/uploads/13/Anime-Logo-PNG-HD-Image.png"
                  alt="Logo"
                  className="w-16 h-16"
                />{" "}
                {/* Replace with actual logo path */}
              </div>
              <p className="text-center lg:text-left">
                Start a business and design the life you want – all in one
                place.
              </p>
              <div className="flex space-x-4 mt-4">
                <Link to="#" className="social-icon">
                  <img
                    src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/youtube-icon.png"
                    alt="YouTube"
                  />{" "}
                  {/* Replace with actual icon path */}
                </Link>
                <Link to="#" className="social-icon">
                  <img
                    src="https://cdn4.iconfinder.com/data/icons/social-media-black-white-2/600/Instagram_glyph_svg-512.png"
                    alt="Instagram"
                  />{" "}
                  {/* Replace with actual icon path */}
                </Link>
                <Link to="#" className="social-icon">
                  <img
                    src="https://cdn4.iconfinder.com/data/icons/social-media-flat-7/64/Social-media_Tiktok-512.png"
                    alt="TikTok"
                  />{" "}
                  {/* Replace with actual icon path */}
                </Link>
                <Link to="#" className="social-icon">
                  <img
                    src="https://cdn3.iconfinder.com/data/icons/picons-social/57/06-facebook-512.png"
                    alt="Facebook"
                  />{" "}
                  {/* Replace with actual icon path */}
                </Link>
                <Link to="#" className="social-icon">
                  <img
                    src="https://www.iconpacks.net/icons/2/free-twitter-logo-icon-2429-thumb.png"
                    alt="Twitter"
                  />{" "}
                  {/* Replace with actual icon path */}
                </Link>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-20">
              <div>
                <h3 className="font-bold mb-4">BUILD YOUR BUSINESS</h3>
                <ul>
                  <li className="mb-2">
                    <Link to="#">Business ideas</Link>
                  </li>
                  <li className="mb-2">
                    <Link to="#">Case studies</Link>
                  </li>
                  <li className="mb-2">
                    <Link to="#">Design and branding</Link>
                  </li>
                  <li className="mb-2">
                    <Link to="#">Dropshipping</Link>
                  </li>
                  <li className="mb-2">
                    <Link to="#">Marketing</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">STORIES</h3>
                <ul>
                  <li className="mb-2">
                    <Link to="#">A day in my life</Link>
                  </li>
                  <li className="mb-2">
                    <Link to="#">My first 90 days</Link>
                  </li>
                  <li className="mb-2">
                    <Link to="#">Raise the bar</Link>
                  </li>
                  <li className="mb-2">
                    <Link to="#">Starter stories</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">YOUR LIFE</h3>
                <ul>
                  <li className="mb-2">
                    <Link to="#">Mindset</Link>
                  </li>
                  <li className="mb-2">
                    <Link to="#">Money</Link>
                  </li>
                  <li className="mb-2">
                    <Link to="#">Productivity</Link>
                  </li>
                  <li className="mb-2">
                    <Link to="#">Wellbeing</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">FREE BUSINESS TOOLS</h3>
                <ul>
                  <li className="mb-2">
                    <Link to="#">Business Name Generator</Link>
                  </li>
                  <li className="mb-2">
                    <Link to="#">Slogan Generator</Link>
                  </li>
                  <li className="mb-2">
                    <Link to="#">Traffic Calculator</Link>
                  </li>
                  <li className="mb-2">
                    <Link to="#">Profit Margin Calculator</Link>
                  </li>
                  <li className="mb-2">
                    <Link to="#">Buy a ready-made store</Link>
                  </li>
                  <li className="mb-2">
                    <Link to="#">Website Builder</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center mt-8">
            <div className="text-sm">
              © 2023-2024 Both | <Link to="#">Hiro</Link> |{" "}
              <Link to="#">Anime Shop</Link>
            </div>
          
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer2;
