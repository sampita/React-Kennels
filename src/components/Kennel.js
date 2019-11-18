import React, { Component } from 'react'
import './Kennel.css'
import AnimalCard from './animal/AnimalCard'
import OwnerCard from './owner/OwnerCard'
import LocationCard from './location/LocationCard'
import EmployeeCard from './employee/EmployeeCard'
import NavBar from './nav/NavBar'

class Kennel extends Component {
    render() {
        return (
            /* a Render method can only return a single object, so everything is wrapped in one div */
            <div>
                <NavBar />
                <div>
                    <h2>Student Kennels<br />
                        <small>Loving care when you're not there.</small>
                    </h2>
                    <address>
                        Visit Us at the Nashville North Location
                    <br />500 Puppy Way
                </address>
                </div>
                <div>
                    <article id="Card-DogProfile">
                    <AnimalCard />
                        <div id="AdditionalInfo">
                            <OwnerCard />
                            <LocationCard />
                            <EmployeeCard />
                        </div>
                    </article>
                    <article id="Card-DogProfile">
                    <AnimalCard />
                        <div id="AdditionalInfo">
                            <OwnerCard />
                            <LocationCard />
                            <EmployeeCard />
                        </div>
                    </article>
                </div>
            </div>
        );
    }
}

export default Kennel