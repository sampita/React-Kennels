import React, { Component } from 'react'
//import the components we will need
import EmployeeCard from './EmployeeCard'
import ApiManager from '../../modules/ApiManager'

class EmployeeList extends Component {
    //define what this component needs to render
    state = {
        employees: [],
    }

componentDidMount(){
    console.log("Employee List: ComponentDidMount");
    //getAll from EmployeeManager and hang on to that data; put it in state
    ApiManager.getAll("employees")
    .then((employees) => {
        this.setState({
            employees: employees
        })
    })
}

deleteEmployee = id => {
    ApiManager.delete("employees", id)
    .then(() => {
      ApiManager.getAll("employees")
      .then((newEmployees) => {
        this.setState({
            employees: newEmployees
        })
      })
    })
  }

render(){
  //Add New Employee button and Employee Cards
    return(
    <React.Fragment>
      <section className="section-content">
        <button type="button"
            className="btn"
            onClick={() => {this.props.history.push("/employees/new")}}>
            Add Employee
        </button>
      </section>
        <div className="container-cards">
          {this.state.employees.map(employee =>
            <EmployeeCard
            key={employee.id}
            employee={employee}
            deleteEmployee={this.deleteEmployee}
            {...this.props}
            />
          )}
        </div>
    </React.Fragment>  
    )
  }
}

export default EmployeeList