import React from 'react';

function Project(props) {

  const handleGetName = (event) => {
    let projectName = event.target.id
    handleChangeCurrentlyShowing(projectName)
  }

  const handleChangeCurrentlyShowing = (projectName) => {
    props.handleChangeCurrentlyShowing(projectName)
  }

  return (

    <div className="components" id="projects-grid">

      <div className="project-divs" id="AlwaysBalanced" >
        <h2 className="project-div-headers" id="AlwaysBalanced" ><img src={require("../media/glogo.svg")} alt='' className="workExicons-g" /></h2>
        <h3>Software Engineer</h3>
       TCS at Google, Mountain View
       <i>March 2021 - Present</i>
        <p className="project-blurb" id="AlwaysBalanced" ><ul><li>Created and deployed the entire framework of the KPI Index Monitoring Tool with Java, SQL and PLX CI/CD pipelines  which replaced the manual data entry process, saving around 10% of the resource’s daily time and effort
        </li><br/><li>Currently working on the server side rendering of a new UI Renderer which would help Google to  render search features faster using real time HTML and JSLayout generation using Java
        </li></ul>
        </p>
        <img src={require("../media/always-balanced-screenshot.png")} alt='' className="project-screenshots" id="AlwaysBalanced" />
      </div>

      <div className="project-divs" id="AlwaysBalanced" >
        <h2 className="project-div-headers" id="AlwaysBalanced" ><img src={require("../media/aws_logo.svg")} alt='' className="workExicons" /></h2>
        <h3>Software Development Engineer Intern</h3><br/>
        Amazon Web Services, Seattle<br/><br/>
        <i>June 2019 - August 2019</i>
        <p className="project-blurb" id="AlwaysBalanced" >
          <ul>
          <li>Researched, designed and developed the  Offer String Creation BI tool - which was a streamlined microservice made using Spring Boot, ReactJS and DynamoDB for the Twitch Prime Team at AWS
          </li><li>Leveraged an intermediate GraphQL serving to improve the run-time eﬃciency of the system 
          </li><li>Collaborated with the Dev-Ops and Business Intelligence Team to build an end-to-end framework using AWS for creating and deploying an oﬀer; everything on AWS - significantly increasing  the speed of the offer creation system
          </li>
          </ul>
        </p>
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

export default Project;