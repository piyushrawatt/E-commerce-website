import React, { useState } from 'react'
import API from '../../API/axios.js'
import { useNavigate } from 'react-router-dom'
function Signup() {
  const navigate = useNavigate()
    const [data ,setdata] = useState({
        fullname : "",
        email : "",
        password : "",
       confirmpass:""
    })
    const [loading,setloading] = useState(false)
    const [err,seterr] = useState("")
    const showdata = async(e)=>{
setdata({
    ...data,
    [e.target.name]:e.target.value
})

}
    const handlesubmit  = async(e)=>{
        e.preventDefault()
        if(!data.fullname || !data.email || !data.password || !data.confirmpass){
         return alert("please fill all the field")
        }
        if(data.password !=data.confirmpass){
        return    alert("pass is incorrect")
        }
        try{
        setloading(true)
        seterr("")
const req = await API.post("/api/auth/signup",{
  name : data.fullname,
  email :data.email,
  password :data.password
})
 alert("account created successfully")
 navigate("/main")
        }
        catch(err){
   console.log(err.response?.data);
  console.log(err.response?.status);
 seterr(err.response.data.message || "Signup failed");
        }
     finally{
      setloading(false)
     }
       
    }
  return (
   <div className="min-h-screen flex justify-center items-center bg-gray-600">
  <div className="w-[500px] bg-white rounded-3xl p-6">
    
   
    <div className="flex flex-col items-center mb-6">
      <img
        className="h-20 w-fit rounded-full"
        src="herosec.png"
        alt=""
      />
{/* 
      <p className="text-2xl font-bold">
        Shop <span className="text-orange-500">Ease</span>
      </p> */}

      <p className="text-gray-500">Shop more, worry less</p>

      <h1 className="text-3xl font-bold mt-4">
        Create Account
      </h1>
 {err && (
            <p className="text-red-500 text-center text-sm font-semibold">{err}</p>
          )}
      <p className="text-gray-500">
        Sign up to get started
      </p>
    </div>

    {/* Form */}
    <form
      onSubmit={handlesubmit}
      className="flex flex-col gap-4"
    >
      <input
        name="fullname"
        value={data.fullname}
        onChange={showdata}
        placeholder="Enter your name"
        className="border p-3 rounded-xl"
      />

      <input
        name="email"
         value={data.email}
        onChange={showdata}
        placeholder="Enter your email"
        className="border p-3 rounded-xl"
      />

      <input
        name="password"
         value={data.password}
        onChange={showdata}
        placeholder="Create a password"
        className="border p-3 rounded-xl"
      />

      <input
        name="confirmpass"
         value={data.confirmpass}
        onChange={showdata}
        placeholder="Confirm your password"
        className="border p-3 rounded-xl"
      />

      <div className="flex items-center gap-2">
        <input type="checkbox" />
        <p className="text-sm">
          I agree to Terms & Conditions
        </p>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="bg-orange-500 text-white py-3 rounded-xl active:bg-amber-500"
      >
       {loading ? "Creating..." : "Sign Up"}
      </button>
    </form>

  </div>
</div>
  )
}

export default Signup
