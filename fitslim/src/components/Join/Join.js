import React from 'react'
import './Join.css'

const Join = () => {
  return (
    <div className='Join' id='join-us'>

        <div className='left-join'>
            <div>
                <span>READY TO</span>
                <span>LEVEL UP</span>
            </div>

            <div>
                <span>YOUR BODY</span>
                <span>WITH US?</span>
            </div>

        </div>

{/* -----------------left --------------- */}
        <div className='right-join'></div>
            <form action='' className='email-container'>
                <input type='email' name='user-email' placeholder='Enter your email'></input>
                <button className='btn btn-join'>Join Now</button>
            </form>

    </div>
  )
}

export default Join