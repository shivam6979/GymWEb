import React from 'react'
import './Hero.css'
import Header from '../Header/Header'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='blur hero-blur'></div>
{/* dividing two part  */}
 {/*---------------------- left part------------------- */}
        <div className='left-h'>
            {/* <Header/> */}
            <div className='the-best-add'>
            <div></div>
            <span><h1>India's best fitness Club</h1></span>
            </div>

{/*------------------ starting heading-----------------  */}
            <div className='hero-text'>
                <div><span className='stroke-text'>SHAPE </span><span>Your Body</span></div>
                <div className='text'>
                    <span>Being physically and mentally fit is necessary to live a happy, long life. Exercise is one of the best ways to
                         keep a person healthy. Hence, it is always best to find a workout routine no matter how busy you are. With the
                         numerous diseases that spread today, many individuals realized the essence of workout. Specifically, having a
                         workout routine will give an individual the greatest physical, mental, and social benefits.</span>
                         <h2>So what are you waiting for</h2>
                         <h1>join us for yourself</h1>

                </div>
            </div>

{/*-------------------------Buttons ---------------------  */}
            <div className='hero-buttons'></div>
            <div className='btn'>Get started</div>
            <div className='btn'>learn more</div>

{/*----------------------------figure -------------------------------  */}

{/* --------------------------------------------------------------------------- */}
        </div>
{/*-------------------- right part ------------*/}
        <div className='right-h'>
        <div className='figure'>
                <img src='https://i.pinimg.com/736x/36/9e/ad/369ead32021f365bc9d6aeb94bc96f1e.jpg' alt='oops'/>
            </div>
        </div>




    </div>
    )
}

export default Hero