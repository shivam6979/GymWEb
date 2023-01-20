import React from 'react'
import './Partner.css'
import {partnerData,helpUIn,readfineData,witness} from './PartnerData'

const Partner = () => {
  return (
    <div className='main-div'>
      <div className='div-left'>
        <span><h1>Want to grow<span> your fitness</span> <span>Business?</span></h1></span>
        <h2>We made it easy for you be a part of fitslim family in 45 min </h2>
        <button><h1>Get Start</h1></button>
      </div>

      <div className='div-right'>
        <img src='https://thumbs.dreamstime.com/b/partnership-illustration-background-business-finance-flat-style-50380661.jpg' alt='oops'/>

      </div>
      {/* right div ends */}
      <div className='partnerData'>
      {partnerData.map((program)=>(
                <div className='category'>
                    <span>{program.header}</span><span>{program.details}</span>
                </div>
            ))}
      </div>

<div className='whyChose'>
  <span><h1>Why choose us?</h1></span>  <span><h2>We help you in </h2></span>
  <div className='helpUIn'>
  {helpUIn.map((program)=>(
                <div className='category6'>
                  <div className='circle'><span>{program.numbers}</span></div>

                    <span>{program.details}</span>
                </div>
            ))}
  </div>
  {/* helpUIn ends  */}
  <div className='readfine'>
  {readfineData.map((program)=>(
                <div className='category6'>
                  <div className='catogries'>
                    <span>{program.image}</span></div>

                    <span>{program.details}</span>
                </div>
            ))}
  </div>
  {/*  readfine ends */}

  <div className='witness'>
  {witness.map((program)=>(
                <div className='category6'>
                  <div className='catogries1'>
                    <span>{program.image}</span>
                    </div>

                    <span>{program.details}</span>
                </div>
            ))}

  </div>




</div>


    </div>

    )
}

export default Partner