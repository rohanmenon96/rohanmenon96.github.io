import React from 'react';
import { Link } from 'react-router-dom'

function Education() {

  return (

    <div >
      <br/>
      <h2> Bachelor of Technology in Computer Science </h2>
      <i><h3>NMIMS, Mumbai</h3></i>
      <h4>2014 - 2018</h4>
      <br/>
      <h2> Master of Science in Computer Science </h2>
      <i><h3>Stevens Institute of Technology, New Jersey</h3></i>
      <h4>2018 - 2020</h4>
      <br/>
      <Link to='/' >
        <button className="buttons">Home</button>
      </Link>
    </div>
    
  );
  
}

export default Education;