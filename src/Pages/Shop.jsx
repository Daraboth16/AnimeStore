
import  NavBar from "../Navbar/Navbar"
import Product from '../Products.jsx/Product.jsx'
import Footer2 from '../Footer/Footer2.jsx'
import ShopHeader from '../components/ShopHeader.jsx'

function Shop() {
  return (
    <div className='bg-[#0F172A]'>
       <NavBar/>
       <ShopHeader/>
       <Product/>
       <Footer2/>
    </div>
  )
}

export default Shop