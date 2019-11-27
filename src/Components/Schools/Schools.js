import React, { Component } from 'react'
import axios from 'axios'
import School from './School'
export default class Schools extends Component {
  constructor() {
    super()

    this.state = {
      schools: []
    }
  }

  componentDidMount() {
    this.getSchools()
  }

  getSchools = () => {
    axios
      .get('/api/schools')
      .then(schools => {
        this.setState({
          schools: schools.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div>
        <h1 className="cHeader">Schools</h1>
        {this.state.schools.map(school => (
          <School key={school.id} school={school} />
        ))}
      </div>
    )
  }
}
