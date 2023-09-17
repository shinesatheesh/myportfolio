import React from 'react';
import './style/homeimg2.css';
const Homeimg2 = () => {
    const projimg = '/assets/project-img.jpg';
    
  return (
    <div>
        <div className='continer'>
            <div className='img-contant'>
                <img className='project-img' src={projimg} alt='project' />
            </div>
            <div className='text'>
                <h1>Welcome to My Portfolio Project Page!</h1>
                <p>This page you can see the my project</p>
            </div>
        </div>
    </div>
  )
}

export default Homeimg2