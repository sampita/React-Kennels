import React, { Component } from 'react'
//import the components we will need
import LocationCard from './LocationCard'
import ApiManager from '../../modules/ApiManager'

class LocationList extends Component {
    //define what this component needs to render
    state = {
        locations: [],
    }

componentDidMount(){
    console.log("Location List: ComponentDidMount");
    //getAll from ApiManager and hang on to that data; put it in state
    ApiManager.getAll("locations")
    .then((locationsArray) => {
        this.setState({
            locations: locationsArray
        })
    })
}

deleteLocation = id => {
    ApiManager.delete("locations", id)
    .then(() => {
      ApiManager.getAll("locations")
      .then((newLocations) => {
        this.setState({
            locations: newLocations
        })
      })
    })
  }

render(){
    console.log("list this.props", this.props)
  
    return(
      <>
      <section className="section-content">
        <button type="button"
          className="btn"
          onClick={() => {this.props.history.push("/locations/new")}}>
          + Add New Location
        </button>
      </section>
      <div className="container-cards">
        {this.state.locations.map(location =>
          <LocationCard
            key={location.id}
            kennelLocation={location}
            deleteLocation={this.deleteLocation}
            {...this.props}
          />
        )}
      </div>
      </>
    )
  }
}

export default LocationList