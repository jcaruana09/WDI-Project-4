import React from 'react';
import axios  from 'axios';
import { Link } from 'react-router-dom';

class PerformanceShow extends React.Component {

  state = {}

  componentDidMount() {
    // console.log(this.props.match.params.id);
    axios.get(`/api/performances/${this.props.match.params.id}`)
      .then(res => this.setState({ performance: res.data }));
  }

  handleDelete = () => {
    axios.delete(`/api/performances/${this.props.match.params.id}`)
      .then(() => this.props.history.push('/performances'));
  }

  handleReviewChange = ({ target: { name, value }}) => {
    this.setState({ [name]: value });
  }

  handleReviewSubmit = e => {
    e.preventDefault();
    axios.post(`/api/performances/${this.props.match.params.id}`, this.state)
      .then(res => this.setState({ performance: res.data }));
  }

  handleReviewDelete = (reviewId) => {
    axios.delete(`/api/performances/${this.props.match.params.id}/reviews/${reviewId}`)
      .then(res => this.setState({ performance: res.data }));
  }

  render() {
    const { performance } = this.state;
    if(!performance) return null;
    console.log(this.state.performance.reviews);
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

        <div className="posts-container">
          {this.state.performance.reviews.map(review =>
            <div className="card" key={review._id}>
              <p>{review.rating}/5</p>
              <p>{review.review}</p>
              <p>{review.user}</p>
              <button className="button" onClick={() => this.handleReviewDelete(review._id)}>Delete</button>
            </div>
          )}
          <form onSubmit={this.handleReviewSubmit}>
            <input className="input" type="text" placeholder="Add Rating" name="rating" onChange={this.handleReviewChange} />
            <input className="input" type="text" placeholder="Add Content" name="review" onChange={this.handleReviewChange} />
            <button className="button">Create Post</button>
          </form>
        </div>
      </div>
    );
  }
}

export default PerformanceShow;
