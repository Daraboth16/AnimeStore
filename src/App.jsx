import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import CartPage from "./Pages/CartPage";
import TagsDetail from "./Pages/tagsDetail";
import About from "./Pages/About";
import CartProvider from "./Data/CartContext";
import 'react-toastify/dist/ReactToastify.css';
import { Toaster } from "react-hot-toast";
import "./index.css"
import Contact from "./Pages/Contact";
import Shop from "./Pages/Shop";
import Login from "./components/Login";
import Profile from "./Modal/Profile";
import ProfilePage from "./Pages/ProfilePage";
import Payment from "./Pages/Payment";
import ScrollToTopButton from "./components/ScrollButton";

function App() {
  return (
    <>
      <div className=" h-full ">
        <CartProvider>
          <Toaster position="top-center" reverseOrder={false}/>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/cart" element={<CartPage />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/shop" element={<Shop/>}></Route>
              <Route path="/tagsDetail" element={<TagsDetail />}></Route>
              <Route path="/contact" element={<Contact/>}></Route>
              <Route path="/login" element={<Login/>}></Route>
              <Route path="/profile" element={<ProfilePage/>}></Route>
              <Route path="/payment" element={<Payment/>}></Route>
            </Routes>
            <ScrollToTopButton/>
          </BrowserRouter>
        </CartProvider>
      </div>
    </>
  );
}

export default App;
