import React from 'react'
import { Link } from 'react-router-dom'
function Newarrival({img,title}) {
  const newarrival = [{
    id : 1,
    title:"Remote control car",
    image:"https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/ralleyz/492910344/1/9dOcWqj3lgt-492910344-2_1721.webp"
  },
{
  id:2,
      title:"Football jersey",
  image:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSsk8IIAlGFZyCE-4g1EZKTKx7noP5Y7HYC-4VOfMM69uw5Ty4efKTKrQM6OXvDg22qinf8SCzS3lBAn_mmjh9GQQkHaNo4FmhqU2GsFzfLq5Fshn-WYrD7XQ"
},
{
  id:3,
      title:"Bed",
  image:"https://rukminim2.flixcart.com/image/612/612/xif0q/bed-mattress/j/z/7/normal-top-queen-8-64-78-shapesense-orthopedic-classic-memory-original-imahkgawkk4d7drh.jpeg?q=70"
},
{
  id:4,
      title:"Earbuds",
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNrskW64wSSBpwwUYx2_wtX-N4X0ceUIjCpJoXOWG3HQ&s=10"
},]
  return (
    <div>
     

      <div className="flex flex-wrap gap-35 justify-center">
       {newarrival.map((item)=>(
 <div
         key={item.id}   
            className="border rounded-xl bg-blue-950 p-3 w-64 text-center"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-50 w-full   object-center   rounded-2xl"
            />

            <h2 className="mt-2 text-white font-bold font-mono">{item.title}</h2>

           
             
          </div>
       ))}
         
        
      </div>

      <div className="text-center mt-10">
        <Link to="/product">
          <button className="bg-black text-white px-6 py-3 rounded-lg mb-5">
            View All Products
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Newarrival