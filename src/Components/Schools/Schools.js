import React, { Component } from 'react'
import axios from 'axios'
import School from './School'
export default class Schools extends Component {
  constructor() {
    super()

    this.state = {
      schools: [],
      filteredSchools: []
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
          schools: schools.data,
          filteredSchools: schools.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  filterList = e => {
    let updatedList = this.state.schools.filter(school => {
      //console.log(this.state.schools)
      return school.cat.includes(e.target.value)
    })
    this.setState({ filteredSchools: updatedList })
  }

  render() {
    return (
      <div>
        <header>
          <form>
            <fieldset>
              <h1 className="cHeader">Search School Categories!</h1>
              <input
                className="searchyBoi"
                type="text"
                placeholder="Search through school categories!"
                onChange={e => this.filterList(e)}
              />
            </fieldset>
          </form>
        </header>
        {this.state.filteredSchools.map(school => (
          <School key={school.id} school={school} />
        ))}
      </div>
    )
  }
}
