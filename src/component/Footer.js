import React from 'react';
import "./footer.css";
import { FaGithub, FaHome, FaMailBulk, FaPhone } from 'react-icons/fa';
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-contant'>
           <div className='left'>
                <div className='local'>
                    <div className='add'>
                        <FaHome className='icons' size={25}/>
                        <p>3D PUNITHA COMPLIX VANDIPALAIYAM,<br/>
                        CUDDALORE - 607002.
                        </p> 
                    </div>
                    <div className='phone'>
                        <FaPhone className="icons" size={25} />
                        <p>7904630337</p>
                    </div>
                    <div className='email'>
                        <FaMailBulk className='icons' size={25} />
                        <p>satheesh24798@gmail.com</p>
                    </div>
                    <div className='github'>
                        <FaGithub className='icons' size={25} />
                        <p>github.com/shinesatheesh</p>
                        
                    </div>
                </div>
           </div>
           <div className='right'>
                <h1>About</h1><br/>
                <p>Hello, and welcome to my portfolio!
                My name is satheesh kumar, and I am a dedicated and ambitious job seeker on a mission to forge a successful career in IT Industry. 
                I am thrilled to share my journey and accomplishments with you.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer;