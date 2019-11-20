import React, { Component } from 'react';
import ApiManager from '../../modules/ApiManager';
import './LocationDetail.css'

class LocationDetail extends Component {

  state = {
      name: "",
      address: "",
      hours: ""
  }

  componentDidMount(){
    console.log("LocationDetail: ComponentDidMount");
    //get(id) from LocationManager and hang on to the data; put it into state
    ApiManager.get("locations", this.props.locationId)
    .then((location) => {
      this.setState({
        name: location.name,
        address: location.address,
        hours: location.hours
      });
    });
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
        </div>
      </div>
    );
  }
}

export default LocationDetail;