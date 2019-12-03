import React, { Component } from 'react'
import './School.scss'
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
    console.log(this.state.tasks)
    axios
      .post(`/todo/post/${this.props.school.school_id}`, { cat })
      .then(() => {
        this.setState({
          tasks: this.state.tasks
        })
      })
      .then(res => {
        Swal.fire('Awesome! We will go ahead and add that to your list!')
      })
      .catch(err => {
        Swal.fire(err)
      })
  }

  render() {
    const { name, city, in_state, out_of_state, img, cat } = this.props.school
    return (
      <div>
        <section className="bigboi2">
          <section className="lander2">
            <img src={img} alt="" className="pics2" />
          </section>
          <div className="headi2">
            <div className="catT2">
              <div className="taskdeal2">
                <div className="task1">
                  Apply to {name}!
                  <button
                    className="buttonboi"
                    onClick={() => this.postTasks(`Apply to ${name}`)}
                  >
                    Add!
                  </button>
                </div>
                <div className="task2">
                  Contact {name}'s finacial aid office
                  <button
                    className="buttonboi"
                    onClick={() =>
                      this.postTasks(`Contact ${name}'s finacial aid office`)
                    }
                  >
                    Add!
                  </button>
                </div>
                <div className="task3">
                  Check available housing options in {city}
                  <button
                    className="buttonboi"
                    onClick={() =>
                      this.postTasks(
                        `Check available housing options in ${city}`
                      )
                    }
                  >
                    Add!
                  </button>
                </div>
                <div className="task4">
                  Get in contact with different alumni circles from {name}
                  <button
                    className="buttonboi"
                    onClick={() =>
                      this.postTasks(
                        `Get in contact with different alumni circles from ${name}`
                      )
                    }
                  >
                    Add!
                  </button>
                </div>
                <div className="task5">
                  Research different extra curricular groups at {name}
                  <button
                    className="buttonboi"
                    onClick={() =>
                      this.postTasks(
                        `Research different extra curricular groups ${name}`
                      )
                    }
                  >
                    Add!
                  </button>
                </div>
              </div>
            </div>
            <h1 className="title2">{name}</h1>
            <h3 className="text2">Catogory: {cat}</h3>
          </div>
        </section>
        <section className="description2">
          <h3 className="text2">City: {city}</h3>
          <h3 className="text2"> Instate: {in_state}</h3>
          <h3 className="text2">Out of State: {out_of_state}</h3>
        </section>
        <hr />
      </div>
    )
  }
}
