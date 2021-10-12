import React, { useState } from 'react'
import "../App.css";

const Login = (props) => {
    const [name, setName] = useState('anime');
    const [password, setPassword] = useState('mann');
    return (
        <div className="loginContainer">
            <h1 className="loginHeading">Login Page</h1>
            <input className="username" type="text" value={name} onChange={e=>setName(e.target.value)} placeholder="Username" /> 
            <input className="password" type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" /> 
            <button className="loginBtn" onClick={() => props.history.push("/searchPage")}>Login</button>
            <h6 className="signUpHead">Not A User Yet? <span className="signUpLink" onClick={()=>{props.history.push("/signUp")}}>Sign Up</span></h6>
        </div>
    )
}

export default Login
