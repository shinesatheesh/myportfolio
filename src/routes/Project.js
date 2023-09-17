import React, { useState,useRef } from 'react'
import Navibar from '../component/Navibar';
import Footer from '../component/Footer';
import Homeimg2 from '../component/Homeimg2';
import Card from '../component/Card';
import Paragraph from "../component/Paragraph";
import  data from "../component/data/data";
import "./project.css"

 const Project = () => {

  const list = data.list;
  const parafocus = useRef();

  const [view,setview]= useState(false);
  const[para,setpara] = useState([]);

  const paragraph =(id)=>{
      setview(true);
      const text =list.filter(e => e.id === id? e.text:null)
      setpara(text[0]);
      if(parafocus.current)
    parafocus.current.focus();
    }

  return (
    <div>
    <div><Navibar/></div>
    <div><Homeimg2/></div>
    <div className='project-cardlist'>
      {list === null ? 'no project' : list.map((item, index) => (
        <Card key={index}
          item={item}
          paragraph={paragraph}
        />
      ))}</div>
      {view === false ? null:(<div><Paragraph 
        para={para}
        parafocus={parafocus}
      /></div>)}
    <div><Footer/></div>
    </div>
  )
}

export default Project;