import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
          <button type="button" onClick={() => {this.props.history.push(`/employees/${this.props.employee.id}/edit`)}}>Edit</button>
          <FontAwesomeIcon icon="trash-alt" type="button" onClick={() => this.props.deleteEmployee( this.props.employee.id)} />
        </div>
      </div>
    );
  }
}

export default EmployeeCard;