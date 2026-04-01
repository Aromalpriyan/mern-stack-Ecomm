import express from "express"
import { login, logout, signup } from "../controllers/authController.js"
import { isLoggedIn } from "../middlewares/authMiddlewares.js"

const router = express.Router()

// routes
// signup | method:post | /api/v1/auth/signup
router.post("/signup", signup)
// login | method:post | /api/v1/auth/login
router.post("/login", login)
// logout | method:post | /api/v1/auth/logout
router.post("/logout", logout)

// protected route (to check the authenticated user)
//if the user logged in we get true in the frontend so that the user can access the dashboard or more
router.get("/user-auth",isLoggedIn, (req, res) =>{
    res.status(200).send({ok:true})
})

// protected admin route

router.get("/admin-auth", isLoggedIn, (req,res) => {
    res.status(200).send({ok: true})
})


export default router