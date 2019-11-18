import React, { Component } from 'react';

class OwnerCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img id="smallicon" src={require('./owner.png')} alt="Dog's Owner" />
          </picture>
          <h5>Owner: <span className="card-ownername">Harriet</span></h5>
        </div>
      </div>
    );
  }
}

export default OwnerCard;