import React, { useState } from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'

function Login() {

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('')

  const handleSumit=(e)=>{
    e.preventDefault();

  }
  return (
    <div>
      {/* ---------------left div ------------------- */}
      <div  className='left-d'>
        <form className='login-form' onClick={handleSumit}>
            <label htmlfFor='email'>email</label>
            <input onClick={(e)=> setEmail(e.target.value)} type='email' placeholder='youremail@gmail.com' id='email' name='email'></input>
            <label htmlfFor='password'>password</label>
            <input  onClick={(e)=> setPass(e.target.value)} type='password' placeholder='Enter your password' id='password' name='password'></input>
            <br></br>
            <button>Login In</button>
        </form>
        <br></br>
        <button >Dont't have an account?  Signup here</button>



      </div>

{/* ----------------right div---------------- */}
      <div className='right-d'>
          <img src='https://png.pngtree.com/png-vector/20191003/ourmid/pngtree-user-login-or-authenticate-icon-on-gray-background-flat-icon-ve-png-image_1786166.jpg' alt='opps'/>
      </div>


      </div>
  )
}
export default Login
