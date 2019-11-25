import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class LocationCard extends Component {
  render() {
    console.log("card this.props", this.props)
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img id="smallicon" src={require('./location.png')} alt="Kennel Location" />
          </picture>
          <h5>Location: <span className="card-location">{this.props.kennelLocation.name}</span></h5>
          <Link to={`/locations/${this.props.kennelLocation.id}`}><button>Details</button></Link>
          <button type="button" onClick={() => {this.props.history.push(`/locations/${this.props.kennelLocation.id}/edit`)}}>Edit</button>
          <FontAwesomeIcon icon="trash-alt" type="button" onClick={() => this.props.deleteLocation(this.props.kennelLocation.id)} />
        </div>
      </div>
    );
  }
}

export default LocationCard;