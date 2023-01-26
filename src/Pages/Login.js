import React from 'react';
import "../App.css"

import { useState } from 'react'

const Login =()=>{
    
    const[login,setLogin] = useState(false);

    const handleClick =()=>{
        setLogin(true);
    }
    return(
        <div className='login'>
            <h1>Login</h1>
            <button
                onClick={handleClick}
            >{login ? "Login" : "Logout"}</button>
        </div>
    )
}
export default Login;