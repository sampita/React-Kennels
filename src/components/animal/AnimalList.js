import React, { Component } from 'react'
//import the components we will need
import AnimalCard from './AnimalCard'
import ApiManager from '../../modules/ApiManager'

class AnimalList extends Component {
    //define what this component needs to render
    state = {
        animals: [],
    }

componentDidMount(){
    console.log("ANIMAL LIST: ComponentDidMount");
    //getAll from ApiManager and hang on to that data; put it in state
    ApiManager.getAll("animals")
    .then((animalsArray) => {
        this.setState({
            animals: animalsArray
        })
    })
}

render(){
    console.log("AnimalList: Render");
  
    return(
      <div className="container-cards">
        {this.state.animals.map(animal =>
          <AnimalCard key={animal.id} animal={animal} />
        )}
      </div>
    )
  }
}

export default AnimalList