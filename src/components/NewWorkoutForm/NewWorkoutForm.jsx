import { Component } from 'react';
import './NewWorkoutForm.css';

export default class NewWorkoutForm extends Component {

  state = {
    workout: "",
    repetitions: 0,
    duration: 0
  }

  render() {
    return (
      <div className="NewWorkout">
        <div>
          <span>Workout Type: </span>
            <input
              name="workout"
              value={this.state.workout}
              requiredpattern=".{2,}"
            />
        </div>
        <div>
          <span>Number of Reps: </span>
            <input 
              name="repetitions"
              value={this.state.repetitions}
              required
              pattern=".{2,}"
            />
        </div>
        <div>
          <span>Duration (in minutes): </span>
            <input 
              name="duration"
              value={this.state.duration}
              required
              pattern=".{2,}"
            />
        </div>
      </div>
    )
  }
};
