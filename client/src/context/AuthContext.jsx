
import { useState, createContext, useEffect} from "react";
import axios from "axios";


const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [auth, setAuth] = useState({
        user:null,
        token:""
        })

// default axios
    axios.defaults.headers.common["Authentication"] = auth?.token

// local storage
    useEffect(() => {
        const data = localStorage.getItem("auth")
        if(data){
            const parseData = JSON.parse(data)
            setAuth({
                ...auth,
                user:parseData.user,
                token:parseData.token
            })
        }
    })
        
    return(

    <AuthContext.Provider value={{auth,setAuth}}>
        {children}
    </AuthContext.Provider>

    )
}



export default AuthContext