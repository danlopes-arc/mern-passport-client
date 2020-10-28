import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const bearer = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmOTFmMWVjODVjNDRlNWFiNGM2YTk1YyIsImlhdCI6MTYwMzc3NDg3MCwiZXhwIjoxNjAzNzc4NDcwfQ.Rjt5D7MBwmExQTsiVS7xMnmOM1ei1dU_e4do3FAmJcw'

export default class MyInfo extends Component {
  constructor() {
    super()
    this.state = {
      user: {
        name: null,
        email: null,
        id: null
      }
    }
  }

  componentDidMount() {
    this.getMyInfo()
  }

  getMyInfo = async () => {
    try {
      const res = await axios.get('/api/users/myinfo', {
        headers: { Authorization: bearer }
      })
      this.setState({
        user: res.data
      })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    const { user } = this.state
    return (
      <div style={{
        height: '100%',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div style={{
          margin: 'auto',
          textAlign: 'center'
        }}>
          <h1 style={{
            margin: 'auto',
            textAlign: 'center',
            paddingBottom: '20px'
          }}>
            You are logged as {user.name}.
        </h1>
          <p style={{
            fontSize: '20px'
          }}>
            Your id is {user.id}
          </p>
          <p style={{
            fontSize: '20px'
          }}>
            Your email is {user.email}
          </p>
        </div>
      </div>
    )
  }
}