import axios from 'axios'
import React,{useState} from 'react'
import { Helmet } from 'react-helmet'
import { toast } from 'sonner'

const Signup = () => {
  const [name, setName]= useState("")
  const [email, setEmail]= useState("")
  const [password, setPassword]= useState("")
  const [address, setAddress]= useState("")
  const [phone, setPhone]= useState("")
  const [role, setRole]= useState("")

  // handle submit

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const{data} = await axios.post("http://localhost:4000/api/v1/auth/signup", {name, email, password, address, phone, role})
      console.log(data);
      alert(data)

    }catch(error){
        alert("Something went wrong")
    }
    
  }
  return (
    <div>
      <Helmet>
        <title>MyStore-Signup</title>
      </Helmet>


      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 via-blue-100 to-blue-300 px-4">

  <form onSubmit={handleSubmit} className="bg-white px-4 py-2 mt-6 rounded-2xl shadow-2xl w-full max-w-md space-y-5">

    <h2 className="text-3xl font-bold text-center text-blue-700 mb-4">
      Create Account
    </h2>

    <div className="flex flex-col">
      <label htmlFor="name" className="text-sm font-medium mb-1 text-gray-700">
        Name
      </label>
      <input
        type="text"
        id="name"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => {setName(e.target.value)}}
        className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        required
      />
    </div>

    <div className="flex flex-col">
      <label htmlFor="email" className="text-sm font-medium mb-1 text-gray-700">
        Email
      </label>
      <input
        type="email"
        id="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => {setEmail(e.target.value)}}
        className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        required
      />
    </div>

    <div className="flex flex-col">
  <label htmlFor="confirmPassword" className="text-sm font-medium mb-1 text-gray-700">
    Password
  </label>
  <input
    type="password"
    id="Password"
    placeholder="password"
    value={password}
    onChange={(e) => {setPassword(e.target.value)}}
    className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
    required
    minLength="6"
  />
</div>

    <div className="flex flex-col">
      <label htmlFor="address" className="text-sm font-medium mb-1 text-gray-700">
        Address
      </label>
      <textarea
        id="address"
        rows="3"
        placeholder="Enter your address"
        value={address}
        onChange={(e) => {setAddress(e.target.value)}}
        className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        required
      ></textarea>
    </div>

    <div className="flex flex-col">
      <label htmlFor="phone" className="text-sm font-medium mb-1 text-gray-700">
        Phone
      </label>
      <input
        type="tel"
        id="phone"
        placeholder="Enter your phone number"
        value={phone}
        onChange={(e) => {setPhone(e.target.value)}}
        className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        required
      />
    </div>

    <div className="flex flex-col">
      <label htmlFor="role" className="text-sm font-medium mb-1 text-gray-700">
        Role
      </label>
      <select
        id="role"
        value={role}
        onChange={(e) => {setRole(e.target.value)}}
        className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        required
      >
        <option value="">Select Role</option>
        <option value="admin">Admin</option>
        <option value="user">User</option>
        <option value="manager">Manager</option>
      </select>
    </div>

    <button
      type="submit"
      className="w-full bg-blue-600 text-white py-2 rounded-xl font-semibold hover:bg-blue-700 active:scale-95 transition shadow-md"
    >
      Sign Up
    </button>

  </form>
</div>
      
    </div>
  )
}

export default Signup