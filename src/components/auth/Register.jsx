import React, { Component } from 'react'
import classnames from 'classnames'

export default class Register extends Component {
  constructor() {
    super()
    this.state = {
      name: "",
      email: "",
      password: "",
      errors: {}
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value })
  }

  onSubmit = (e) => {
    e.preventDefault()
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
            paddingBottom: '20px',
            textAlign: 'center'
          }}>
            Register
          </h1>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              onChange={this.onChange}
              value={this.state.name}
              className={classnames("form-control", { 'is-invalid': errors.name })}
            />
            {errors.name &&
              <div className="invalid-feedback">{errors.name}</div>
            }
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={this.onChange}
              value={this.state.email}
              className={classnames("form-control", { 'is-invalid': errors.email })}
            />
            {errors.email &&
              <div className="invalid-feedback">{errors.email}</div>
            }
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={this.onChange}
              value={this.state.password}
              className={classnames("form-control", { 'is-invalid': errors.password })}
            />
            {errors.password &&
              <div className="invalid-feedback">{errors.password}</div>
            }
          </div>
          <div class="form-group">
            <input type="submit" class="btn btn-primary w-100" value="Register" />
          </div>
          <div class="form-group">
            <input type="button" class="btn btn-sm btn-outline-primary w-100" value="Already have an account? Login" />
          </div>
        </form>

      </div>
    )
  }
}