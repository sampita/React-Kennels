import React, { Component } from 'react';
import ApiManager from '../../modules/ApiManager';
import './AnimalDetail.css'

class AnimalDetail extends Component {

  state = {
      name: "",
      breed: "",
      imageURL: "",
      loadingStatus: true
  }

  componentDidMount(){
    //get(id) from AnimalManager and hang on to the data; put it into state
    ApiManager.get("animals", this.props.animalId)
    .then((animal) => {
      this.setState({
        name: animal.name,
        breed: animal.breed,
        imageURL: "",
        loadingStatus: false
      });
    });
  }

  handleDelete = () => {
    //invoke the delete function in ApiManger and re-direct to the animal list.
    this.setState({loadingStatus: true})
    ApiManager.delete("animals", this.props.animalId)
    .then(() => this.props.history.push("/animals"))
  }


  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
          <img src={(`${this.state.imageURL}`)} alt="My Dog" />
          </picture>
          <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
          <p>Breed: {this.state.breed}</p>
          <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Discharge</button>
        </div>
      </div>
    );
  }
}

export default AnimalDetail;