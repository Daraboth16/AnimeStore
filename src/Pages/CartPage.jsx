import NavBar from "../Navbar/Navbar";
import Cart from "../Cart/Cart";
function CartPage() {
  return (
    <div className="bg-[#0F172A] h-full">
      <NavBar />
      <div className="mt-[80px] lg:mt-[130px]"></div>
      <Cart />
    </div>
  );
}

export default CartPage;
