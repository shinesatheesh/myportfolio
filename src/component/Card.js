import React, { useState,useRef } from 'react'
import "./style/card.css";

const Card = ({item,paragraph}) => {
 
  const handle= (id)=>{
    return paragraph(id);
    
 }
  return (
    <div className='card'>
        <div className='project-container'>
            <img  className='Image' src={item.img} alt='image'/>

            <div className='project-card'>
                <h1 className='project-heading'>{item.name}</h1>
                <p>{item.text}
                </p>
            </div> </div>
            <div className='btn-footer'>
                <button className='btn' onClick={e => handle(item.id)}>view</button>
                <button className='btn'><a href={item.source}>source</a></button>
            </div>            
    </div>
  )
}

export default Card;