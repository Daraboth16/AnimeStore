import { useState } from "react";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import heroData from "../Data/Trending";
import { useNavigate } from "react-router-dom";
function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? heroData.length - 1 : prevIndex - 1
    );
  };
  const handleClickShop=()=>{
    navigate("/shop")
  }
const handleClickDetail=()=>{
  navigate("/about")
}
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === heroData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const { image, title, description, id } = heroData[currentIndex];
  return (
    <>
      <div className="max-w-full relative h-[500px] flex">
        <div className="w-0 md:w-[34%] lg:w-[34%] h-full"></div>
        <div className="w-[100%] lg:w-[60%] h-[300px] lg:h-full">
          <img src={image} alt="" className="w-full h-full" />
        </div>
        <div></div>
      </div>
      <div className="absolute max-w-[500px] top-[315px] lg:top-[200px] font-font left-[50px]">
        <h1 className="text-yellow-300 italic text-4xl md:text-5xl lg:text-6xl ">#{id} Trending</h1>
        <h2 className="lg:mt-4  text-white font-semibold">{title}</h2>
        <p className=" lg:mt-2 text-gray-300 italic text-[15px] lg:text-xl line-clamp-2 lg:line-clamp-3">{description}</p>
        <div className="flex gap-2">
              <button onClick={handleClickShop}
               className="px-4 py-2 text-white max-w-[200px] bg-blue-600 rounded">
                Shop Now
              </button>
              <button onClick={handleClickDetail} 
               className="px-4 py-2 text-white max-w-[200px] bg-[#3A3951] rounded">
                Detail
              </button>
            </div>
            <div className="flex gap-3  mt-2 lg:mt-3">
              <button className="px-2 py-2 rounded-md bg-pink-300" onClick={handlePrev} ><MdNavigateBefore size={23}/></button>
              <button className="px-2 py-2 rounded-md bg-pink-300" onClick={handleNext} ><MdNavigateNext   size={23}/></button>
            </div>
      </div>
    </>
  );
}

export default Hero;
