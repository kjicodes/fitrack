import 'materialize-css/dist/css/materialize.min.css';
import './Nav.css';

export default function Nav() {
  return (
    <nav>
      <div className="nav-wrapper">
        <ul className="center hide-on-med-and-down">
          <li>
            <a href="">WORKOUTS</a>
          </li>
          <li>
            <a href="">ABOUT</a>
          </li>
          <li>
            <a href="">HOME</a>
          </li>
          <li>
            <a href="">CONTACT</a>
          </li>
        </ul>
      </div>
    </nav>
  )
};
