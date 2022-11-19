import { Component } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';

import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import WorkoutsPage from './pages/WorkoutsPage/WorkoutsPage';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';

export default class App extends Component {



  render() {
    return (
      <div className="App">
        <Header />
        <Nav />
        <Routes>
          <Route path="/fit" element={<HomePage />} />
          <Route path="/fit/myworkouts" element={<WorkoutsPage />} />
          <Route path="/fit/about" element={<AboutPage />} />
          <Route path="/fit/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/fit" replace />} />
        </Routes>
      </div>
    );
  }
}


