import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Signup.css";




function Signup() {
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');
  const [ email, setEmail] = useState('');

  const handleSumit=(e)=>{
    e.preventDefault();
    console.log(name)

  }

  return (
    <div  className='signup-form1'>
    <form className='signup-form' onClick={handleSumit}>
    <label htmlfFor='name'>name</label>
        <input  onClick={(e)=> setName(e.target.value)} type='text' placeholder='Your name' id='name' name='name'></input>
        <label htmlfFor='email'>email</label>
        <input  onClick={(e)=> setEmail(e.target.value)} type='email' placeholder='youremail@gmail.com' id='email' name='email'></input>
        <label htmlfFor='password'>password</label>
        <input onClick={(e)=> setPass(e.target.value)} type='password' placeholder='Enter your password' id='password' name='password'></input>
        <br></br>

        <button>Login In</button>
    </form>
    <br></br>
    <button>Dont't have an account?  Signup here</button>
  </div>    )
}
export default Signup
