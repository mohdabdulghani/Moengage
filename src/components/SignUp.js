import React, { useState } from 'react';
import "../App.css";

const SignUp = (props) => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [mobileNum, setMobileNum] = useState('');
    function createAccount(){
        props.history.push("/")
    }
    return (
        <div className="loginContainer">
            <input className="input" placeholder="Enter Your Name" value={name} onChange={e=>{setName(e.target.value)}} />
            <input className="input" placeholder="Enter Your Password" value={password} onChange={e=>{setPassword(e.target.value)}} />
            <input className="input" placeholder="Enter Your Email" value={email} onChange={e=>{setEmail(e.target.value)}} />
            <input className="input" placeholder="Enter Your Age" value={age} onChange={e=>{setAge(e.target.value)}} />
            <input className="input" placeholder="Enter Your Mobile Number" value={mobileNum} onChange={e=>{setMobileNum(e.target.value)}} /> 
            <button className="loginBtn" onClick={createAccount}>Create Account</button>
        </div>
    )
}

export default SignUp
