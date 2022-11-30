import { Component } from 'react';
import './NewWorkoutForm.css';


export default class NewWorkoutForm extends Component {

  state = {
    time: "",
    type: "",
    duration: "",
    comment: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  };

  handleSubmit = async () => {
    try {
      let fetchResponse = await fetch("/api/workouts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
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
        <p>(For Today)</p>
        <div>
          <label>Time </label>
          <input 
            name="time"
            value={this.state.time} 
            onChange={this.handleChange}
            placeholder="Enter hour:minute AM/PM"
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

