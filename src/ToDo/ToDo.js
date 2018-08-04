import React from "react";

class ToDo extends React.Component {
  state = {
    task: [
        { isCompleted: false }
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

  
}
