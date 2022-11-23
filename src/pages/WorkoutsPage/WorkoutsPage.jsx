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
    await fetch("/api/workouts")
    .then(res => res.json())
    .then(workouts => this.setState({ workouts })) 
  };

  componentDidMount() {
    this.getWorkouts()
  };

  render() {
    return (
      <main>
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
                <NewWorkoutPost key={idx} workout={w} deleteWorkout={this.deleteWorkout} />))
              :
              <h4>No Workouts</h4>
            }
          </div>
        </div>
      </main>
    )
  }
};