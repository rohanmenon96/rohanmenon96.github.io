import React from 'react';
import {Link} from 'react-router-dom'

function Home() {

  return (

    <div id="home-div">
      <p className="p one-second-animation" id="hi-there" >Hi there! I'm</p>
      <h1 className="h1 three-second-animation" >Rohan Menon</h1>
      <h2 className="h2 five-second-animation" >I'm a Software Engineer</h2>
      <Link exact className="p seven-second-animation" id="intro" >
        <p className="p seven-second-animation" id="intro" >I have experience in Java, JavaScript, SQL and more.</p>
      </Link>
      <p className="nine-second-animation">This website was created using React.js and custom CSS.</p>
      <a href={`mailto:rmenon3@stevens.edu`} className="ten-second-animation" >
        <button className="buttons" id="get-in-touch" >Get in touch</button>
      </a>
    </div>
    
  );
  
}

export default Home;