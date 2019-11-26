import { Route, Redirect } from "react-router-dom"
import React, { Component } from 'react'
import Home from './home/Home'
import AnimalList from './animal/AnimalList'
import AnimalDetail from './animal/AnimalDetail'
import AnimalEditForm from './animal/AnimalEditForm'
import LocationList from './location/LocationList'
import LocationDetail from './location/LocationDetail'
import LocationForm from './location/LocationForm'
import LocationEditForm from './location/LocationEditForm'
import EmployeeList from './employee/EmployeeList'
import EmployeeForm from './employee/EmployeeForm'
import EmployeeWithAnimals from './employee/EmployeeWithAnimals'
import EmployeeEditForm from './employee/EmployeeEditForm'
import OwnerList from './owner/OwnerList'
import OwnerForm from './owner/OwnerForm'
import Login from './auth/Login'


class ApplicationViews extends Component {
  render() {
    {/* if path is slash (home), then render the home component, if path is animals then render animals component */ }
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        {/* Make sure you add the `exact` attribute here */}
        <Route exact path="/animals" render={props => {
          if (this.props.user) {
            return <AnimalList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/animals/new" render={(props) => {
          return <AnimalEditForm {...props} />
        }} />
        <Route exact path="/animals/:animalId(\d+)" render={(props) => {
          // Pass the animalId to the AnimalDetailComponent
          return <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props} />
        }} />
        <Route
          path="/animals/:animalId(\d+)/edit" render={props => {
            return <AnimalEditForm {...props} />
          }}
        />
        <Route exact path="/locations" render={(props) => {
          return <LocationList {...props} />
        }} />
        <Route path="/locations/new" render={(props) => {
          return <LocationForm {...props} />
        }} />
        <Route exact path="/locations/:locationId(\d+)" render={(props) => {
          // Pass the locationId and react-router-dom props to the LocationDetailComponent
          return <LocationDetail
            locationId={parseInt(props.match.params.locationId)}
            {...props}
          />
        }} />
        <Route path="/locations/:locationId(\d+)/edit" render={props => {
          return <LocationEditForm {...props} />
        }} />
        <Route exact path="/employees" render={(props) => {
          /* Give EmployeeList access to react-router-dom history by passing props. Now the New Employee button can send user to new url with history.push */
          return <EmployeeList {...props} />
        }} />
        <Route path="/employees/new" render={(props) => {
          return <EmployeeForm {...props} />
        }} />
        <Route exact path="/employees/:employeeId(\d+)" render={(props) => {
          return <EmployeeWithAnimals
          employeeId={parseInt(props.match.params.employeeId)}
          {...props} />
        }} />
        <Route
          path="/employees/:employeeId(\d+)/edit" render={props => {
            return <EmployeeEditForm {...props} />
          }}
        />
        <Route exact path="/owners" render={(props) => {
          /* Give OwnerList access to react-router-dom history by passing props. Now the New Owner button can send user to new url with history.push */
          return <OwnerList {...props} />
        }} />
        <Route path="/owners/new" render={(props) => {
          return <OwnerForm {...props} />
        }} />
        <Route path="/login" render={(props) => {
            return <Login setUser={this.props.setUser} {...props}/>
        }} />
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