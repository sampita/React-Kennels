import React, { Component } from 'react';
import ApiManager from '../../modules/ApiManager';
import '../../components/Form.css'


class OwnerForm extends Component {
    state = {
        ownerName: "",
        phoneNumber: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /* Local method for validation, set loadingStatus, create Owner object, invoke POST request and redirect to full Owner List */
    constructNewOwner = evt => {
        evt.preventDefault();
        if (this.state.ownerName === "" || this.state.phoneNumber === "") {
            window.alert("Please input an owner name and phone number");
        } else {
            this.setState({ loadingStatus: true});
            const owner = {
                name: this.state.ownerName,
                phoneNumber: this.state.phoneNumber
            };

            // Create the owner and redirect user to owner list
            ApiManager.post("owners", owner)
            .then(() => this.props.history.push("/owners"));
        }
    };

    render(){
        console.log("this.state", this.state)
        return(
            <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="ownerName"
                        placeholder="Owner name"
                        />
                        <label htmlFor="ownerName">Name</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="phoneNumber"
                        placeholder="Phone number"
                        />
                        <label htmlFor="phoneNumber">Phone number</label>
                        <div className="alignRight">
                        <button
                        type="button"
                        disabled={this.state.loadingStatus}
                        onClick={this.constructNewOwner}>Submit</button>
                        </div>
                    </div>
                </fieldset>
            </form>
            </>
        )
    }
}

export default OwnerForm

