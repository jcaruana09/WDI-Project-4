import React from 'react';
import PerformanceForm from './Form';
import axios from 'axios';

class PerformancesNew extends React.Component {

  state = {}

  handleChange = ({ target: { name, value }}) => {
    this.setState({ [name]: value });
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    axios.post('/api/performances', this.state)
      .then(() => this.props.history.push('/performances'));
  }

  render() {
    return  <PerformanceForm
      performance={this.state}
      handleChange={this.handleChange}
      handleSubmit={this.handleSubmit}
    />;
  }
}

export default PerformancesNew;
