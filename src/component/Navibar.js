import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import{FaBars,FaTimes} from 'react-icons/fa';
import "./style/navibar.css";

const Navibar = ()=>{
    const [click, setclick] = useState(false);
    const [active,setactive] = useState(false);
    const [color,setcolor] = useState(false);

    const changenavi = ()=>{
        let scroll = window.scrollY;
        if( scroll> 30){
            setcolor(true);
        }
        else{
            setcolor(false);
        }
    }
    window.addEventListener('scroll',changenavi);
    const handle = ()=>{ 
        setclick(!click);
        setactive(!active);}

 return(
 <div className={color? "navibar-bg":"navibar"}>
    <h1><Link to="/">Portfolio</Link></h1>
    <ul className={active ? "navi-list": "navi-list active"}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/project">Project</Link></li>
    </ul>
    <div className="hamburger" onClick={handle} > 
        {click ?(<FaTimes size={20} style={{color:'white'}}/>)
                :(<FaBars size={19} style={{color:'white'}} />)}
     </div>
 </div>
 );
}
export default Navibar;