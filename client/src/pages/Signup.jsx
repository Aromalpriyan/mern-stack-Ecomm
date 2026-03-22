import axios from 'axios'
import React,{useState} from 'react'
import { Helmet } from 'react-helmet'
import { toast } from 'sonner'
import {Navigate, useNavigate} from "react-router-dom"

const Signup = () => {
  const [name, setName]= useState("")
  const [email, setEmail]= useState("")
  const [password, setPassword]= useState("")
  const [address, setAddress]= useState("")
  const [phone, setPhone]= useState("")
  const [role, setRole]= useState("")
  const navigate = useNavigate()

  // handle submit

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const{data} = await axios.post("http://localhost:4000/api/v1/auth/signup", {name, email, password, address, phone, role})
      
      // console.log(data);
      // alert(data)

      if(data && data.success){
        toast.success(data.message)
        navigate("/login")
      }else{
        toast.error(data.message)
      }
      
        
    }catch(error){
        toast.error("Something went wrong")
    } 
  }

  return (
<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black px-4">

      <Helmet>
        <title>MyStore - Signup</title>
      </Helmet>

      {/* Card */}
      <div className="
        w-full max-w-md
        p-6
        rounded-2xl
        bg-white/10 backdrop-blur-xl
        border border-white/20
        shadow-lg
        text-white
      ">

        <h2 className="text-2xl font-semibold text-center mb-5">
          Create Account 🚀
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          {/* Name */}
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input-style"
            required
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-style"
            required
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-style"
            required
          />

          {/* Address */}
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="input-style"
            required
          />

          {/* Phone + Role (Grid) */}
          <div className="grid grid-cols-2 gap-3">
            <input
              type="tel"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="input-style"
              required
            />

            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="input-style text-gray-300"
              required
            >
              <option value="" className="text-black">Role</option>
              <option value="admin" className="text-black">Admin</option>
              <option value="user" className="text-black">User</option>
              <option value="manager" className="text-black">Manager</option>
            </select>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="mt-2 bg-sky-500 hover:bg-sky-600 py-2 rounded-lg font-medium transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm text-gray-400 mt-4">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-sky-400 cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>

      </div>

      {/* Reusable Input Style */}
      <style>
        {`
          .input-style {
            width: 100%;
            background: rgba(255,255,255,0.1);
            border: 1px solid rgba(255,255,255,0.2);
            border-radius: 10px;
            padding: 10px 14px;
            outline: none;
            transition: 0.3s;
          }
          .input-style:focus {
            border-color: #38bdf8;
            box-shadow: 0 0 0 1px #38bdf8;
          }
        `}
      </style>

    </div>
  )
}

export default Signup