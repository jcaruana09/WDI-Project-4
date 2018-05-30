import React from 'react';
import PerformanceForm from './Form';
import axios from 'axios';

class PerformanceEdit extends React.Component {

  state = {}

  componentDidMount(){
    axios
      .get(`/api/performances/${this.props.match.params.id}`)
      .then(res => this.setState(res.data));
  }

  handleChange = ({ target: { name, value }}) => {
    this.setState({ [name]: value });
  }

  handleSubmit = e => {
    e.preventDefault();
    const { id } = this.props.match.params;
    axios.put(`/api/performances/${this.props.match.params.id}`, this.state)
      .then(() => this.props.history.push(`/performances/${id}`));
  }

  render(){
    if(Object.keys(this.state).length === 0) return null;
    return <PerformanceForm
      performance={this.state}
      handleChange={this.handleChange}
      handleSubmit={this.handleSubmit}
    />;
  }
}

export default PerformanceEdit;
