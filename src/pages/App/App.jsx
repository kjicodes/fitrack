import { Component } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';

import HomePage from '../HomePage/HomePage';
import WorkoutsPage from '../WorkoutsPage/WorkoutsPage';
import AboutPage from '../AboutPage/AboutPage';
import ContactPage from '../ContactPage/ContactPage';
import AuthPage from '../AuthPage/AuthPage';

export default class App extends Component {

  state = {
    user: null
  };

  setUserInState = (incomingUserData) => {
    this.setState({ user: incomingUserData })
  };

  render() {
    return (
      <main className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/workouts" element={<WorkoutsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    )
  }
};


