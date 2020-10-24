import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default function Landing() {
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
          Welcome to MERN Passport!
      </h1>
        <p style={{
          fontSize: '20px'
        }}>
          Register or login through the links above
        </p>
      </div>

    </div>
  )
}