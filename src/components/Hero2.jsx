// src/components/TextToVideoSection.jsx
import {Element} from "react-scroll"
import { useNavigate } from "react-router-dom";

const TextToVideoSection = () => {
  const nav = useNavigate()
  const clickShop =()=>{
    nav("/shop")
  }
  return (
    <Element name="product-section">
        <div className="mt-[30px] border-white shadow-sm bg-[#1F2937] p-8 flex flex-col md:flex-row items-center text-white">
      <div className="md:w-1/2">
        <h1 className="text-4xl font-bold mb-4">The easiest way to buy your favorite anime Sticker , Figure , Sneaker ....</h1>
        <p className="mb-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam deleniti distinctio odit qui, inventore unde adipisci architecto ex placeat culpa fugit nulla magnam aspernatur eveniet mollitia facilis ipsum dolore repellat!</p>
        <button onClick={clickShop} className="bg-yellow-400 hover:bg-yellow-500 text-black font-font font-bold px-6 py-2 rounded">Shop Now</button>
        <p className="mt-2 text-sm">Free Delivery ordering 200$ up </p>
      </div>
      <div className="md:w-1/2 mt-6 md:mt-0 md:ml-8">
        <img src="https://www.shutterstock.com/image-photo/selangormalaysia2102022-assorted-figures-anime-action-600nw-2209091783.jpg" alt="People collaborating" className="h-full object-cover rounded" />
      </div>
    </div>
    </Element>
    
  );
}

export default TextToVideoSection;
