import React, { Component } from 'react'
import classnames from 'classnames'
import axios from 'axios'
import validate from 'validate.js'
import { Link } from 'react-router-dom'

import { emptyToNull, emptyToString } from '../../constraints/utils.js'

const userConstraints = {
  email: {
    presence: { allowEmpty: false },
    email: true
  },
  password: {
    presence: { allowEmpty: false }
  }
}

export default class Login extends Component {
  constructor() {
    super()
    this.state = {
      user: {
        email: null,
        password: null
      },
      errors: { general: null }
    }
  }

  isValid = () => {
    const errors = validate(this.state.user, userConstraints)

    this.setState({
      errors: {
        ...this.state.errors,
        ...(errors || {}),
        general: errors ? 'There are still errors' : null
      }
    })
    return !errors
  }

  onBlur = (e) => {
    const prop = e.target.id
    const value = emptyToNull(emptyToString(e.target.value))
    if (value === this.state.user[prop]) return

    this.setState({
      user: {
        ...this.state.user,
        [prop]: value
      }
    })

    const singleValue = { [prop]: value }
    const singleConstraint = { [prop]: userConstraints[prop] }

    this.setState({
      errors: {
        ...this.state.errors,
        ...(validate(singleValue, singleConstraint) || { [prop]: null })
      }
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    if (!this.isValid()) {
      return
    }
    this.loginUser(this.state.user)
  }

  loginUser = async (userData) => {
    try {
      await axios.post('api/users/login', userData)
      this.props.history.push('/')
    } catch (err) {
      if (err.response && err.response.data) {
        this.setState({
          errors: err.response.data
        })
      } else {
        this.setState({
          errors: {
            general: 'Something strange happened. Try again.'
          }
        })
      }
    }
  }

  render() {
    const { errors } = this.state
    return (
      <div style={{
        height: '100%',
        display: 'flex',
        alignItems: 'center'
      }}>
        <form noValidate onSubmit={this.onSubmit} className="p-3 rounded"
          style={{
            margin: 'auto',
            width: '100%',
            maxWidth: '300px'
          }}>
          <h1 style={{
            margin: 'auto',
            textAlign: 'center',
            paddingBottom: '20px'
          }}>
            Login
          </h1>
          {errors.general &&
            <div className="alert alert-danger">{errors.general}</div>
          }
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              onBlur={this.onBlur}
              value={this.state.email}
              className={classnames("form-control", { 'is-invalid': errors.email })}
            />
            {errors.email &&
              <div className="invalid-feedback">{errors.email.join('; ')}</div>
            }
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              onBlur={this.onBlur}
              value={this.state.password}
              className={classnames("form-control", { 'is-invalid': errors.password })}
            />
            {errors.password &&
              <div className="invalid-feedback">{errors.password.join('; ')}</div>
            }
          </div>
          <div className="form-group">
            <input type="submit" className="btn btn-primary w-100" value="Loign" />
          </div>
          <div className="form-group">
            <Link to="/register" className="btn btn-sm btn-outline-primary w-100">Doesn't have an account? Register</Link>
          </div>
        </form>

      </div>
    )
  }
}