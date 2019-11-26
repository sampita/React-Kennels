import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class OwnerCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img id="smallicon" src={require('./owner.png')} alt="Dog's Owner" />
          </picture>
          <h5>Owner: <span className="card-ownername">{this.props.owner.name}</span></h5>
          <p>{this.props.owner.phoneNumber}</p>
          <button type="button" onClick={() => {this.props.history.push(`/owners/${this.props.owner.id}/edit`)}}>Edit</button>
          <button type="button" onClick={() => this.props.deleteOwner(this.props.owner.id)}>Delete</button>
        </div>
      </div>
    );
  }
}

export default OwnerCard;