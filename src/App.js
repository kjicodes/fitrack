import { Component } from 'react';
import './App.css';

import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import About from './components/About/About';
import Home from './components/Home/Home';

import NewWorkout from './components/NewWorkout/NewWorkout';

export default class App extends Component {



  render() {
    return (
      <div className="App">
        <Header />
        <Nav />
        <NewWorkout />

      </div>
    );
  }
}


