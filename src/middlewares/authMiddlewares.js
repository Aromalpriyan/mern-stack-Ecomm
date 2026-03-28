



//isLoggedIn

import { config } from "dotenv";

export const isLoggedIn = async(req, res, next) =>{
    try{
        const{token} = req.cookies;

        //if no token send msg

        if(!token){
            res.status(404).json({
                success:false,
                message:"Un-authorized user"
            })
        }

        //if token found
        const decoded = JWT.verify(token, config.JWT_SECRET)

        req.user = decoded;
        next()

        
    }catch(error){
        console.log(error);
        res.status(500).json({
            success:false,
            message:"Error in middleware",
            error
        })
    }
}