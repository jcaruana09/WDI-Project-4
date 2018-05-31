import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch
  // Link
} from 'react-router-dom';

import Home from './components/common/Home';
import Navbar from './components/common/Navbar';

import PerformancesIndex from './components/performances/Index';
import PerformancesNew from './components/performances/New';
import PerformanceShow from './components/performances/Show';
import AuthRegister from './components/auth/Register';
import AuthLogin from './components/auth/Login';

import 'bulma';
import './scss/style.scss';

class App extends React.Component {

  render() {
    return (
      <Router>
        <main>
          <Navbar />
          <section className="section">
            <div className="container">
              <Switch>
                <Route path="/performances/new" component={PerformancesNew} />
                <Route path="/performances/:id" component={PerformanceShow} />
                <Route path="/performances" component={PerformancesIndex} />
                <Route path="/login" component={AuthLogin} />
                <Route path="/register" component={AuthRegister} />
                <Route path="/" component={Home} />
              </Switch>
            </div>
          </section>
        </main>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
