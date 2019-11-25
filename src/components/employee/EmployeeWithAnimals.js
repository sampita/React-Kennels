import React, { Component } from 'react';
import ApiManager from '../../modules/ApiManager';
import AnimalCard from '../animal/AnimalCard';

class EmployeeWithAnimals extends Component {

  state = {
      name: "",
      animals: [],
      //set loadingStatus to true initially so that buttons will be disabled until data renders to page
      loadingStatus: true
  }

  componentDidMount(){
    console.log("EmployeeDetail: ComponentDidMount");
    //use special _embed fetch call from ApiManager and hang on to the data; put it into state
    ApiManager.getEmployeesWithAnimals(this.props.employeeId)
    .then((ApiResults) => {
      this.setState({
        name: ApiResults.name,
        animals: ApiResults.animals,
        loadingStatus: false
      });
    });
  }

  handleDelete = () => {
  //Has to be a fat arrow function so "this" refers to your component
      //set loadingStatus to true to prevent user from clicking delete button before data loads
      this.setState({ loadingStatus: true })
      //invoke the delete function in ApiManager and redirect to the LocationList
      ApiManager.delete("employees", this.props.employeeId)
        .then(() => this.props.history.push("/employees"))
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./employee.png')} alt="Kennel Employees" />
          </picture>
            <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
            <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Delete Employee</button>
            {this.state.animals.map(animal =>
              <AnimalCard
                key={animal.id}
                animal={animal}
                {...this.props}
              />
            )}
        </div>
      </div>
    );
  }
}

export default EmployeeWithAnimals;