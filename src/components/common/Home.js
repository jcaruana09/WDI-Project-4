import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

  return(
    <div>
      <div className="columns">
        <div className="column is-one-quarter">
          <p className="home-title">Theatre Critic</p>
          <div className="home-nav">
            <Link className="home-login" to="/login">Login</Link>
            <Link className="home-register" to="/register">Sign Up</Link>
            <Link className="home-shows" to="/performances">Shows</Link>
          </div>
        </div>
        <div className="column is-three-quarters">
          <div className="columns is-multiline is-gapless">
            <div className="column is-one-third">
              <img className="home-image" src="https://media.londontheatredirect.com/Event/Chicago/event-list-image_14825.jpg" />
            </div>
            <div className="column is-one-third">
              <img className="home-image" src="https://www.londontheatredirect.com/images/Event/LesMiserables/Les-Miserables-13545.jpg" />
            </div>
            <div className="column is-one-third">
              <img className="home-image" src="https://media.londontheatredirect.com/Event/TheBookOfMormon/event-list-image_14132.jpg" />
            </div>
            <div className="column is-one-third">
              <img className="home-image" src="https://www.londontheatredirect.com/images/Event/ThePlayThatGoesWrong/The-Play-That-Goes-Wrong-9491.jpg" />
            </div>
            <div className="column is-one-third">
              <img className="home-image" src="https://media.londontheatredirect.com/Event/TINATheTinaTurnerMusical/event-list-image_15796.jpg" />
            </div>
            <div className="column is-one-third">
              <img className="home-image" src="https://media.londontheatredirect.com/Event/ImperiumIConspirator/event-list-image_15447.jpg" />
            </div>
            <div className="column is-one-third">
              <img className="home-image" src="https://media.londontheatredirect.com/Event/TrainspottingLive/event-list-image_16204.jpg" />
            </div>
            <div className="column is-one-third">
              <img className="home-image" src="https://media.londontheatredirect.com/Event/Tartuffe/event-list-image_14837.jpg" />
            </div>
            <div className="column is-one-third">
              <img className="home-image" src="https://www.londontheatredirect.com/images/Event/MotownTheMusical/Motown-The-Musical-9807.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
