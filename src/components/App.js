import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import PixelSeries from './pages/PixelSeries';
import About from './pages/About';
import Test from './pages/Test';
import '../stylesheets/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route path="/pixel" component={PixelSeries} />
          <Route path="/about" component={About} />
          <Route path="/test" component={Test} />
        </Switch>
      </div>
    );
  }
}

export default App;
