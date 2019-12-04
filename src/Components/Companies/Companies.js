import React, { Component } from 'react'
import axios from 'axios'
import Company from './Company'

export default class Companies extends Component {
  constructor() {
    super()

    this.state = {
      companies: [],
      filteredCompanies: []
    }
  }

  componentDidMount() {
    this.getCompanies()
  }

  getCompanies = () => {
    axios
      .get('/api/companies')
      .then(companies => {
        this.setState({
          companies: companies.data,
          filteredCompanies: companies.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  filterList = e => {
    let updatedList = this.state.companies.filter(company => {
      return company.cat.includes(e.target.value)
      //console.log(company)
    })
    this.setState({ filteredCompanies: updatedList })
  }
  render() {
    return (
      <div>
        <header>
          <form>
            <fieldset>
              <input
                type="text"
                placeholder="Search different fields!"
                onChange={e => this.filterList(e)}
              />
            </fieldset>
          </form>
        </header>
        <h1 className="cHeader">Companies</h1>
        {this.state.filteredCompanies.map(company => (
          <Company key={company.id} company={company} />
        ))}
      </div>
    )
  }
}
