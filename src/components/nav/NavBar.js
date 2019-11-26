import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom"
import './NavBar.css'

class NavBar extends Component {

  handleLogout = () => {
    //clears user from localStorage and redirects to home page
    this.props.clearUser();
    this.props.history.push('/');
  }

  render(){

    return (
      <header>
        <h1 className="site-title">Student Kennels<br />
          <small>Loving care when you're not there.</small>
        </h1>
        <nav>
          <ul className="container">
            <li><Link className="nav-link" to="/">Home</Link></li>
            <li><Link className="nav-link" to="/locations">Locations</Link></li>
            {/* Ternary statement for: If the user is logged in, show them all of the following navbar links, if they are NOT logged in, show them the Login link (along with the above navbar links) */}
            {(this.props.user) ? 
            <>
            <li><Link className="nav-link" to="/animals">Animals</Link></li>
            <li><Link className="nav-link" to="/employees">Employees</Link></li>
            <li><Link className="nav-link" to="/owners">Owners</Link></li>
            <li><span className="nav-link" onClick={this.handleLogout}>Logout</span></li>
            </>
            :
            <li><Link className="nav-link" to="/login">Login</Link></li>
            }
          </ul>
        </nav>
      </header>
    )
  }
}

//use withRouter() when you can't use the Route component
export default withRouter(NavBar);