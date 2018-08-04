import React from "react";
import Forms from "./Forms";
import Task from './Task'

class ToDo extends React.Component {
  state = {
    task: [
        { isCompleted: false, text: 'Wynieś śmieci', key: '123' },
        {isCompleted: false, text: 'Zmyj gary',key: '456'}
    ],
    newTask: ''
  };

  componentDidMount() {
      const lastState = JSON.parse
      (localStorage.getItem
        ('toDo-state'))
        if (lastState === null) return

        this.setState(lastState)
  }

  componentWillUnmount() {
      localStorage.setItem
      ('toDo-state', JSON.stringify(this.state))
  }

  newTask = (event) => {
    this.setState({
      newTaskText: event.target.value
    })
  }

  newTaskClickFunction = (newTaskText) => {
    if (this.state.newTaskText === '') {
      return
    }
    this.setState({
      task: this.state.tasks.concat(
        {
          isCompleted: false,
          text: this.state.newTaskText,
          key: Data.now()
        }
      ),
      newTaskText: ''
    })
  }

  return() {
    return (
      <div>
        <Forms
        newTaskText=
        {this.state.newTaskText}
        newTaskClickFunction=
        {this.newTaskClickFunction}
        newTaskClickFunction=
        {this.state.newTaskClickFunction}
        />
        <List
        taskList={this.state.tasks}
        />
        </div>
    )
  }

  
}

export default ToDo
