import { Component } from 'react';
import './WorkoutsPage.css';
import { Card } from 'semantic-ui-react';

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
            <NewWorkoutForm getWorkouts={this.getWorkouts} />
          </div>
          <div className="Section" id="divider"></div>
          <div className="Section">
            <h2>My Workouts</h2>
            <div className="Workouts">
              <Card.Group>
                {this.state.workouts.length ?
                  this.state.workouts.map((w, idx) => (
                    <NewWorkoutPost key={idx} workout={w} />))
                  :
                  <h4>No Workouts</h4>
                }
              </Card.Group>
            </div>
          </div>
        </div>
      </main>
    )
  }
};