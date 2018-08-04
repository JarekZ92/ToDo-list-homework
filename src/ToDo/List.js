import React from 'react'

import Task from './Task'
import PaperRefined from './PaperRefined'

const List = (props) => (
    <PaperRefined>
        {
            props.taskList.map(
                task => (
                    <Task
                    key={task.key}
                    task={task}
                    />
                )
            )
        }
        </PaperRefined>
    )

    export default List