import './Home.css';
import Workout from '../../workout.png'
import WeightLifting from '../../weightlifting.png';
import Lunges from '../../lunges.png';
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
          <li><img src={Schedule} alt="Schedule" /></li>
          <li><img src={Workout} alt="Workout"/></li>
          <li><img src={WeightLifting} alt="WeightLifting"/></li>
          <li><img src={Lunges} alt="Lunges"/></li>
          <li><img src={Yoga} alt="Yoga"/></li>
          <li><img src={Team} alt="Team"/></li>
          <li><img src={Health} alt="Health" /></li>
        </ul>
      </div>
      <a className="waves-effect waves-light btn">Start Tracking</a>
    </div>
  )
}
