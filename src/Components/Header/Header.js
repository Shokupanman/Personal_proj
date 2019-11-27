import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../logo.png'
import './Header.scss'
import { connect } from 'react-redux'
import { updateUserInfo } from '../../ducks/reducer'
import axios from 'axios'
import Swal from 'sweetalert2'

class Header extends Component {
  constructor() {
    super()

    this.state = {
      user_name: ''
    }
  }
  logout = () => {
    axios.delete('/auth/logout').then(res => {
      Swal.fire('See ya!')
      this.props.updateUserInfo({
        email: '',
        user_name: '',
        dreamer_id: ''
      })
    })
  }

  componentDidMount() {
    console.log(this.props)
    axios.get('/api/user').then(res => {
      this.setState({
        user_name: res.data.user_name
      })
    })
    // this.setState({
    //   user_name: this.props.user_name
    // })
  }

  componentDidUpdate(prevProps) {
    if (this.props.user_name !== prevProps.user_name) {
      console.log(this.props.user_name)
      axios.get('/api/user').then(res => {
        this.setState({
          user_name: res.data.user_name
        })
      })
    }
  }

  render() {
    return (
      <div>
        <section className="header">
          <div className="userInfo">
            <h1 className="welcome">Welcome {this.state.user_name}!</h1>
            <Link to="/">
              <button className="logoutBut" onClick={this.logout}>
                Logout
              </button>
            </Link>
          </div>
          <div className="logoDiv">
            <Link to="/dashboard">
              <img className="logo" alt="" src={logo} />
            </Link>
          </div>
          <div className="nav">
            <Link className="navi" to="/schools">
              <i className="fas fa-graduation-cap"></i>Schools
            </Link>
            <Link className="navi" to="/companies">
              <i className="fas fa-building"></i>Careers
            </Link>
            <Link className="navi" to="/todo">
              <i className="fas fa-list-alt"></i>My List!
            </Link>
          </div>
        </section>
      </div>
    )
  }
}

function mapStateToProps(reduxState) {
  return reduxState
}

export default connect(mapStateToProps, { updateUserInfo })(Header)
