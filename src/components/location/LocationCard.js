import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img id="smallicon" src={require('./location.png')} alt="Kennel Location" />
          </picture>
          <h5>Location: <span className="card-location">{this.props.location.name}</span></h5>
          <Link to={`/locations/${this.props.location.id}`}><button>Details</button></Link>
          <FontAwesomeIcon icon="trash-alt" type="button" onClick={() => this.props.deleteLocation(this.props.location.id)} />
        </div>
      </div>
    );
  }
}

export default LocationCard;