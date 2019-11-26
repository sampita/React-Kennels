import React, { Component } from "react"
import APIManager from "../../modules/ApiManager"
import '../../components/Form.css'

class OwnerEditForm extends Component {
    //set the initial state
    state = {
        ownerName: "",
        phoneNumber: "",
        loadingStatus: true
    };

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    };

    updateExistingOwner = evt => {
        evt.preventDefault()
        this.setState({ loadingStatus: true });
        const editedOwner = {
            id: this.props.match.params.ownerId,
            name: this.state.ownerName,
        }

        APIManager.update("owners", editedOwner)
            .then(() => this.props.history.push("/owners"))
    }

    componentDidMount() {
        APIManager.get("owners", this.props.match.params.ownerId)
            .then(owner => {
                this.setState({
                    ownerName: owner.name,
                    phoneNumber: owner.phoneNumber,
                    loadingStatus: false
                })
            });
    }

    render() {
        console.log("ownerEditForm this.props", this.props)
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
                                id="ownerName"
                                value={this.state.ownerName}
                            />
                            <label htmlFor="ownerName">Owner name</label>

                            <input
                                type="text"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="phoneNumber"
                                value={this.state.phoneNumber}
                            />
                            <label htmlFor="phoneNumber">Phone number</label>
                        </div>
                        <div className="alignRight">
                            <button
                                type="button" disabled={this.state.loadingStatus}
                                onClick={this.updateExistingOwner}
                                className="btn btn-primary"
                            >Submit</button>
                        </div>
                </fieldset>
            </form>
            </>
                )
            }
        
        
}

export default OwnerEditForm