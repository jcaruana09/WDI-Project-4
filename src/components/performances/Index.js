import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SortFilterPerformances from './SortFilterPerformances';
import _ from 'lodash';

// const APIKEY = 'hagpkg48ywufnu8yhshk959z';

class PerformancesIndex extends React.Component {

  state = {
    performances: [],
    search: '',
    sort: 'name|asc'
  }
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

  handleChange = ({ target: { name, value }}) => {
    this.setState({ [name]: value });
  }

  sortedFilteredPerformances = () => {
    const [field, dir] = this.state.sort.split('|');
    const re = new RegExp(this.state.search, 'i');
    const filtered = _.filter(this.state.performances, performance => {
      return re.test(performance.name) || re.test(performance.venue);
    });
    return _.orderBy(filtered, field, dir);
  }

  render() {
    return(
      <div>
        <h1>Performance Index</h1>
        <SortFilterPerformances
          handleChange={this.handleChange}
          data={this.state}
        />
        <ul>
          <div className="columns is-multiline">
            {this.sortedFilteredPerformances().map(performance => {
              return <div className="column is-one-third-desktop is-half-tablet" key={performance._id}>
                <li>
                  <Link to={`/performances/${performance._id}`}>
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
                  </Link>
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
