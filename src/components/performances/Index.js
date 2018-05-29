import React from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';

// const APIKEY = 'hagpkg48ywufnu8yhshk959z';

class PerformancesIndex extends React.Component {

  state = { performances: [] }
  // componentDidMount() {
  //   axios.get('https://api.londontheatredirect.com/rest/v2/Events', {
  //     headers: {
  //       'Api-Key': APIKEY
  //     }
  //   })
  //     .then(res => this.setState({ performances: res.data }));
  // }

  componentDidMount() {
    axios.get('/api/performances')
      .then(res => this.setState({ performances: res.data }));
  }

  render() {
    console.log(this.state.performances);
    return(
      <div>
        <h1>Performance Index</h1>
        <ul>
          <div className="columns is-multiline">
            {this.state.performances.map(function(performance) {
              return <div className="column is-one-third-desktop is-half-tablet" key={performance._id}>
                <li>
                  <div className="card">
                    <div className="card-image">
                      <figure className="image is-4by3">
                        <img src={performance.image} />
                      </figure>
                    </div>
                    <div className="card-content">
                      <div className="media-content">
                        <p className="title is-5">{performance.name}</p>
                        <p className="subtitle is-6">{performance.venue}</p>
                      </div>
                    </div>
                  </div>
                </li>
              </div>;
            })}
          </div>
        </ul>
      </div>
    );
  }
}

export default PerformancesIndex;
