import React, { Component } from 'react';
import ApiManager from '../../modules/ApiManager'
import '../../components/Form.css'

class LocationForm extends Component {
    state = {
        locationName: "",
        address: "",
        hours: "",
        loadingStatus: false
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, create location object, invoke the ApiManager post method, and redirect to location list
    */
   constructNewLocation = evt => {
       evt.preventDefault();
       if (this.state.locationName === "" || this.state.address === "" || this.state.hours === "") {
           window.alert("Please input a location's name, address, and hours")
       } else {
           this.setState({ loadingStatus: true });
           const location = {
                name: this.state.locationName,
                address: this.state.address,
                phoneNumber: this.state.phoneNumber
           };

           // Create the location and redirect user to full list
           ApiManager.post("locations", location)
           .then(() => this.props.history.push("/locations"))
       }
   };

   render() {
       return(
           <>
           <form>
               <fieldset>
                   <div className="formgrid">
                       <input
                       type="text"
                       required
                       onChange={this.handleFieldChange}
                       id="locationName"
                       placeholder="Location name"
                       />
                       <label htmlFor="locationName">Name</label>
                       <input
                       type="text"
                       required
                       onChange={this.handleFieldChange}
                       id="address"
                       placeholder="Address"
                       />
                       <label htmlFor="address">Address</label>
                       <input
                       type="text"
                       required
                       onChange={this.handleFieldChange}
                       id="hours"
                       placeholder="Hours"
                       />
                       <label htmlFor="hours">Hours</label>
                   </div>
                   <div className="alignRight">
                       <button
                       type="button"
                       disabled={this.state.loadingStatus}
                       onClick={this.constructNewLocation}
                       >Submit</button>
                   </div>
               </fieldset>
           </form>
           </>
       )
   }
}

export default LocationForm