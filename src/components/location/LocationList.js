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

render(){
    console.log("LocationsList: Render");
  
    return(
      <div className="container-cards">
        {this.state.locations.map(location =>
          <LocationCard key={location.id} location={location} />
        )}
      </div>
    )
  }
}

export default LocationList