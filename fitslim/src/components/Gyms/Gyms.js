import React from 'react'
import './Gyms.css'
import { plansData } from './GymsData'
const Plans = () => {
  return (
    <div className='img1'>
        <h1>WTF GYM</h1>
        <img src='https://www.desiblitz.com/wp-content/uploads/2016/11/Most-Handsome-Men-Pakistan-Featured.jpg' alt='oops'/>
        {/* <input placeholder='search'></input> */}

        <div className='plans'>
{/*----------- for left ----------------  */}
            <div className='left-div'>

                <h1>Find your nearest location</h1>
                <input placeholder='Search by city names'/>
                <button> Search</button>
            </div>
{/*----------- for right ----------------  */}

            <div className='right-div'>
                <div className='plans-categories'>
                    {plansData.map((program)=>(
                        <div className='category'>
                            <span>{program.heading}</span><span>{program.address}</span>
                            <span>{program.distance}</span><span>{program.amount}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Plans