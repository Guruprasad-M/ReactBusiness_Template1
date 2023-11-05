import React, { useState } from 'react'
import '../../App.css'
import './SignUp.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
function SignUp() {

  const[action,setAction] =useState("Login");
  


  return (
    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
        
        </div> 
        <div className="inputs">
          <div className="input">
          <i className='fa-solid fa-user'></i>
            <input type="text" placeholder='Username' />
          </div>
          <div className="input">
          <i className='fa-solid fa-envelope'></i>
            <input type="email" placeholder='email' />
          </div>
          <div className="input">
          <i className='fa-solid fa-lock'></i>
            <input type="password" placeholder='password'/>
          </div>
        </div>
       <div className={action==="Login" ?"forget-password":"forget-passwords"}   >Lost password?<span> CLICK HERE</span> </div>
        <div className="submit-container">
          <div className={action==="Login" ?"submit gray":"submit"}  onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
          <div className={action==="Sign Up" ?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
        </div>
        </div>
        
  )
    
}

export default SignUp