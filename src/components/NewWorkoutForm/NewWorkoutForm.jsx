import { Component } from 'react';
import './NewWorkoutForm.css';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from 'react-datepicker';

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
    let body = { 
      startDate: this.state.startDate,
      time: this.state.time,
      type: this.state.type,
      duration: this.state.duration,
      comment: this.state.comment
    };

    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    };

    await fetch("/api/workouts", options)
      .then(res => res.json())
      .then(data => {
        this.props.getWorkouts();
        this.setState({ 
          startDate: "",
          time: "",
          type: "",
          duration: "",
          comment: ""
        })
      })
  };

  render() {
    return (
      <div className="NewWorkoutForm">
        <h3>Enter</h3>
        <div>
          <label>Date </label>
          <DatePicker
            wrapperClassName="datePicker"
            name="startDate"
            selected={this.state.startDate}
            dateFormat="dd/MM/yyyy"
            popperPlacement="bottom-end"
            onChange={this.handleDateChange}
            required
          />
        </div>
        <div>
          <label for="time">When </label>
          <input 
            id="time"
            name="time"
            type="time"
            value={this.state.time}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label for="type">Workout </label>
          <input 
          type="text"
            id="type"
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
        <button class="waves-effect waves-light yellow btn" onClick={this.handleSubmit}>Add Workout</button>
      </div>
    )
  }
};

