import { Component } from 'react';
import './App.css';

import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import NewWorkoutForm from './components/NewWorkoutForm/NewWorkoutForm'

export default class App extends Component {



  render() {
    return (
      <div className="App">
        <Nav />
        <Header />
        <NewWorkoutForm />
      </div>
    );
  }
}


