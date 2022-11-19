import { Component } from 'react';
import './NewWorkout.css';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from 'react-datepicker';



export default class NewWorkout extends Component {

  state = {
    workouts: [],
    startDate: new Date(),
    time: "",
    type: "",
    duration: "",
    comment: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  };

  handleChangeDate = date => {
    this.setState({ startDate: date })
  };

  addWorkout = e => {
    e.preventDefault();

    let newWorkout = {
      startDate: this.state.startDate,
      time: this.state.time,
      type: this.state.type,
      duration: this.state.duration,
      comment: this.state.comment
    };

    this.setState({
      workouts: [...this.state.workouts, newWorkout],
      startDate: "",
      time: "",
      type: "",
      duration: "",
      comment: ""
    });
  };

  render() {
    return (
      <div className="NewWorkout">
        <div className="Section">
          <h3>Enter New Workout</h3>
          <form onSubmit={this.addWorkout}>
            <div>
              <label>DATE </label>
              <DatePicker
                id="date"
                name="startDate"
                selected={this.state.startDate}
                dateFormat="dd/MM/yyyy"
                popperPlacement="bottom-end"
                onChange={this.handleChangeDate}
                required
              />
            </div>
            <div>
              <label>WHEN </label>
              <input 
                name="time"
                type="time"
                value={this.state.time}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label>WORKOUT </label>
              <input 
                name="type"
                value={this.state.type}
                onChange={this.handleChange}
                placeholder="Enter type"
                required
                pattern=".{2,}"
              />
            </div>
            <div>
              <label>DURATION </label>
              <input 
                name="duration"
                type="number"
                value={this.state.duration}
                onChange={this.handleChange}
                placeholder="Enter in minutes"
                required
                pattern=".{2,}"
              />
            </div>
            <div>
              <label>GOALS FOR NEXT TIME </label>
              <br />
              <textarea
                name="comment"
                value={this.state.comment}
                onChange={this.handleChange}
                placeholder="What's next?"
                required
                pattern=".{2,}"            
              />
            </div>
            <br />
            <div id="btn">
              <button>Add Workout</button>
            </div>
          </form>
        </div>
        <div id="divider"></div>
        <div className="Section">
          <h2>My Workouts</h2>
          {this.state.workouts.map((w) => (
            <div>
              <div>{w.startDate}</div> <div>{w.type}</div> <div>{w.duration}</div> <div>{w.comment}</div>
            </div>
          ))}
        </div>
      </div>
    )
  }
};