import { Component } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';

import Nav from '../../components/Nav/Nav';
import Header from '../../components/Header/Header';
import HomePage from '../HomePage/HomePage';
import WorkoutsPage from '../WorkoutsPage/WorkoutsPage';
import AboutPage from '../AboutPage/AboutPage';
import ContactPage from '../ContactPage/ContactPage';

export default class App extends Component {


  render() {
    return (
      <main className="App">
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/myworkouts" element={<WorkoutsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    );
  }
}


