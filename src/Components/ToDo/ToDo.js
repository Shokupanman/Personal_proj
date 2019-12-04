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
      toggleEdit: false,
      currentList: 0
    }
  }

  componentDidMount() {
    this.getTasks()
  }

  getTasks = () => {
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

  editTask = list_id => {
    // console.log(this.state.editTasks)
    axios
      .put(`/todo/edit/${list_id}`, { list_content: this.state.editTasks })
      .then(res => {
        this.setState({
          tasks: res.data,
          editTask: false,
          currentList: 0
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
  toggleEdit = id => {
    this.setState({
      toggleEdit: !this.state.toggleEdit,
      currentList: id
    })
  }

  handleChange = event => {
    //console.log(event.target.value)
    this.setState({
      editTasks: event.target.value
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
              edit={this.state.currentList === task.list_id}
              toggleEdit={this.toggleEdit}
              editTask={this.editTask}
            />
          ))}
        </div>
      </div>
    )
  }
}
