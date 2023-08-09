import React from 'react'
import "./card.css";
const Card = () => {
    const img = '/assets/uzhavar.jpg';
  return (
    <div className='card'>
        <div className='project-container'>
        <img src={img} alt="the project" />

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