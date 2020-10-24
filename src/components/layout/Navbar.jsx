import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand navbar-light bg-white"
        style={{ flex: '0 0 auto' }}
      >
        <a href="/" className="navbar-brand">
          <i className="material-icons align-middle">code</i>
          MERN Passport
        </a>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/login" className="btn btn-outline-primary" >
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/register" className="btn btn-primary ml-2" >
              Register
            </Link>
          </li>
        </ul>
        {/* <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#dropdown-menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="dropdown-menu">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="btn btn-outline-primary" href="/">Login</a>
            </li>
            <li className="nav-item">
              <a className="btn btn-primary ml-2" href="/">Register</a>
            </li>
          </ul>
        </div> */}
      </nav>
    )
  }
}