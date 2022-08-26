import { children, createContext, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

// let xx = JSON.parse(localStorage.getItem("login")) || null
// console.log(xx)
// if (xx !== null) {
//     xx = xx.email.slice(0, 11)
// }
// console.log(typeof(xx))
// let y= xx.splice()
export function AuthContextProvider({ children }) {

    const [isAuth, setisAuth] = useState(JSON.parse(localStorage.getItem("login")) || false)
    // const [email, setemail] = useState(xx || null)
    // const navigate = useNavigate()
    const toggleUser = () => {
        setisAuth(true)
        // setemail(email)
    }
    const logout = () => {
        setisAuth(false)
        localStorage.removeItem("login")
        localStorage.removeItem("CurrentUser")
        // navigate("/")
        // console.log(isAuth,email)
    }
    return (
        <AuthContext.Provider value={{ isAuth, setisAuth, toggleUser, logout }}>
            {children}
        </AuthContext.Provider>
    )
}