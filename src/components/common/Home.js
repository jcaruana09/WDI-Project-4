import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return(
    <div>
      <h1>Theatre Review</h1>
      <div className="columns is-gapless">
        <div className="column is-one-quarter">
          <Link className="home-nav" to="/login">Login</Link>
          <Link className="home-nav" to="/register">Sign Up</Link>
          <Link className="home-nav" to="/performances">Shows</Link>
        </div>
        <div className="column">
          <figure className="image is-3by3">
            <img className="home-image" src="http://bookofmormonbroadway.com/images/bom-og.png" />
            <img className="home-image" src="https://vignette.wikia.nocookie.net/lesmiserables/images/3/37/LesMis1.jpg/revision/latest?cb=20130126123538" />
            <img className="home-image" src="https://plymouththeatreroyal-assets.s3.amazonaws.com/assets/Image/6865-fitandcrop-890x500.jpg" />
          </figure>
        </div>
        <div className="column">
          <figure className="image is-3by3">
            <img className="home-image" src="http://bookofmormonbroadway.com/images/bom-og.png" />
            <img className="home-image" src="https://vignette.wikia.nocookie.net/lesmiserables/images/3/37/LesMis1.jpg/revision/latest?cb=20130126123538" />
            <img className="home-image" src="https://plymouththeatreroyal-assets.s3.amazonaws.com/assets/Image/6865-fitandcrop-890x500.jpg" />
          </figure>
        </div>
        <div className="column">
          <figure className="image is-3by3">
            <img className="home-image" src="http://bookofmormonbroadway.com/images/bom-og.png" />
            <img className="home-image" src="https://vignette.wikia.nocookie.net/lesmiserables/images/3/37/LesMis1.jpg/revision/latest?cb=20130126123538" />
            <img className="home-image" src="https://plymouththeatreroyal-assets.s3.amazonaws.com/assets/Image/6865-fitandcrop-890x500.jpg" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Home;
