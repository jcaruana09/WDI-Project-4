import React from 'react';
import axios from 'axios';
import Auth from '../../lib/Auth';
import Flash from '../../lib/Flash';

class AuthLogin extends React.Component {
  state = {}

  handleChange = ({ target: { name, value }}) => {
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    // prevents the default action
    // otherwise the page would refresh
    e.preventDefault();
    // this.state = form data
    axios.post('/api/login', this.state)
      .then(res => {
        Auth.setToken(res.data.token);
        Flash.setMessage('info', res.data.message);
      })
    // pushes the index route into the history of the window object
    // this takes the user to the index page.
      .then(() => this.props.history.push('/performances'))
      .catch(() => {
        Flash.setMessage('danger', 'Invalid credentials');
        this.props.history.replace('/login');
      });
  }

  render(){
    return(
      <div className="auth-section">
        <h1>Login</h1>
        <form className="auth-card" onSubmit={this.handleSubmit}>
          <div className="field">
            <label className="label">Email</label>
            <input className="input" type="text" placeholder="JohnDoe09@gmail.com" onChange={this.handleChange} />
          </div>
          <div className="field">
            <label className="label">Password</label>
            <input className="input" type="password" onChange={this.handleChange} />
          </div>
          <div className="control">
            <button className="button">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AuthLogin;
