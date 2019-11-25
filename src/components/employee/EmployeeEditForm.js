import React, { Component } from "react"
import APIManager from "../../modules/ApiManager"

class EmployeeEditForm extends Component {
    //set the initial state
    state = {
        employeeName: "",
        loadingStatus: true,
    };

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingEmployee = evt => {
        evt.preventDefault()
        this.setState({ loadingStatus: true });
        const editedEmployee = {
            id: this.props.match.params.employeeId,
            name: this.state.employeeName,    
        };

        APIManager.update("employees", editedEmployee)
        .then(() => this.props.history.push("/animals"))
    }

    componentDidMount() {
        APIManager.get("employees", this.props.match.params.employeeId)
        .then(employee => {
            this.setState({
                employeeName: employee.name,
                loadingStatus: false
            })
        })
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
                            id="employeeName"
                            value={this.state.employeeName}
                        />
                        <label htmlFor="employeeName">Employee name</label>
                    </div>

                    <div>
                        <button
                            type="button" disabled={this.state.loadingStatus}
                            onClick={this.updateExistingEmployee}
                            className="btn btn-primary"
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
            </>
        )
    }
}

export default EmployeeEditForm;