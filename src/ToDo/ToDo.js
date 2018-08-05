import React from "react";
import Forms from "./Forms";
import List from './List';

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
          key: Math.random()
        }
      ),
      newTaskText: ''
    })
  }

  render() {
    return (
      <div>
        <Forms
        newTaskText=
        {this.state.newTaskText}
        newTask=
        {this.newTask}
        newTaskClickFunction=
        {this.newTaskClickFunction}
        />
        <List
        taskList={this.state.tasks}
        />
        </div>
    )
  }
}

export default ToDo
