import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './footer'
function Navbar() {
  return (
    <div className='fixed top-0 left-0 z-50 bg-white w-full pr-5  rounded-b-2xl shadow-md '>
    <div className='flex justify-between text-center  items-center  '>
        <div ><img className='h-20 w-50 rounded-full' src="herosec.png" alt="img" /></div>
        <div className='  flex gap-10 ml-20'>
            <a className='text-2xl  font-mono text-blue-950 hover:-translate-y-1' href="">Home</a>
            <a className='text-2xl font-mono text-blue-950 hover:-translate-y-1'  href="">categories</a>
            <a className='text-2xl font-mono text-blue-950 hover:-translate-y-1'  href="">about</a>
            <a className='text-2xl font-mono text-blue-950 hover:-translate-y-1'  href="#footer">contact</a>
        </div>
        <div className='flex gap-15 pr-4 items-center'>
            <input className='border font-bold border-2 rounded-2xl placeholder:pl-2 h-7 hover:scale-110 ' type="search" name="search" id="search" placeholder='search...' />
           <Link to="/cart" className='text-2xl font-mono text-blue-950 hover:-translate-y-1' >
  Cart
</Link>
            <a href="" className='text-2xl font-mono text-blue-950 hover:-translate-y-1' >profile</a>
          
        </div>

    </div>
    
    </div>
  )
}

export default Navbar