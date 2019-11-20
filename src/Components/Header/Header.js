import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../logo.png'
import './Header.css'

export default class Header extends Component {
  render() {
    return (
      <div>
        <section className="header">
          <div className="userInfo">
            <h1>USER JUNK</h1>
          </div>
          <div className="logoDiv">
            <img className="logo" src={logo} />
          </div>
          <div className="nav">
            <h1>NAVBAR</h1>
          </div>
        </section>
      </div>
    )
  }
}
