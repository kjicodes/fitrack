import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';
import 'materialize-css/dist/css/materialize.min.css';

import M from 'materialize-css/dist/js/materialize.min.js';
import Footer from '../../components/Footer/Footer';


export default class Nav extends Component {

  componentDidMount() {
    let sidenav = document.querySelector('#slide-out');
    M.Sidenav.init(sidenav, {});
  }

  render() {
    return (
      <div className="Nav">
        <nav>
          <div className="container">
            <NavLink 
              id="nav-menu"
              data-target="slide-out" 
              className="sidenav-trigger show-on-large"
            >
              <i className="material-icons">menu</i>
            </NavLink>
            <ul id="nav-mobile" className="hide-on-med-and-down main-nav">
              <li>
                <NavLink to="/home">HOME</NavLink>
              </li>
              <li>
                <NavLink to="/workouts">WORKOUTS</NavLink>
              </li>
              <li>
                <NavLink to="/about">ABOUT</NavLink>
              </li>
              <li>
                <NavLink to="/contact">CONTACT</NavLink>
              </li>
            </ul>
          </div>
        </nav>

  
        <div id="slide-out" className="sidenav">
          <ul>
            <li>
              <NavLink to="/home">HOME</NavLink>
            </li>
            <li>
              <NavLink to="/workouts">WORKOUTS</NavLink>
            </li>
            <li>
              <NavLink to="/about">ABOUT</NavLink>
            </li>
            <li>
              <NavLink to="/contact">CONTACT</NavLink>
            </li>
          </ul>

          <div>
            <Footer />
          </div>
        </div>


      </div>
    )
  }
};
