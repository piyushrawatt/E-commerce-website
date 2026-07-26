import React from 'react'
import Navbar from './Navbar'
import FeaturedProduct from './FeaturedProduct'
import Product from './Product'
import Footer from './footer'
import Category from './Category'
import Newarrival from './Newarrival'
import Admin from '../pages/Admin'
import { FaLaptop, FaHeadphones, FaMobileAlt,FaGift} from "react-icons/fa";
import { MdToys } from "react-icons/md";
import { GiClothes } from "react-icons/gi";
function Hero() {
  return (
    <div className='bg-gray-900 from-purple-700 to-violet-500' >
        <Navbar />
      <div className='flex items-center  justify-center pt-50 '> <img className=' rounded-4xl shadow-2xl w-300 h-120' src="hero.png" alt="" />
 </div>  
<div className='bg-gray-900 from-purple-700 to-violet-500 p-10 mt-20 rounded-2xl '>
 <div className='flex justify-evenly '>
  
 <FeaturedProduct/>
</div>
</div>
<div className=" bg-gray-900 rounded-2xl shadow-2xl   pt-5 pb-5 mt-20">
<div className='m-10 mt-2 rounded-2xl flex items-center justify-center border-2 border-yellow-400 bg-white pt-5 pb-5 '>
      <p className="text-center mb-12">
        <span className="text-gray-800 text-4xl md:text-5xl font-bold font-mono">
          Shop By
        </span>

        <span className="text-yellow-400 text-8xl md:text-6xl font-bold font-mono ml-3">
          Category
        </span>
      </p>

      <div
        className="
        grid
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        gap-8
        px-8
        "
      >
        <Category
          icon={<FaMobileAlt />}
          title="Smart Phones"
        />

        <Category
          icon={<FaLaptop />}
          title="Laptops"
        />

        <Category
          icon={<FaHeadphones />}
          title="Audio"
        />

        <Category
          icon={<FaGift />}
          title="Gifts"
        />

        <Category
          icon={<MdToys />}
          title="Toys"
        />

        <Category
          icon={<GiClothes />}
          title="Clothes"
        />
      </div>
      </div>
    </div>
<div className=' mt-20 bg-gray-950'>
<h1 className=' font-bold text-2xl text-white pt-3   font-mono pl-5 '>New <span className='text-yellow-400  text-3xl'>Arrival</span></h1>
<div className="flex justify-evenly mt-7 mb-10">
  
<Newarrival/>

</div>
</div>
<section className="py-20 bg-gray-100">
  <h2 className="text-4xl font-bold text-center mb-12">
    Why Choose Us
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-10">

    <div className="bg-white p-6 rounded-2xl shadow text-center">
      <div className="text-5xl mb-4">🚚</div>
      <h3 className="text-xl font-semibold">Free Shipping</h3>
      <p className="text-gray-500 mt-2">
        Fast delivery on all orders.
      </p>
    </div>

    <div className="bg-white p-6 rounded-2xl shadow text-center">
      <div className="text-5xl mb-4">🔒</div>
      <h3 className="text-xl font-semibold">Secure Payment</h3>
      <p className="text-gray-500 mt-2">
        Safe and trusted checkout.
      </p>
    </div>

    <div className="bg-white p-6 rounded-2xl shadow text-center">
      <div className="text-5xl mb-4">↩️</div>
      <h3 className="text-xl font-semibold">Easy Returns</h3>
      <p className="text-gray-500 mt-2">
        Hassle-free return policy.
      </p>
    </div>

    <div className="bg-white p-6 rounded-2xl shadow text-center">
      <div className="text-5xl mb-4">⭐</div>
      <h3 className="text-xl font-semibold">Premium Quality</h3>
      <p className="text-gray-500 mt-2">
        Carefully selected products.
      </p>
    </div>

  </div>
</section>
{/* <Admin/> */}
<Footer/>

  </div> 
  )
}

export default Hero