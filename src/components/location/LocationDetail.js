import React, { Component } from 'react';
import ApiManager from '../../modules/ApiManager';
import './LocationDetail.css'

class LocationDetail extends Component {

  state = {
      name: "",
      address: "",
      hours: "",
      //set loadingStatus to true initially so that buttons will be disabled untl data renders to page
      loadingStatus: true
  }

  componentDidMount(){
    console.log("LocationDetail: ComponentDidMount");
    //get(id) from LocationManager and hang on to the data; put it into state
    ApiManager.get("locations", this.props.locationId)
    .then((location) => {
      this.setState({
        name: location.name,
        address: location.address,
        hours: location.hours,
        loadingStatus: false
      });
    });
  }

  handleDelete = () => {
  //Has to be a fat arrow function so "this" refers to your component
      //set loadingStatus to true to prevent user from clicking delete button before data loads
      this.setState({ loadingStatus: true })
      //invoke the delete function in ApiManager and redirect to the LocationList
      ApiManager.delete("locations", this.props.locationId)
        .then(() => this.props.history.push("/locations"))
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./location.png')} alt="Kennel Location" />
          </picture>
            <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
            <p>Address: {this.state.address}</p>
            <p>Hours: {this.state.hours}</p>
            <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Close Location</button>
        </div>
      </div>
    );
  }
}

export default LocationDetail;