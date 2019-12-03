import React, { Component } from 'react'
import axios from 'axios'

import Posts from './Posts'
import Swal from 'sweetalert2'

export default class ToDo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tasks: []
    }
  }

  componentDidMount() {
    this.getTasks()
  }

  getTasks() {
    axios.get('/todo/list').then(res => {
      this.setState({ tasks: res.data })
    })
  }

  deleteTasks = id => {
    axios
      .delete(`/todo/remove/${id}`)
      .then(res => {
        this.getTasks()
        Swal.fire('aaaaand its removed!')
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    console.log(this.state.tasks)
    return (
      <div>
        <h1>MY LIST</h1>
        {this.state.tasks.map(task => (
          <Posts task={task} deleteTask={this.deleteTasks} />
        ))}
      </div>
    )
  }
}
