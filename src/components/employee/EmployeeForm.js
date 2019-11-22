import React, { Component } from 'react';
import ApiManager from "../../modules/ApiManager";
import '../../components/Form.css'
import { variableDeclaration } from '@babel/types';

class EmployeeForm extends Component {
    state = {
        employeeName: "",
        loadingStatus: false
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /* Local method for variableDeclaration, set loadingStatus, create new employee */
    constructNewEmployee = evt => {
        evt.preventDefault();
        //employeeName matches the key/value name from the state declared above in this component
        if (this.state.employeeName === "") {
            window.alert("Please input an employee name");
        } else {
            this.setState({ loadingStatus: true })};
            const employee = {
                //below "name" is same as JSON key/value pair
                name: this.state.employeeName,
            };

            //Create new employee and redirect user to Employee List
            ApiManager.post("employees", employee)
                .then(() => this.props.history.push("/employees"))
    };

    render(){
        console.log("this.state.employeeName", this.state.employeeName)
        return(
            <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        // id below has to match this component's state key/value name
                        id="employeeName"
                        placeholder="Employee name"
                        />
                        <label htmlFor="employeeName">Name</label>
                    </div>
                    <div className="alignRight">
                        <button
                        type="button"
                        disabled={this.state.loadingStatus}
                        onClick={this.constructNewEmployee}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
            </>
        )
    }
}

export default EmployeeForm