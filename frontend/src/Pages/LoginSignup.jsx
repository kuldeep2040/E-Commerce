import React, { useState } from 'react'
import'./CSS/LoginSignup.css'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const LoginSignup = () => {

  const [state, setState]=useState('Login')
  const [formData, setFormData] = useState({
    username:'',
    password:'',
    email:''
  })
  const chnageHandler =(e)=>{
    setFormData({ ...formData,[e.target.name]:e.target.value})
  }
  const login = async ()=>{
    console.log('login clicked', formData)
    let responceData;
    await fetch('http://localhost:4000/login',{
      method:'POST',
      headers:{
        Accept:'application/formData',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>responceData=data)

    if(responceData.success){
      localStorage.setItem('auth-token',responceData.token);
      toast.success('Login successful! Redirecting...');
      setTimeout(() => {
        window.location.replace('/');
      }, 1000);
    }
    else {
      toast.error(responceData.errors || 'Login failed!');
    }
  }
  const signup = async ()=>{
    console.log('signup clicked', formData)
    let responceData;
    await fetch('http://localhost:4000/signup',{
      method:'POST',
      headers:{
        Accept:'application/formData',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>responceData=data)

    if (responceData.status === 400) {
      // Show error if email already exists
      toast.error(responceData.errors || 'Signup failed! Email already registered.');
    } 
    if(responceData.success){
      localStorage.setItem('auth-token',responceData.token);
      toast.success('Signup successful! Redirecting...');
      setTimeout(() => {
        window.location.replace('/');
      }, 1000);
    }
    else {
      toast.error(responceData.errors || 'Signup failed!');
    }

  }
  return (
    <div className='loginsignup'>
      <ToastContainer />
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state==='Sign Up'?<input name='username' value={formData.username} onChange={chnageHandler} type="text" placeholder='Your Name' />:<></>}
          <input name='email' value={formData.email} onChange={chnageHandler} type="email" placeholder='Your Email' />
          <input name='password' value={formData.password} onChange={chnageHandler} type="passowrd" placeholder='Password' />
        </div>
        <button className="loginsignup-btn" onClick={()=>{state==='Login'?login():signup()}} >{state}</button>
        {state ==='Sign Up'?<p onClick={()=>{setState("Login")}}  className="loginsignup-login">
          Already have an account <span className='spann'>Login here</span>
        </p>:<p onClick={()=>{setState("Sign Up")}} className="loginsignup-login">
          Create a new account? <span className='spann'>Click here</span>
        </p>}
        
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, ex.</p>
        </div>
      </div>
      
    </div>
  )
}

export default LoginSignup
