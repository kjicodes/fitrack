import { Component } from 'react';
import './WorkoutsPage.css';

import Header from '../../components/Header/Header';
import Nav from '../../components/Nav/Nav';
import NewWorkoutPost from '../../components/NewWorkoutPost/NewWorkoutPost';
import NewWorkoutForm from '../../components/NewWorkoutForm/NewWorkoutForm';

export default class WorkoutsPage extends Component {

  state = {
    workouts: []
  };

  getWorkouts = async () => {
    await fetch("/api") // fetch call
    .then(res => res.json()) // initial fetch then returns a response obj (res), then we call json on it which will PULL the json body out of our response
    .then(workouts => this.setState({ workouts })) // then data we get back (workouts)
  };

  // need to call getWorkouts()
  // once component mounts, then we can fetch data from db
  componentDidMount() {
    this.getWorkouts()
  };

  render() {
    return (
      <div>
        <Header />
        <Nav />
        <div className="WorkoutsPage">
          <div className="Section">
            <h3>Enter</h3>
            <NewWorkoutForm getWorkouts={this.getWorkouts} />
          </div>
          <div id="divider"></div>
          <div className="Section">
            <h2>My Workouts</h2>
            {this.state.workouts.length ?
              this.state.workouts.map((w, idx) => (
                <NewWorkoutPost key={idx} workout={w} />))
              :
              <h4>No Workouts</h4>
            }
          </div>
        </div>
      </div>
    )
  }
};