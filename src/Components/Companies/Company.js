import React, { Component } from 'react'
import './Company.scss'
import axios from 'axios'

import Swal from 'sweetalert2'

export default class Company extends Component {
  constructor() {
    super()

    this.state = {
      tasks: []
    }
  }

  postTasks = cat => {
    axios
      .post(`/todo/post/${this.props.company.company_id}`, { cat })
      .then(() => {
        this.setState({
          tasks: this.state.tasks
        })
      })
      .then(res => {
        Swal.fire('Awesome! We will go ahead and add that to your list')
      })
      .catch(err => {
        Swal.fire(err)
      })
  }

  render() {
    const { title, reqs, avg_pay, description, img, cat } = this.props.company
    return (
      <div>
        <section className="bigboi">
          <div className="taskdeal">
            <div>
              Find companies looking for/apply to {title}s{' '}
              <button
                className="buttonboi"
                onClick={() =>
                  this.postTasks(
                    `Find companies looking for/apply to ${title}'s`
                  )
                }
              >
                Add
              </button>
            </div>
            <div>
              Match with top schools for {cat}{' '}
              <button
                className="buttonboi"
                onClick={() =>
                  this.postTasks(`Match with top schools for ${cat}`)
                }
              >
                Add
              </button>
            </div>
            <div>
              Search for courses online/in town for {cat}{' '}
              <button
                className="buttonboi"
                onClick={() =>
                  this.postTasks(`Search for courses online/in town for ${cat}`)
                }
              >
                Add
              </button>
            </div>
            <div>
              Look for internships for {title}s{' '}
              <button
                className="buttonboi"
                onClick={() =>
                  this.postTasks(`Look for internships for ${title}'s`)
                }
              >
                Add
              </button>
            </div>
            <div>
              Find ways to network and interact with other {title}s
              <button
                className="buttonboi"
                onClick={() =>
                  this.postTasks(
                    `Find ways to network and interact with other ${title}'s `
                  )
                }
              >
                Add
              </button>
            </div>
          </div>
          <div className="headi">
            <div className="catT">
              <h1 className="title">{title}</h1>
              <h3 className="text">Catogory: {cat}</h3>
            </div>
            <section className="lander">
              <img src={img} alt="" className="pics2" />
            </section>
          </div>
        </section>
        <section className="description">
          <h3 className="text">Average Pay: {avg_pay}</h3>
          <h3 className="text">Job Descriptions: {description}</h3>
          <h3 className="text">Requirements: {reqs}</h3>
        </section>
      </div>
    )
  }
}
