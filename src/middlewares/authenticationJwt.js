import jwt from "jsonwebtoken";
import config from "../config";
import User from "../models/User";

export const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];
    // console.log(token);

    if (!token) return res.status(403).json({ message: "Token No Valido" });

    const decoded = jwt.verify(token, config.SECRET);

    const user = await User.findById(decoded.id, { password: 0 });
    console.log(user);
    if (!user) return res.status(404).json({ message: "usuario no existe" });

    next();
  } catch (error) { return res.status(401).json({message: "No autorizado sin token"})}
};

export const isModerator = async (req, res, next) =>{
    
}

export const isAdmin = async (req, res, next) =>{
    
}