import React from 'react'

import Task from './Task'
import PaperRefined from './../PaperRefined'

const TaskList = (props) => (
    <PaperRefined>
        {
            props.taskList.map(
                task => (
                    <Task
                    key={task.key}
                    task={task}
                )
            )
        }
        </PaperRefined>
    )

    export default TaskList