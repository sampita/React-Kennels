import React, { Component } from 'react'
import kennelImage from './dog-kennel-cover.jpg'
import './Home.css'

class Home extends Component {
  render() {
    return (
      <>
        <address id="homeAddress">
          Visit Us at the Nashville North Location
          <br />
          <br />500 Puppy Way
          <br />Nashville, TN 37208
          <br />(615) 323-9999
        </address>
        <img src={kennelImage} alt="outdoor kennel with happy dogs and employee" id="homeImage"></img>
      </>
    )
  }
}

export default Home