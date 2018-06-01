import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SortFilterPerformances from './SortFilterPerformances';
import _ from 'lodash';

class PerformancesIndex extends React.Component {

  state = {
    performances: [],
    search: '',
    sort: 'name|asc'
  }

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
        <SortFilterPerformances
          handleChange={this.handleChange}
          data={this.state}
        />
        <ul>
          <div className="columns is-multiline">
            {this.sortedFilteredPerformances().map(performance =>
              <div className="column is-half-desktop is-half-tablet" key={performance._id}>
                <li>
                  <Link to={`/performances/${performance._id}`}>
                    <div className="index-hero-image" style={{ backgroundImage: `url(${performance.image})`}}>
                      <div className="index-hero-content">
                        <div className="columns is-multiline">
                          <div className="column is-two-thirds">
                            <div className="index-hero-title">
                              <p>{performance.name}</p>
                            </div>
                            <div className="index-hero-details">
                              <p className="index-hero-venue">{performance.venue}</p>
                            </div>
                          </div>
                          <div className="column is-one-third">
                            <p className="index-hero-time">{performance.runningTime}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
              </div>
            )}
          </div>
        </ul>
      </div>
    );
  }
}

export default PerformancesIndex;
