import { NavLink } from 'react-router-dom';
import './Nav.css';


export default function Nav() {
  return (
    <nav>
      <div className="nav-wrapper">
        <ul className="center hide-on-med-and-down">
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
  )
};
