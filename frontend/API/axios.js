import axios from "axios"

const API = axios.create({
    baseURL:"https://e-commerce-website-3-61c1.onrender.com/"
})

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  console.log("TOKEN:", token);

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});
    
export default API