import React from "react";
import "./homeimg.css";
import { useTypewriter, Cursor } from "react-simple-typewriter"
const homeimg = '/assets/into-img.jpg';




const Homeimg = () => {
  const [text] = useTypewriter({
    words: ["Welcome To My Portfolio","I'm a Software Developer" ,"I Know Full stack Development", "I Know PHP","React.js"],
    loop: {},
    typeSpeed: 100,
    delaySpeed: 1000,
  });

  const homeimg = '/assets/into-img.jpg';

  return (
    <div className="home-image">
      <div className="mask">
        <img className="intro-image" src={homeimg} alt="intro"/>
      </div>

      <div className="text-continer">
        <h1>it's a pleasure to see you.</h1>
        <p>
          <span>{text}</span>
          <Cursor/>
        </p>
      </div>
    </div>
  );
}

export default Homeimg;
