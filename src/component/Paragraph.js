import React from 'react'
import "./style/paragraph.css"
import data from "./data/data"


const Paragraph = ({para,parafocus}) => {
const text = para.paragraph;
const icon =data.iconstyle
  return (
    <div className='paragraph'>
     <div className='title'><h1>{para.name}</h1></div>
      <section className='container-page'>
          <div className='image'><img src={para.img}/></div>
          <div ref={parafocus}   
            tabIndex={0} className='text-content'>
              <p><span> {text}
              </span>
            
          </p>
          </div>
      </section>
      <section className='technical-skill'>
      <div className='skill'><h2>Technology</h2></div>
      <div className='tech' >
        {para.tech.map((tech,index)=>
          (<div className="list-icon" key={index} > <img className="icon" 
          src={icon[tech]} alt="Icon" />
          
          <p>{tech}</p></div>)
        )
        }</div>
        </section>
    </div>
  )
}
export default Paragraph;
