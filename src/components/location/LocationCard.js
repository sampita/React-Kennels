import React, { Component } from 'react';

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img id="smallicon" src={require('./location.png')} alt="Dog's Location" />
          </picture>
          <h5>Location: <span className="card-petlocation">Paris, France</span></h5>
        </div>
      </div>
    );
  }
}

export default LocationCard;