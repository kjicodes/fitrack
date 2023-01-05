import { Component } from 'react';
import './NewWorkoutForm.css';

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


export default class NewWorkoutForm extends Component {

  state = {
    startDate: new Date(),
    time: "",
    type: "",
    duration: "",
    comment: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  };

  handleDateChange = date => {
    this.setState({ startDate: date })
  };

  handleSubmit = async () => {
    try {
      let fetchResponse = await fetch("/api/workouts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          startDate: this.state.startDate,
          time: this.state.time,
          type: this.state.type,
          duration: this.state.duration,
          comment: this.state.comment
        })
      })
      let serverResponse = await fetchResponse.json()
      console.log("Success: ", serverResponse)
      this.props.getWorkouts()
      this.setState({ 
        startDate: "",
        time: "",
        type: "",
        duration: "",
        comment: ""
      })
    } catch (err) {
      console.log("Error: ", err)
    }
  };

  render() {
    return (
      <div className="NewWorkoutForm">
        <h3>Enter </h3>
        <div>
          <label>Date </label>
          <DatePicker
            className="datePicker"
            name="startDate"
            selected={this.state.startDate} 
            onChange={this.handleDateChange}
            dateFormat="MM/dd/yyyy"
            popperPlacement="top-end"
            required
          />
        </div>
        <div>
          <label>Time </label>
          <input 
            name="time"
            value={this.state.time} 
            onChange={this.handleChange}
            placeholder="Enter time"
            required
            pattern=".{2,}"
          />
        </div>
        <div>
          <label>Workout </label>
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
          <label>Duration </label>
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
          <label>Goals </label>
          <textarea
            className="materialize-textarea"
            name="comment"
            value={this.state.comment}
            onChange={this.handleChange}
            placeholder="What's next?"
            required
            pattern=".{2,}"            
          />
        </div>
        <button className="waves-effect waves-light yellow btn" onClick={this.handleSubmit}>Add Workout</button>
      </div>
    )
  }
};

