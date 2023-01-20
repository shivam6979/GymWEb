import React from 'react'
import Facebook from '../../logo/SVG/facebook.svg'
import Instagram from '../../logo/SVG/instagram.svg'
import Twitter from '../../logo/SVG/twitter.svg'
import Youtube from '../../logo/SVG/youtube.svg'
import Logo from '../../logo/logo.png'
import {footerData, contactData} from './FooterData'

import './Footer.css'

const Footer = () => {
  return (
    <>
    <div className='Footer-container'>

        <hr/>
        <img className='img' src={Logo} alt='oops'/>

        {/* <div className='footer'> */}
            <div className='social-links'>
                <img src={Facebook} alt='oops'/>
                <img src={Instagram} alt='oops'/>
                <img src={Twitter} alt='oops'/>
                <img src={Youtube} alt='oops'/>
            {/* </div> */}
        </div>
{/* ---------social links ends */}
<div className='footerData'>
      {footerData.map((program)=>(
                <div className='category'>
                    {program.image}
                    <span>{program.heading}</span><span>{program.details}</span>
                </div>
            ))}

<div className='contactData'>
      {contactData.map((program)=>(
                <div className='category4'>
                    <span>{program.headers}</span>
                    <span>{program.address1}</span>
                    <span>{program.address2}</span>
                    <span>{program.mobile}</span>
                    <span>{program.gmail}</span>
                </div>
            ))}

      </div>

    </div>


      </div>


    </>
  )
}

export default Footer