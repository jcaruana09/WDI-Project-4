import React from 'react';
import axios from 'axios';
import Auth from '../../lib/Auth';
import Flash from '../../lib/Flash';

class AuthRegister extends React.Component {

  handleChange = ({ target: {name, value }}) => {
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    // prevents the default action
    // otherwise the page would refresh
    e.preventDefault();
    // this.state = form data
    axios.post('/api/register', this.state)
      .then(res => {
        Auth.setToken(res.data.token);
        Flash.setMessage('info', res.data.message);
      })
      .then(() => this.props.history.push('/performances'))
      .catch(() => {
        Flash.setMessage('danger', 'Invalid credentials');
        this.props.history.replace('/register');
      });
  }

  render(){
    return(
      <div className="auth-section">
        <form className="auth-card" onSubmit={this.handleSubmit}>
          <h1>Register</h1>
          <div className="field">
            <label className="label">Username</label>
            <input className="input" type="text" name="username" placeholder="JohnDoe09" onChange={this.handleChange} />
          </div>
          <div className="field">
            <label className="label">Email</label>
            <input className="input" type="text" name="email" placeholder="JohnDoe09@gmail.com" onChange={this.handleChange} />
          </div>
          <div className="field">
            <label className="label">Password</label>
            <input className="input" type="password" name="password" onChange={this.handleChange} />
          </div>
          <div className="field">
            <label className="label">Password Confirmation</label>
            <input className="input" type="password" name="passwordConfirmation" onChange={this.handleChange} />
          </div>
          <div className="control">
            <button className="button">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AuthRegister;
