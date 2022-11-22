import './LoginForm';

export default class LoginForm extends Component {

  state = {
    email: "",
    password: "",
    error: ""
  };

  render(){
    return (
      <div>
        <div className="form-container" onSubmit={this.handleSubmit}>
          <form autoComplete="off" >
            <label>Email</label>
            <input type="text" name="email" value={this.state.email} onChange={this.handleChange} required />
            <label>Password</label>
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
            <button type="submit">LOG IN</button>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    )
  }
};
