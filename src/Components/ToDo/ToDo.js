import React, { Component } from 'react'
import axios from 'axios'
import './ToDo.scss'

import Posts from './Posts'
import Swal from 'sweetalert2'

export default class ToDo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tasks: [],
      editTasks: '',
      newTasks: '',
      toggleEdit: false
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

  editTask = (body, dreamer_id) => {
    axios
      .put(`/todo/edit/${dreamer_id}`, { body })
      .then(res => {
        this.setState({
          tasks: res.data,
          editTask: false
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
  toggleEdit() {
    this.setState({
      toggleEdit: !this.state.toggleEdit
    })
  }

  handleChange = event => {
    //console.log(event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    //console.log(this.state.tasks)
    return (
      <div className="listBK">
        <div className="centerDiv">
          <h1 className="listTitle">THE DREAM!</h1>
        </div>
        <div className="tasks">
          {this.state.tasks.map(task => (
            <Posts
              task={task}
              tasks={this.state.tasks}
              newTasks={this.state.newTasks}
              editTasks={this.state.editTasks}
              deleteTask={this.deleteTasks}
              handleChange={this.handleChange}
              toggleEdit={this.toggleEdit}
              editTask={this.editTask}
            />
          ))}
        </div>
      </div>
    )
  }
}
