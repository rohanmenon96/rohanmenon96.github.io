import React from 'react';
import { Link } from 'react-router-dom'

function Education() {

  return (
<div className="components" id="projects-grid">

<div className="project-divs" id="AlwaysBalanced" >
  <h2 className="project-div-headers" id="AlwaysBalanced" ><img src={require("../media/SBMlogo.png").default} alt='' className="workExicons-sbm" /></h2>
  <h3>Bachelor of Technology (B.Tech)<br/>in Computer Science</h3>
 Narsee Monjee Institue of Technology and Management, Mumbai
 <i>July 2014 - July 2018</i>
</div>

<div className="project-divs" id="AlwaysBalanced" >
  <h2 className="project-div-headers" id="AlwaysBalanced" ><img src={require("../media/Stevenslogo.png").default} alt='' className="workExicons" /></h2>
  <h3>Master of Science (MS) <br/>in Computer Science</h3>
 Stevens Institute of Technology, New Jersey
 <i>July 2018 - July 2020</i>
  <img src={require("../media/always-balanced-screenshot.png")} alt='' className="project-screenshots" id="AlwaysBalanced" />
</div>

<div className="project-divs">
  <h2 className="project-div-headers">See more on GitHub</h2>
  <a href="https://github.com/rohanmenon96" rel="noopener noreferrer" target="_blank" >
    <img src={require("../media/github-icon.svg")} alt='' className="icons" id="project-github-icon" />
  </a>
</div>

</div>
    
  );
  
}

export default Education;