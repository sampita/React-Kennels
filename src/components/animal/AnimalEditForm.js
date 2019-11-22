import React, { Component } from "react"
import ApiManager from "../../modules/ApiManager"
// import "./AnimalForm.css"

class AnimalEditForm extends Component {
    //set the initial state
    state = {
      animalName: "",
      breed: "",
      imageURL: "",
      loadingStatus: true,
    };

    handleFieldChange = evt => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
    }

    updateExistingAnimal = evt => {
      evt.preventDefault()
      this.setState({ loadingStatus: true });
      const editedAnimal = {
        id: this.props.match.params.animalId,
        name: this.state.animalName,
        breed: this.state.breed,
        imageURL: this.state.imageURL
      };

      ApiManager.update("animals", editedAnimal)
      .then(() => this.props.history.push("/animals"))
    }

    componentDidMount() {
      ApiManager.get("animals", this.props.match.params.animalId)
      .then(animal => {
          this.setState({
            animalName: animal.name,
            breed: animal.breed,
            imageURL: animal.imageURL,
            loadingStatus: false,
          });
      });
    }

    render() {
      return (
        <>
        <form>
          <fieldset>
            <div className="formgrid">
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="animalName"
                value={this.state.animalName}
              />
              <label htmlFor="animalName">Animal name</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="breed"
                value={this.state.breed}
              />
              <label htmlFor="breed">Breed</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="breed"
                value={this.state.imageURL}
              />
              <label htmlFor="imageURL">Image URL</label>
            </div>
            <div className="alignRight">
              <button
                type="button" disabled={this.state.loadingStatus}
                onClick={this.updateExistingAnimal}
                className="btn btn-primary"
              >Submit</button>
            </div>
          </fieldset>
        </form>
        </>
      );
    }
}

export default AnimalEditForm