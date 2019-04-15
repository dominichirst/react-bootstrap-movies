import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import { Router } from '@reach/router'
import Movies from './components/Movies';
import AddMovie from './components/AddMovie';
import { Home } from './components/Home';
import { Navigation } from './components/Navigation';


class App extends Component {
  render() {
      return (
          <div> 
              <Navigation />
                          <Router>
                              <Home path="/" />
                          </Router>
                 
          </div>
    );
  }
}

export default App;
