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
        <div className="hero-image" style={{ backgroundImage: `url(${performance.image})`}}>
          <div className="hero-content">
            <div className="hero-title">
              <p className="hero-venue">{performance.venue}</p>
            </div>
            <p className="hero-description">{performance.description}</p>
            <div className="hero-details">
              <p className="hero-time">Running Time: {performance.runningTime} Minutes</p>
            </div>
          </div>
          <Link
            to={`/performances/${performance._id}/edit`}
            className="button"
          >Edit</Link>
          <button className="button" onClick={this.handleDelete}>Delete</button>
        </div>

        <div className="posts-container">
          <p className="title is-2">Posts</p>
          <div className="card">
            {this.state.performance.reviews.map(review =>
              <div key={review._id}>
                <p>{review.rating}/5</p>
                <p>{review.review}</p>
                <p>{review.user}</p>
                <button className="button" onClick={() => this.handleReviewDelete(review._id)}>Delete</button>
              </div>
            )}
          </div>
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
