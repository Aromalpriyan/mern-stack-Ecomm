import React, {useState, useEffect} from 'react'
import { useNavigate, useLocation } from 'react-router-dom'




const Loader = () => {
  const [count, setcount] = useState(5)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
     const interval = setInterval(() => {
      setcount((prev) => --prev)
     },1000)
     count === 0 && navigate("/login",{state: location.pathname})

     return () => clearInterval(interval)

  },[count, navigate, location])
     
  return (
    <div className='flex justify-center items-center flex-col gap-4'>
        <h1>{`Redirecting in ${count} seconds`}</h1>
        <div className='w-20 h-20 border-4 border-dashed border-purple-500 rounded-full animate-[spin_5s_linear_infinite]'></div>

    </div>
  )
}

export default Loader