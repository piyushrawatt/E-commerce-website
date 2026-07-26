import jwt from "jsonwebtoken";
import User from "../models/user.js";

export const protect = async (req, res, next) => {

  try {
    let token;

    // Check Authorization Header
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    // No Token
    if (!token) {
      return res.status(401).json({
        message: "Not authorized, no token",
      });
    }

    // Verify Token
    console.log("Authorization Header:", req.headers.authorization);
console.log("Token:", token);
   
    const decoded = jwt.verify(
  token,
  process.env.JWTSECRET
);

console.log(decoded);

    // Get User
    req.user = await User.findById(decoded.id).select("-password");

    next();
  } catch (error) {
      console.log(error)
    res.status(401).json({
    
      message: "Not authorized, invalid token",
    });
  }
};