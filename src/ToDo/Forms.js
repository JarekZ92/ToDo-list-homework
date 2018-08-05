import React from 'react'

import PaperRefined from './PaperRefined'
import TextField from 'material-ui'
import RaisedButton from 'material-ui/RaisedButton'

const Forms = (props) => (
    <PaperRefined>
        <TextField 
        type={'text'}
        value={props.newTaskText}
        fullWidth={true}
        onChange={props.newTask}
        />
        <RaisedButton
        label= 'Add new task'
        primary={true}
        fullWidth={true}
        onClick={props.newTaskClickFunction}
        />
        </PaperRefined>
)

export default Forms