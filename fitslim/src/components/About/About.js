import React from 'react'
import {Link} from 'react-router-dom'
import './About.css'
import { aboutData, ourFoun } from './AboutData'

const About = () => {
  return (
    <div className='About' id='About'>
        <h1>About us</h1>
        <div className='about-category'>
            {aboutData.map((program)=>(
                <div className='category'>
                    <span>{program.heading}</span><span>{program.details}</span>
                </div>
            ))}
        </div>
        <h1>Our Tech team help our partner in </h1>

        <h1>Meet our founders</h1>
        <div className='about-category'>
            {ourFoun.map((program)=>(
                <div className='category'>
                  {program.image}
                    <span>{program.name}</span><span>{program.position}</span>
                </div>
            ))}
        </div>
    </div>
  )
}

export default About