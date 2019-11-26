import React, { Component } from 'react';
import ApiManager from '../../modules/ApiManager';
import '../../components/Form.css'

class AnimalForm extends Component {
    // make key/value pair for every single input field
    state = {
        animalName: "",
        breed: "",
        imageURL: "",
        employees: [],
        loadingStatus: false,
    };

    componentDidMount() {
        ApiManager.getAll("employees").then(employeesArray => this.setState({employees: employeesArray}))
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
        console.log("testing")
        evt.preventDefault();
        if (this.state.animalName === "" || this.state.breed === "" || this.state.imageURL === "" ) {
            window.alert("Please input an animal name and breed");
        } else {
            //disable the button while the Post request is running:
            this.setState({ loadingStatus: true });
            const animal = {
                name: this.state.animalName,
                breed: this.state.breed,
                imageURL: this.state.imageURL,
                employeeId: Number(this.state.employee)
            };

            // Create (post request) the animal and redirect user to animal list
            ApiManager.post("animals", animal)
            .then(() => this.props.history.push("/animals"));
            //^ reload AnimalList after post request is done.
        }
    };

    render(){
        console.log("AnimalForm state", this.state)
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
                        <input
                            type="text"
                            required
                            onChange={this.handleFieldChange}
                            id="imageURL"
                            placeholder="Image URL"
                        />
                        <label htmlFor="imageUrl">Image URL</label>
                        <select
                                className="form-control"
                                id="employeeId"
                                value={this.state.employeeId}
                                onChange={this.handleFieldChange}
                            >
                                {this.state.employees.map(employee =>
                                    <option key={employee.id} value={employee.id}>
                                        {employee.name}
                                    </option>
                                )}
                            </select>
                        <label htmlFor="employee">Employee</label>
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