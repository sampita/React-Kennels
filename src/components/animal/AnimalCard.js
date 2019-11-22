import React, { Component } from 'react';
import "./Animal.css"
import { Link } from "react-router-dom";

class AnimalCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={(`${this.props.animal.imageURL}`)} alt="My Dog" />
          </picture>
          <h2>Name: <span className="card-petname">{this.props.animal.name}</span></h2>
          <p>Breed: {this.props.animal.breed}</p>
          <button type="button"
            onClick={() => { this.props.history.push(`/animals/${this.props.animal.id}/edit`) }}>Edit</button>
          <Link to={`/animals/${this.props.animal.id}`}><button>Details</button></Link>
          <button type="button" onClick={() => this.props.deleteAnimal(this.props.animal.id)}>Discharge</button>
        </div>
      </div>
    );
  } 2
}

export default AnimalCard;