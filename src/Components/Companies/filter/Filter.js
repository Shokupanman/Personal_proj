import React, { Component } from 'react'

export default class Filter extends Component {
  constructor() {
    super()

    this.state = {
      cats: [
        'art',
        'ag',
        'law',
        'vid',
        'education',
        'architecture',
        'government',
        'hospitality',
        'tech',
        'science',
        'medical',
        'engineer'
      ],
      items: []
    }

    this.setState({ items: this.props.cat })
  }

  filterList = e => {
    let updatedList = this.props.cat
    updatedList = updatedList.filter(cat => {
      return cat.toLowerCase().search(e.target.value.toLowerCase())
    })
    this.setState({ items: updatedList })
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <form>
          <fieldset>
            <input
              type="text"
              placeholder="Search by subject!"
              onChange={this.filterList}
            />
          </fieldset>
        </form>
      </div>
    )
  }
}
