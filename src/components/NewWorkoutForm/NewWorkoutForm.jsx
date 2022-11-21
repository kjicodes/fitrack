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
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value}) // computed property syntax
  };

  handleDateChange = date => {
    this.setState({ startDate: date })
  };

  handleSubmit = async () => {
    // First we build the body
    let body = { 
      startDate: this.state.startDate,
      time: this.state.time,
      type: this.state.type,
      duration: this.state.duration,
      comment: this.state.comment
    }
    // We need an options object for our fetch call
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    };
    await fetch("/api", options)
      .then(res => res.json())
      .then(data => {
        // this.getWorkouts();
        // clear out this.state.content
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
        <div>
          <label>DATE </label>
          <DatePicker
            name="startDate"
            selected={this.state.startDate}
            dateFormat="dd/MM/yyyy"
            popperPlacement="bottom-end"
            onChange={this.handleDateChange}
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
        <div id="add-btn">
          <button className="waves-effect waves-light btn" onClick={this.handleSubmit}>Add Workout</button>
        </div>
      </div>
    )
  }
};

