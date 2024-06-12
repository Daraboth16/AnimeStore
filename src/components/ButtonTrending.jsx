
import { useState } from 'react';
import productItem from "../Data/Product";
function ButtonTrending() {
    const [activeButton, setActiveButton] = useState(0);
    const [items, setItems] = useState(productItem);
    const filterItems = (typeOfItem) => {
        const filteredItems = productItem.filter(
          (item) => item.type === typeOfItem
        );
        setItems(filteredItems);
      };
    
      const handleClick = (index, typeOfItem) => {
        setActiveButton(index);
        if (typeOfItem === "all") {
          setItems(productItem);
        } else {
          filterItems(typeOfItem);
        }
      };
  return (
    <div>
        <div className="text-yellow-300 text-2xl italic lg:mt-5 font-font">
        Trending
      </div>
      <div className="mt-2 flex-wrap flex gap-1 font-font">
        <button
          onClick={() => handleClick(0, "all")}
          className={`px-4 py-2 rounded-sm ${
            activeButton === 0
              ? "bg-blue-500 text-white"
              : "bg-white text-gray-600"
          }`}
        >
          All
        </button>
        <button
          onClick={() => handleClick(1, "Figure")}
          className={`px-4 py-2 rounded-sm ${
            activeButton === 1
              ? "bg-blue-500 text-white"
              : "bg-white text-gray-600"
          }`}
        >
          Figure
        </button>
        <button
          onClick={() => handleClick(2, "sneaker")}
          className={`px-4 py-2 rounded-sm ${
            activeButton === 2
              ? "bg-blue-500 text-white"
              : "bg-white text-gray-600"
          }`}
        >
          Sneaker
        </button>
        <button
          onClick={() => handleClick(4, "rings")}
          className={`px-4 py-2 rounded-sm ${
            activeButton === 4
              ? "bg-blue-500 text-white"
              : "bg-white text-gray-600"
          }`}
        >
          Rings
        </button>
        <button
          onClick={() => handleClick(5, "stickers")}
          className={`px-3 py-2 rounded-sm ${
            activeButton === 5
              ? "bg-blue-500 text-white"
              : "bg-white text-gray-600"
          }`}
        >
          Stickers
        </button>
      </div>
    </div>
  )
}

export default ButtonTrending