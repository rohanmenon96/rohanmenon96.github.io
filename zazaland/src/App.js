import React from 'react';
import {Route, Switch, NavLink} from 'react-router-dom'
import './App.css';
import AboutContainer from './containers/AboutContainer'
import HomeContainer from './containers/HomeContainer'
import ProjectsContainer from './containers/ProjectsContainer'
import ResumeContainer from './containers/ResumeContainer'
import EducationContainer from './containers/EducationContainer'
import NotFoundContainer from './containers/NotFoundContainer';

class App extends React.Component {

  state = {
    forceUpdate: false
  }

  handleForceUpdateTrue = () => {
    this.setState ({
      forceUpdate: true
    })
  }

  handleForceUpdateFalse = () => {
    this.setState ({
      forceUpdate: false
    })
  }
  
  renderProjectsContainer = () => <ProjectsContainer forceUpdate={this.state.forceUpdate} handleForceUpdateFalse={this.handleForceUpdateFalse} />
  renderAboutContainer = () => <AboutContainer forceUpdate={this.state.forceUpdate} handleForceUpdateFalse={this.handleForceUpdateFalse} />
  renderResumeContainer = () => <ResumeContainer forceUpdate={this.state.forceUpdate} handleForceUpdateFalse={this.handleForceUpdateFalse} />

  render() {

    return (
      <div id="homepage">

        <div id="navbar">   
          {/* <NavLink to='/' exact className="navbar-links" >
              <img src={require("./media/logo.png")} alt='' id="logo" />
          </NavLink>      */}
          <NavLink to='/contact' exact className="navbar-links" >Contact</NavLink>
          <NavLink to='/extracurricular' exact className="navbar-links" onClick={this.handleForceUpdateTrue} >Extracurricular</NavLink>
          <NavLink to='/workEx' exact className="navbar-links" onClick={this.handleForceUpdateTrue} >Work Experience</NavLink>
          <NavLink to='/education' exact className="navbar-links" onClick={this.handleForceUpdateTrue} >Education</NavLink>
          <NavLink to='/' exact className="navbar-links" >Home</NavLink>
        </div >

        <div id="social-links-div">
          <a href="https://github.com/rohanmenon96" rel="noopener noreferrer" target="_blank" >
            <img src={require("./media/github-icon.svg")} alt='' className="icons" />
          </a><br></br>
          <a href="https://www.linkedin.com/in/rohan-menon96" rel="noopener noreferrer" target="_blank" >
            <img src={require("./media/linkedin-icon.svg")} alt='' className="icons" />
          </a><br></br>
          <a href={`mailto:rmenon3@stevens.edu`} rel="noopener noreferrer" target="_blank" >
            <img src={require("./media/send.png").default} alt='' className="icons" />
          </a><br></br>
        </div>     
  
        <Switch>
          <Route exact path='/' component={HomeContainer} />
          {/* {/* <Route exact path='/about' component={this.renderAboutContainer} /> */}
          {/* <Route exact path='/projects' component={this.renderProjectsContainer} />
          <Route exact path='/resume' component={this.renderResumeContainer} /> */}
          <Route exact path='/education' component={EducationContainer} />
          <Route component={NotFoundContainer}/>
        </Switch>
  
      </div>
    
    );

  }

}

export default App;
