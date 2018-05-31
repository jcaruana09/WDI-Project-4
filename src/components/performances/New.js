import React from 'react';
import axios from 'axios';
import _ from 'lodash';
import Promise from 'bluebird';
import striptags from 'striptags';
import decode from 'unescape';

class PerformancesNew extends React.Component {

  state = {
    loading: true
  }

  componentDidMount() {

    const performances = JSON.parse(localStorage.getItem('performances'));
    const lastUpdate = localStorage.getItem('lastUpdate');

    if(performances && lastUpdate + 1000 * 60 * 60 * 24 > Date.now()) {
      return this.setState({ performances, loading: false });
    }

    Promise.props({
      performances: axios.get('https://api.londontheatredirect.com/rest/v2/Events', {
        headers: {
          'Api-Key': 'hagpkg48ywufnu8yhshk959z'
        }
      }).then(res => res.data.Events),
      venues: axios.get('https://api.londontheatredirect.com/rest/v2/Venues', {
        headers: {
          'Api-Key': 'hagpkg48ywufnu8yhshk959z'
        }
      }).then(res => res.data.Venues)
    })
      .then(data => {
        const performances = data.performances.map(event => {
          event.Venue = data.venues.find(venue => venue.VenueId === event.VenueId);
          delete event.VenueId;
          return event;
        })
          .filter(event => event.Venue.City === 'London')
          .map(event => {
            return {
              ltdId: event.EventId,
              name: event.Name,
              startDate: event.StartDate,
              endDate: event.EndDate,
              runningTime: event.RunningTime,
              venue: event.Venue.Name,
              image: event.MainImageUrl,
              description: decode(striptags(event.Description), 'all')
            };
          });

        this.setState({ performances });

        localStorage.setItem('performances', JSON.stringify(performances));
        localStorage.setItem('lastUpdate', Date.now());
      });
  }

  handleSearch = ({ target: { value } }) => {
    this.setState({ search: value });
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    axios.post('/api/performances', this.state)
      .then(() => this.props.history.push('/performances'));
  }

  filteredPerformances = () => {
    const re = new RegExp(this.state.search, 'i');
    return _.filter(this.state.performances, performance => re.test(performance.name));
  }

  addPerformance = (performance) => {
    axios.post('/api/performances', performance)
      .then(res => this.props.history.push(`/performances/${res.data._id}`));
  }

  render() {
    return (
      <div>
        <form>
          <div className="field">
            <input className="input" placeholder="Search" onChange={this.handleSearch}/>
          </div>
        </form>
        {this.state.loading && <div>Loading...</div>}
        <div className="columns is-multiline">
          {this.filteredPerformances().map(performance =>
            <div key={performance.ltdId} className="column is-one-third" onClick={() => this.addPerformance(performance)}>
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
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default PerformancesNew;
