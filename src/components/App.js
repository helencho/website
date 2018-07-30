import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import SingleProject from './pages/SingleProject';
import Pixel from './pages/Pixel';
import About from './pages/About';
import Test from './pages/Test';
import '../stylesheets/Button.css';
import '../stylesheets/Anchor.css';
import '../stylesheets/Link.css';
import '../stylesheets/NavBar.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route path="/projects/:id" component={SingleProject} />
          <Route path="/pixel" component={Pixel} />
          <Route path="/about" component={About} />
          <Route path="/test" component={Test} />
        </Switch>
      </div>
    );
  }
}

export default App;
