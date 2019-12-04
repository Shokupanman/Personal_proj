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
              <input
                type="text"
                placeholder="Search through school subjects!"
                onChange={e => this.filterList(e)}
              />
            </fieldset>
          </form>
        </header>
        <h1 className="cHeader">Schools</h1>
        {this.state.filteredSchools.map(school => (
          <School key={school.id} school={school} />
        ))}
      </div>
    )
  }
}
