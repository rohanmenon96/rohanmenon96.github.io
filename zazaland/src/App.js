import React from 'react';
import {Route, Switch, NavLink} from 'react-router-dom'
import './App.css';
import AboutContainer from './containers/AboutContainer'
import HomeContainer from './containers/HomeContainer'
import ProjectsContainer from './containers/ProjectsContainer'
import ResumeContainer from './containers/ResumeContainer'
import Contact from './containers/ContactContainer'
import NotFound from './components/NotFound'

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
  
        <div id="social-links-div">
          <a href="https://github.com/rohanmenon96" rel="noopener noreferrer" target="_blank" >
            <img src={require("./media/github-icon.svg")} alt='' className="icons" />
          </a><br></br>
          <a href="https://www.linkedin.com/in/rohan-menon96" rel="noopener noreferrer" target="_blank" >
            <img src={require("./media/linkedin-icon.svg")} alt='' className="icons" />
          </a><br></br>
        </div>     
  
        <Switch>
          <Route exact path='/' component={HomeContainer} />
        </Switch>
  
      </div>
    
    );

  }

}

export default App;
