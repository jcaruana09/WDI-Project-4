import React from 'react';
import axios  from 'axios';
import { Link } from 'react-router-dom';

class PerformanceShow extends React.Component {

  state = {};

  componentDidMount() {
    // console.log(this.props.match.params.id);
    axios.get(`/api/performances/${this.props.match.params.id}`)
      .then(res => this.setState({ performance: res.data }));
  }

  handleDelete = () => {
    axios.delete(`/api/performances/${this.props.match.params.id}`)
      .then(() => this.props.history.push('/performances'));
  }

  render() {

    const { performance } = this.state;
    if(!performance) return null;

    return(
      <div>

        <p className="title is-1">{performance.name}</p>
        <p className="subtitle is-3">{performance.venue}</p>
        <p className="subtitle is-5">{performance.runningTime} minutes</p>
        <div className="hero-image">
          <img src={performance.image} />
        </div>
        <p>{performance.description}</p>
        <Link
          to={`/performances/${performance._id}/edit`}
          className="button"
        >Edit</Link>
        <button className="button" onClick={this.handleDelete}>Delete</button>
      </div>
    );
  }
}

export default PerformanceShow;
