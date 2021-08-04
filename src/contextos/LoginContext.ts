import React from "react"

const LoginContext = React.createContext({
    isLogin: false,
    login:(username:any)=>{},
    logout: ()=>{}
})

export default LoginContext