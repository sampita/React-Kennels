import React, { Component } from 'react';

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img id="smallicon" src={require('./location.png')} alt="Dog's Location" />
          </picture>
          <h5>Location: <span className="card-location">{this.props.location.name}</span></h5>
          <button type="button" onClick={() => this.props.deleteLocation(this.props.location.id)}>Delete</button>
        </div>
      </div>
    );
  }
}

export default LocationCard;