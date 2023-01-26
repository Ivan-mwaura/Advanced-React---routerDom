import React, { useState } from "react"
import {Routes, Route,Link} from "react-router-dom"
import Home from "./ReactRouter/Home"
import About from "./ReactRouter/About"
import Error from "./ReactRouter/Error"
import Profile from "./ReactRouter/ProfilePage"
import "./App.css"

const App = () =>{

    const[login,setLogin] = useState(false);

    const handleClick =()=>{
        setLogin(true);
    }
  return(

  <div >
    
     <div className='login'>
            <h1>Login</h1>
            <button
                onClick={handleClick}
            >{login ?"Logout"  : "Login"}</button>
        </div>

    <nav>
      <ol className="nav">
        <li><Link to ="/">Home</Link></li>
        <li><Link to ="/about">About</Link></li>
        <li><Link to ="/profile">profile</Link></li>
      </ol>
    </nav>
      <Routes>
        <Route path="/" index element={<Home/>} />
        <Route path="/about" element = {<About/>}/> 
        <Route path="/profile" element={<Profile/>}/>
        <Route path ="*" element={<Error/>}/>
      </Routes>
    </div>
  )
}
export default App;