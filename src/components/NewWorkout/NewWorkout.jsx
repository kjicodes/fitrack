import { Component } from 'react';
import './NewWorkout.css';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from 'react-datepicker';


export default class NewWorkout extends Component {

  state = {
    workouts: [],
    date: new Date(),
    type: "",
    duration: "",
    comment: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  };

  addWorkout = e => {
    e.preventDefault();

    let newWorkout = {
      date: this.state.date,
      type: this.state.type,
      duration: this.state.duration,
      comment: this.state.comment
    };

    this.setState({
      workouts: [...this.state.workouts, newWorkout],
      date: "",
      type: "",
      duration: "",
      comment: ""
    });
  };

  render() {
    return (
      <div className="NewWorkout">
        <div className="Section">
          <h2>My Workouts</h2>
          {this.state.workouts.map((w) => (
            <div>
              <div>{w.date}</div> <div>{w.type}</div> <div>{w.duration}</div> <div>{w.comment}</div>
            </div>
          ))}
        </div>
        <div id="divider"></div>
        <div className="Section">
          <h3>New Workout</h3>
          <form onSubmit={this.addWorkout}>
            <label>
              <span>DATE </span>
              <input
                name="date"
                value={this.state.date}
                onChange={this.handleChange}
                required
                pattern=".{2,}"
              />
            </label>
            <label>
              <span>WORKOUT </span>
              <input 
                name="type"
                value={this.state.type}
                onChange={this.handleChange}
                required
                pattern=".{2,}"
              />
            </label>
            <label>
              <span>DURATION (mins) </span>
              <input 
                name="duration"
                value={this.state.duration}
                onChange={this.handleChange}
                required
                pattern=".{2,}"
              />
            </label>
            <label>
              <span>GOALS FOR NEXT TIME </span>
              <textarea
                name="comment"
                value={this.state.comment}
                onChange={this.handleChange}
                required
                pattern=".{2,}"            
              />
            </label>
            <br />
            <div id="btn">
              <button>Add Workout</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
};