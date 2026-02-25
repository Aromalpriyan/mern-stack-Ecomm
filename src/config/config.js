import dotenv from "dotenv"

dotenv.config()


const config = {
    PORT: process.env.PORT || 4000,
    MONGODB_URL:process.env.MONGODB_URL || "mongodb+srv://Aromal:Aromal2667@cluster0.muhlszs.mongodb.net/ecomm",
    JWT_EXPIRY:process.env.JWT_EXPIRY,
    JWT_SECRET:process.env.JWT_SECRET

}

export default config