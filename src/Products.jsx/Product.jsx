import { useState, useContext } from "react";
import productItem from "../Data/Product";
import { FaEye } from "react-icons/fa";
import { GrFormNext } from "react-icons/gr";
import { IoIosAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { FaCartShopping } from "react-icons/fa6";
import { CartContext } from "../Data/CartContext";
import { toast } from "react-hot-toast";
import "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import "./Product.css";
function Product() {
  const { addToCart } = useContext(CartContext);

  const navigate = useNavigate();
  const [items, setItems] = useState(productItem);

  // add to cart (input)
  const [counters, setCounters] = useState(() =>
    productItem.reduce((acc, product) => {
      acc[product.id] = 1;
      return acc;
    }, {})
  );

  //add product to /cart
  const handleClickAddProduct = (productId) => {
    const product = productItem.find((item) => item.id === productId);
    addToCart(product, counters[productId]);

    // Custom toast notification
    toast.custom((t) => (
      <div
        className={`${
          t.visible ? "animate-enter" : "animate-leave"
        } max-w-xl w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-2 md:p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <img
                className="h-10 w-10 rounded-full"
                src={product.img} // Product image
                alt={product.title}
              />
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-900">
                {product.title} {/* Product title */}
              </p>
              <div className="mt-1 flex text-sm text-gray-500">
                {/* Product details with margin-right */}
                <span className="mr-2">Size: {product.size}</span>
                <span className="mr-2">Price: ${product.price}</span>
                <span>Quantity: {counters[productId]}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex border-l border-gray-200">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="w-full border border-transparent rounded-none rounded-r-lg p-2 md:p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Close
          </button>
        </div>
      </div>
    ));
  };

  //+ product input
  const incrementCounter = (productId) => {
    setCounters((prevCounters) => ({
      ...prevCounters,
      [productId]: prevCounters[productId] + 1,
    }));
  };

  //- product input
  const decrementCounter = (productId) => {
    setCounters((prevCounters) => ({
      ...prevCounters,
      [productId]: Math.max(prevCounters[productId] - 1, 1),
    }));
  };

  // click : active + filter display
  const [activeButton, setActiveButton] = useState(0);
  const handleClick = (index, typeOfItem) => {
    setActiveButton(index);
    if (typeOfItem === "all") {
      setItems(productItem);
    } else {
      filterItems(typeOfItem);
    }
  };
  //filter item by type
  const filterItems = (typeOfItem) => {
    const filteredItems = productItem.filter(
      (item) => item.type === typeOfItem
    );
    setItems(filteredItems);
  };
  //tag click
  const handleTagClick = (tag) => {
    const filteredProducts = productItem.filter((product) =>
      product.tags.includes(tag)
    );
    navigate("/tagsDetail", { state: { filteredProducts } });
  };

  //FaEyeIcon click so product detail
  const [selectedProduct, setSelectedProduct] = useState(null);
  const handleImageClick = (product) => {
    setSelectedProduct(product);
  };
  // Close product detail
  const closeModal = () => {
    setSelectedProduct(null);
  };

  // see more product
  const toggleShowAllProducts = () => {
    setShowAllProducts((prevShowAll) => !prevShowAll);
  };
  // 15 products show only
  const [showAllProducts, setShowAllProducts] = useState(false);
  const displayedItems = showAllProducts ? items : items.slice(0, 15);

  return (
     <div id="product-section">
       <div className="max-w-[95%] mx-auto relative">
        {/* Trending Button Filter */}
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
            onClick={() => handleClick(5, "sticker")}
            className={`px-3 py-2 rounded-sm ${
              activeButton === 5
                ? "bg-blue-500 text-white"
                : "bg-white text-gray-600"
            }`}
          >
            Stickers
          </button>
        </div>
        {/* Display Products */}
        <div className="mt-5 grid font-font gap-x-5 gap-y-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {displayedItems.map((product) => (
            <div key={product.id} className="h-[460px] border relative">
              <div className="bg-black h-[60%]">
                <img
                  className="w-full h-full object-cover"
                  src={product.img}
                  alt={product.title}
                />
              </div>
              <div className="flex justify-between px-2 mt-3 lg:text-xl text-white font-font font-semibold">
                {product.title}
                <FaEye
                  size={24}
                  onClick={() => handleImageClick(product)}
                  className="cursor-pointer hover:text-yellow-300"
                />
              </div>
              <div className="mt-1 flex gap-2">
                <div className="px-2 text-white">
                  Rate : <span className="text-yellow-300">{product.rate}</span>
                </div>
                <div className="px-2 text-gray-400">
                  ({product.review} reviews)
                </div>
              </div>
              <p className="px-2 text-[17px] text-white">
                Size : {product.size}
              </p>
              <div className="px-2 flex justify-between gap-3">
                <div className="py-1 lg:text-xl italic text-[#FE0000] font-font font-semibold">
                  $ {product.price}
                </div>
                <Button
                  variant="success" 
                  onClick={() => handleClickAddProduct(product.id)}
                >
                  <div className="flex w-[100px] md:[150px] lg:w-auto justify-center items-center">
                    <FaCartShopping className="mr-[5px]" />
                    <span className="text-[13px] lg:text-[16px]">Add to card</span>
                  </div>
                </Button>
              </div>
            </div>
          ))}
        </div>
        {/* View more products  */}
        <button
          onClick={toggleShowAllProducts}
          className="text-white hover:text-yellow-400 mx-auto flex items-center mt-4 text-2xl font-font"
        >
          <p className="mt-3">{showAllProducts ? "Show Less" : "View More"}</p>
          <GrFormNext size={33} />
        </button>
        {/* EyeIcon Display Product Detail */}
        {selectedProduct && (
          <div className="fixed inset-0 lg:mt-[90px] flex items-center justify-center bg-none bg-opacity-50 z-1050">
            <div className="bg-[#0F172A] flex md:w-[70%] lg:w-[50%] md:h-[400px] lg:h-[500px] rounded-md px-[20px] md:px-[20px] lg:px-[50px] md:py-2 lg:py-4">
              {/* img side */}
              <div className="w-[55%] h-[100%] ">
                <div className="h-[10%]"></div>
                <div className="w-full h-[75%]">
                  <img
                    className="w-full h-full object-cover"
                    src={selectedProduct.img}
                    alt=""
                  />
                </div>
                <div className="w-full mt-3 h-[10%] gap-2">
                  <div className="flex flex-wrap gap-2">
                    <p className="text-[20px] text-white italic">Tags:</p>
                    {selectedProduct.tagDisplay.map((tag, index) => (
                      <span
                        key={index}
                        onClick={() => handleTagClick(tag)}
                        className="text-[20px] ml-1 hover:underline hover:cursor-pointer text-gray-400 italic"
                      >
                        {tag},
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* title side  */}
              <div className="w-[45%] h-[100%] lg:flex lg:flex-col lg:justify-between">
                <div
              
                  className=" h-[10%] flex justify-end ">
                  <div className="hover:bg-red-700 px-2"
                   onClick={closeModal}>
                  <IoMdClose
                    
                    className="   hover:cursor-pointer text-white"
                    size={45}
                   
                  />
                  </div>
                </div>
                <div className="w-full h-[95%] ml-3 flex flex-col gap-2 font-font">
                  <div className="text-center md:mt-5 lg:mt-[70px] text-3xl text-white font-bold">
                    {selectedProduct.title}
                  </div>
                  <div className="text-[17px] text-gray-300">
                    ID : {selectedProduct.id}
                  </div>
                  <div className="text-[17px] text-gray-300">
                    Rate : {selectedProduct.rate}
                  </div>
                  <div className="text-[17px] text-gray-300">
                    Reviews :{" "}
                    <span className="italic">{selectedProduct.review}</span>
                  </div>
                  <div className="text-[17px] text-gray-300">
                    Size :{" "}
                    <span className="italic">{selectedProduct.size}</span>
                  </div>
                  <div className="text-[17px] text-gray-300">
                    Price :{" "}
                    <span className="text-red-600 font-bold">
                      {selectedProduct.price * counters[selectedProduct.id]}$
                    </span>
                  </div>
                  <div>
                    <div className="flex">
                      <button
                        onClick={() => decrementCounter(selectedProduct.id)}
                        className="px-4 shadow text-2xl font-bold py-2 bg-[#373646] text-white hover:bg-black hover:bg-opacity-65 bg-opacity-50 hover:text-black rounded"
                      >
                        <IoMdRemove />
                      </button>
                      <input
                        type="text"
                        className="text-center max-w-[70px] text-gray-500"
                        value={counters[selectedProduct.id]}
                        readOnly
                      />
                      <button
                        onClick={() => incrementCounter(selectedProduct.id)}
                        className="px-4 shadow text-xl font-bold py-2 bg-[#373646] text-white hover:bg-black hover:bg-opacity-65 bg-opacity-50 hover:text-black rounded"
                      >
                        <IoIosAdd />
                      </button>
                    </div>
                  </div>
                  <div className="flex mt-4">
                    <div className="w-[60%]">
                      <Button
                        variant="success"
                        onClick={() =>
                          handleClickAddProduct(selectedProduct.id)
                        }
                      >
                        <div className="flex w-[150px] md:[150px] lg:w-auto justify-center items-center">
                          <FaCartShopping className="mr-[9px]" />
                          <span>Add to cart</span>
                        </div>
                      </Button>
                    </div>
                    <div className="w-[40%]"></div>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        )}
      </div>
     </div>
      
  );
}

export default Product;
