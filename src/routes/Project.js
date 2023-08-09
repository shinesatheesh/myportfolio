import React from 'react'
import Navibar from '../component/Navibar';
import Footer from '../component/Footer';
import Homeimg2 from '../component/Homeimg2';
import Card from '../component/Card';

 const Project = () => {
  return (
    <div>
    <div><Navibar/></div>
    <div><Homeimg2/></div>
    <div className='project-card'>
      <div className='one'><Card/></div>
      <div className='two'><Card/></div>
    </div>
    <div><Footer/></div>
    </div>
  )
}

export default Project;