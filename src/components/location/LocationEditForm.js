import React, { Component } from "react"
import APIManager from "../../modules/ApiManager"
import '../../components/Form.css'

class LocationEditForm extends Component {
    //set the initial state
    state = {
        locationName: "",
        address: "",
        hours: ""
    };

    //capture what the user is typing into the form and set it to state
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    };

    //put the updated state into a Location object that JSON server will recognize
    updateExistingLocation = evt => {
        evt.preventDefault()
        this.setState({ loadingStatus: true });
        const editedLocation = {
            id: this.props.match.params.locationId,
            name: this.state.locationName,
            address: this.state.address,
            hours: this.state.hours
        };

        //do a "PUT" request to update Location in API
        APIManager.update("locations", editedLocation)
            .then(() => this.props.history.push("/locations"))
    };

    //?????? Look This Up ?????????
    componentDidMount() {
        APIManager.get("locations", this.props.match.params.locationId)
            .then(location => {
                this.setState({
                    locationName: location.name,
                    address: location.address,
                    hours: location.hours,
                    loadingStatus: false
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
                                id="locationName"
                                value={this.state.locationName}
                            />
                            <label htmlFor="locationName"> Location name</label>

                            <input
                                type="text"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="address"
                                value={this.state.address}
                            />
                            <label htmlFor="address">Address</label>

                            <input
                                type="text"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="hours"
                                value={this.state.hours}
                            />
                            <label htmlFor="hours">Hours</label>
                        </div>
                        <div className="alignRight">
                            <button
                                type="button" disabled={this.state.loadingStatus}
                                onClick={this.updateExistingLocation}
                                className="btn btn-primary"
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }


}

export default LocationEditForm