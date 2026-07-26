import React, { useState } from 'react'
import API from '../../API/axios'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
function Login() {
  const navigate = useNavigate()
  const [logindata,setlogindata] = useState({
    email:"",
    password:""
  })
  const [loading ,setloading] = useState(false)
  const [err,seterr] = useState("")
  const showlogindata = async(e)=>{
setlogindata({
  ...logindata,
  [e.target.name]:e.target.value
})
  }
const submitlogin = async (e) => {
  e.preventDefault();

  if (!logindata.email || !logindata.password) {
    return alert("All fields are required");
  }

  try {
    setloading(true);

    const req = await API.post("/api/auth/login", {
      email: logindata.email,
      password: logindata.password,
    });

    console.log(req.data);

    // ✅ Save only the access token
    localStorage.setItem("token", req.data.accessToken);

    console.log("Stored Token:", localStorage.getItem("token"));

    alert("Login Successfully");

    navigate("/main");

  } catch (err) {
    seterr(err.response?.data?.message || "Login failed");
  } finally {
    setloading(false);
  }
};

  
  return (
    <div className='w-full h-screen flex items-center justify-center  bg-amber-900'>
     
      <div className='flex   flex-col  w-100 rounded-2xl border items-center bg-white'>

     <div className='flex flex-col items-center mt-3 text-center'>  
        <img className='h-20 w-fit rounded-full' 
        src="herosec.png"
         alt="" />
        {/* <p className='text-2xl'>Shop <span className=' text-amber-600 font-bold'>Ease</span></p> */}
        <p className='font-extralight text-xl text-gray-500'>shop more worry less</p>
        <h1 className='pt-5 text-2xl font-bold tracking-wide'>Welcome Back</h1>
        <p className='text-gray-500 font-light'>login to your account</p>
        </div> 
        <form onSubmit={submitlogin}  className='flex flex-col  p-5 w-full'>
         {err && (
            <p className="text-red-500 text-center text-sm font-semibold">{err}</p>
          )}
            <label className='pl-4 '  htmlFor="">Email address</label>
            <input name='email' onChange={showlogindata} value={logindata.email} className='h-10 p-2 rounded-2xl border placeholder:p-5  ' placeholder='Enter your email password' type="text" />
            <label  className='pl-4 pt-4' htmlFor="">Password</label>
          <input  name='password'  onChange={showlogindata} value={logindata.password} className='h-10 p-2 rounded-2xl border placeholder:p-5  ' placeholder='Enter your email password' type="password" />
         <div className='flex justify-between p-3'> <div><input type="checkbox" name="" id="info" /> <label htmlFor="" id='info'>Remember me</label> </div>  <a href="#">forget pass</a></div>  
        <button type='submit' disabled={loading} className='text-center border rounded-2xl bg-amber-500 h-10 m-3'>{loading? "logining":"login"}</button>
        </form>
        <div className='text-gray-400  text-center'>---------------- <span className='text-2xl'>or</span>------------------</div>
        <div>ff</div>
        <div>fff</div>
        <p>dont have account? <a href="">Signup</a></p>
      </div>
    </div>
  )
}

export default Login