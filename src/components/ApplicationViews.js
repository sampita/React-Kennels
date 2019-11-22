import { Route, Redirect } from "react-router-dom"
import React, { Component } from 'react'
import Home from './home/Home'
import AnimalList from './animal/AnimalList'
import AnimalDetail from './animal/AnimalDetail'
import AnimalForm from './animal/AnimalForm'
//only include these once they are built - previous practice exercise
import LocationList from './location/LocationList'
import LocationDetail from './location/LocationDetail'
import EmployeeList from './employee/EmployeeList'
import EmployeeForm from './employee/EmployeeForm'
import OwnerList from './owner/OwnerList'
import Login from './auth/Login'


class ApplicationViews extends Component {

  //Check if credentials are in local storage
  //returns true/false
  isAuthenticated = () => localStorage.getItem("credentials") !== null

  render() {
    {/* if path is slash (home), then render the home component, if path is animals then render animals component */ }
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        {/* Make sure you add the `exact` attribute here */}
        <Route exact path="/animals" render={props => {
          if (this.isAuthenticated()) {
            return <AnimalList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/animals/new" render={(props) => {
          return <AnimalForm {...props} />
        }} />
        <Route path="/animals/:animalId(\d+)" render={(props) => {
          // Pass the animalId and react-router-dom props to the AnimalDetailComponent
          return <AnimalDetail
            animalId={parseInt(props.match.params.animalId)}
            {...props}
          />
        }} />
        <Route exact path="/locations" render={(props) => {
          return <LocationList />
        }} />
        <Route path="/locations/:locationId(\d+)" render={(props) => {
          // Pass the locationId and react-router-dom props to the LocationDetailComponent
          return <LocationDetail
            locationId={parseInt(props.match.params.locationId)}
            {...props}
          />
        }} />
        <Route exact path="/employees" render={(props) => {
          /* Give EmployeeList access to react-router-dom history by passing props. Now the New Animal button can send user to new url with history.push */
          return <EmployeeList {...props} />
        }} />
        <Route path="/employees/new" render={(props) => {
          return <EmployeeForm {...props} />
        }} />
        <Route path="/login" component={Login} />
        {/*
  This is a new route to handle a URL with the following pattern:
  http://localhost:3000/animals/1

  It will not handle the following URL because the `(\d+)`
  matches only numbers after the final slash in the URL
  http://localhost:3000/animals/jack
*/}
      </React.Fragment>
    )
  }
}

export default ApplicationViews