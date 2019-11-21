import React, { Component } from 'react';
import ApiManager from '../../modules/ApiManager';
import './AnimalForm.css'

class AnimalForm extends Component {
    // make key/value pair for every single input field
    state = {
        animalName: "",
        breed: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        //the below function updates the state for every key press:
        this.setState(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, create animal      object, invoke the ApiManager post method, and redirect to the full animal list
    */
    constructNewAnimal = evt => {
        evt.preventDefault();
        if (this.state.animalName === "" || this.state.breed === "") {
            window.alert("Please input an animal name and breed");
        } else {
            //disable the button while the Post request is running:
            this.setState({ loadingStatus: true });
            const animal = {
                name: this.state.animalName,
                breed: this.state.breed,
            };

            // Create (post request) the animal and redirect user to animal list
            ApiManager.post("animals", animal)
            .then(() => this.props.history.push("/animals"));
            //^ reload AnimalList after post request is done.
        }
    };

    render(){

        return(
            <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                            type="text"
                            required
                            onChange={this.handleFieldChange}
                            id="animalName"
                            placeholder="Animal name"
                        />
                        <label htmlFor="animalName">Name</label>
                        <input
                            type="text"
                            required
                            onChange={this.handleFieldChange}
                            id="breed"
                            placeholder="Breed"
                        />
                        <label htmlFor="breed">Breed</label>
                    </div>
                    <div className="alignRight">
                        <button
                            type="button"
                            disabled={this.state.loadingStatus}
                            onClick={this.constructNewAnimal}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
        )
    }
}

export default AnimalForm