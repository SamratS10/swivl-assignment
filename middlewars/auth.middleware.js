import User from "../schemas/User.model.js"
import jwt from "jsonwebtoken"

export const authenticate = async(req,res,next)=>{
    const authHeader = req.headers["authorization"]
    let token 
    if(authHeader!==undefined){
        token = authHeader.split(" ")[1]
    }
    if(token===undefined){
        return res.status(401).json({message:"Invalid Access token..."})
    }else{
        try{
            const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY)
            if(!decoded){
                return req.status(400).JSON({message:"Token is invalid or token expired"})
            }
            const {_id} = decoded 
            req.user = await User.findById(_id)
            next()
        }
        catch(error){
            return res.status(401).json({message:error.message})
        }
    }
}