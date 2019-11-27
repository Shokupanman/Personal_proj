import React, { Component } from 'react'
import axios from 'axios'
import Company from './Company'
export default class Companies extends Component {
  constructor() {
    super()

    this.state = {
      companies: []
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
          companies: companies.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div>
        <h1 className="cHeader">Companies</h1>
        {this.state.companies.map(company => (
          <Company key={company.id} company={company} />
        ))}
      </div>
    )
  }
}
