import React from 'react'
import './Programs.css'
import { programData } from './ProgramData'

const Programs = () => {
  return (
    <div className='Programs' id='programs'>
{/* --------------------------header -----------------------*/}
        <div >
            <span className='Programs-header'>NUTRIVORES</span>
            <h1>Tailored dites for all</h1>
        </div>

{/*------------------ using  programData-----------------*/}
        <div className='program-categories'>
            {programData.map((program)=>(
                <div className='category'>
                    {program.image}
                    <span>{program.heading}</span><span>{program.details}</span>
                </div>
            ))}

        </div>



    </div>
  )
}

export default Programs