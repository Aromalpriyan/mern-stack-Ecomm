import React from 'react'
import { Helmet } from 'react-helmet'
import AuthContext from '../context/AuthContext'
import { useContext } from 'react'

const Home = () => {
  const{auth, setAuth} = useContext(AuthContext)
  return (
    <div>
      
    <Helmet>
        <title>Home MyStore</title>
    </Helmet>

     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black px-4">

      <div className=" w-full max-w-3xl bg-white/10 backdrop-blur-xlborder border-white/20 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.6)] text-white">

    {/* Header */}
      <div className="text-center border-b border-white/10 px-6 py-4">
        <h2 className="text-xl font-semibold tracking-wide">
          Signed User Details
        </h2>
      </div>

    {/* JSON Content */}
    <pre className="text-center p-6 text-sm text-green-400 overflow-x-auto whitespace-pre-wrap break-words">
      {JSON.stringify(auth, null, 2)}
    </pre>

   </div>

  </div>
      
    </div>
  )
}

export default Home