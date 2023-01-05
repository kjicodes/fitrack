import { Link } from 'react-router-dom';
import './Home.css';

import Schedule from '../../schedule.png';
import Workout from '../../workout.png';
import WeightLifting from '../../weightlifting.png';
import Jogging from '../../jogging.png';
import Yoga from '../../yoga.png';
import Team from '../../training.png';
import Health from '../../healthy-lifestyle.png';

export default function Home() {
  return (
    <div className="Home">
      <h3>Track your way to optimal <span>health.</span></h3>
      <div className="ListIcons">
        <ul>
          <li><img src={Schedule} alt="Schedule" draggable={false} /></li>
          <li><img src={Workout} alt="Workout" draggable={false} /></li>
          <li><img src={WeightLifting} alt="WeightLifting" draggable={false} /></li>
          <li><img src={Jogging} alt="Jogging" draggable={false} /></li>
          <li><img src={Yoga} alt="Yoga" draggable={false} /></li>
          <li><img src={Team} alt="Team" draggable={false} /></li>
          <li><img src={Health} alt="Health" draggable={false} /></li>
        </ul>
      </div>
      <Link className="waves-effect waves-light btn" to="/workouts">
        Start Tracking
      </Link>
    </div>
  )
};
