import React, { Component } from 'react';

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./employee.png')} alt="Employee" />
          </picture>
          <h5>Employee: <span className="card-employee">{this.props.employee.name}</span></h5>
          <button type="button"
            onClick={() => { this.props.history.push(`/employees/${this.props.employee.id}`) }}>Details</button>
          <button type="button" onClick={() => this.props.deleteEmployee(this.props.employee.id)}>Delete</button>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;