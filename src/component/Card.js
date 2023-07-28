import React from 'react'
import "./card.css";
const Card = () => {
    const image = '/assets/uzhavar.jpg';
  return (
    <div className='card'>
        <div className='project-container'>
            <img  className='Image' src={image} alt='image'/>
            <div className='project-card'>
                <h1 className='project-heading'>Project</h1>
                <p>
                The project
                aimed to provide a user-friendly platform for farmers and buyers to connect and
                facilitate agricultural transactions.
                </p>
            </div>
            <div><button className='btn'>view</button>
                <button className='btn'>source</button></div>
            </div>
    </div>
  )
}

export default Card;