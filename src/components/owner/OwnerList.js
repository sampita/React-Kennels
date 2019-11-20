import React, { Component } from 'react'
//import the components we will need
import OwnerCard from './OwnerCard'
import ApiManager from '../../modules/ApiManager'

class OwnerList extends Component {
    //define what this component needs to render
    state = {
        owners: [],
    }

componentDidMount(){
    console.log("Owner List: ComponentDidMount");
    //getAll from OwnerManager and hang on to that data; put it in state
    ApiManager.getAll("owners")
    .then((owners) => {
        this.setState({
            owners: owners
        })
    })
}

deleteOwner = id => {
    ApiManager.delete("owners", id)
      .then(() => {
        ApiManager.getAll("owners")
          .then((newOwners) => {
            this.setState({
              owners: newOwners
            })
          })
      })
  }

render(){
    console.log("OwnerList: Render");
  
    return(
      <div className="container-cards">
        {this.state.owners.map(owner =>
          <OwnerCard
            key={owner.id} 
            owner={owner}
            deleteOwner={this.deleteOwner} />
        )}
      </div>
    )
  }
}

export default OwnerList