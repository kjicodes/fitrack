import { Link } from 'react-router-dom';
import './Home.css';
import Workout from '../../workout.png';
import WeightLifting from '../../weightlifting.png';
import Jogging from '../../jogging.png';
import Health from '../../healthy-lifestyle.png';
import Schedule from '../../schedule.png';
import Yoga from '../../yoga.png';
import Team from '../../training.png';

export default function Home() {
  return (
    <div className="Home">
      <h3>Track your way to optimal <span>health.</span></h3>
      <div>
        <ul>
          <li><img src={Schedule} alt="Schedule"/></li>
          <li><img src={Workout} alt="Workout"/></li>
          <li><img src={WeightLifting} alt="WeightLifting"/></li>
          <li><img src={Jogging} alt="Jogging"/></li>
          <li><img src={Yoga} alt="Yoga"/></li>
          <li><img src={Team} alt="Team"/></li>
          <li><img src={Health} alt="Health" /></li>
        </ul>
      </div>
      <Link className="waves-effect waves-light btn" to="/myworkouts">Start Tracking</Link>
    </div>
  )
}
