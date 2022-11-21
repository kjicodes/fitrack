import { Component } from 'react';
import './ContactForm.css';

export default class ContactForm extends Component {

  state = {
    name: "",
    email: "",
    message: ""
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value
    })
  };

  handleSubmit = async () => {
    let body = { 
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    };

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
        this.props.getContacts();
        this.setState({ 
          name: "",
          email: "",
          message: ""
        })
      })
  }

  render() {
    return (
      <div className="ContactForm">
        <h2>Contact Us</h2>
        <div>
          <input 
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="Enter Name"
          />
          <input
            name="email"
            type="text"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder="Enter Email"
          />
          <input 
            name="message"
            type="text"
            value={this.state.message}
            onChange={this.handleChange}
            placeholder="Enter Message"
          />
        </div>
        <div>
          <button className="waves-effect waves-light btn" onClick={this.handleSubmit}>Submit</button>
        </div>
      </div>
    )
  }
};
