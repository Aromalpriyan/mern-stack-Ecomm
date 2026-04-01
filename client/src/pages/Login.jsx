import axios from 'axios'
import React, { useState, useContext } from 'react'
import { Helmet } from 'react-helmet'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

const Login = () => {

  const[email , setEmail] = useState("")
  const[password , setPassword] = useState("")
  const navigate = useNavigate()
  const {auth, setAuth} = useContext(AuthContext)

      const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log("working");
        try{
          const {data} = await axios.post("http://localhost:4000/api/v1/auth/login",{email, password})

          if(data && data.success){
            toast.success(data.message)
            setAuth({
              ...auth,
              user:data.user,
              token:data.token
            })
            localStorage.setItem("auth",JSON.stringify(data))
            navigate(location.state || "/")
          }else{
            toast.error(data.message)
          }

        }catch(error){
          console.log(error);
          toast.error("Something went wrong while login")
        }
      }
  
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black">

      <Helmet>
        <title>MyStore - Login</title>
      </Helmet>

      {/* Card */}
      <div className="
        w-[90%] max-w-md
        p-8
        rounded-2xl
        bg-white/10 backdrop-blur-xl
        border border-white/20
        shadow-[0_10px_40px_rgba(0,0,0,0.6)]
        text-white
      ">

        {/* Title */}
        <h1 className="text-3xl font-bold text-center mb-6 tracking-wide">
          Welcome Back 👋
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

          {/* Email */}
          <div>
            <label className="text-sm text-gray-300">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="
                w-full mt-1
                bg-white/10
                border border-white/20
                rounded-lg
                px-4 py-2
                outline-none
                focus:border-sky-400 focus:ring-1 focus:ring-sky-400
                transition
              "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-gray-300">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="
                w-full mt-1
                bg-white/10
                border border-white/20
                rounded-lg
                px-4 py-2
                outline-none
                focus:border-sky-400 focus:ring-1 focus:ring-sky-400
                transition
              "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="
              mt-4
              bg-sky-500
              hover:bg-sky-600
              py-2
              rounded-lg
              font-semibold
              tracking-wide
              transition
              shadow-md
            "
          >
            Login
          </button>

        </form>

        {/* Extra */}
        <p className="text-center text-sm text-gray-400 mt-6">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-sky-400 cursor-pointer hover:underline"
          >
            Sign up
          </span>
        </p>

      </div>
    </div>
  )
}

export default Login