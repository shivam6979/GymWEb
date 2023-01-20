import React from 'react'
import './Nutritian.css'
import {nutritianData} from './NutritianData'

const Nutritian = () => {
  return (
    <div className='Programs' id='programs'>
{/* --------------------------header -----------------------*/}
        <div >
            <span className='Programs-header'>NUTRIVORES</span>
            <h1>Tailored dites for all</h1>
        </div>

{/*------------------ using  programData-----------------*/}
        <div className='program-categories'>
            {nutritianData.map((program)=>(
                <div className='category'>
                    {program.image}
                    <span>{program.heading}</span><span>{program.details}</span>
                </div>
            ))}
        </div>
    </div>

  )
}

export default Nutritian