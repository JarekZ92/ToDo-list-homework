import React from 'react'

import PaperRefined from './PaperRefined'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const Forms = (props) => (
    <PaperRefined>
        <TextField 
        type={'text'}
        value={props.newTaskText}
        fullWidth={true}
        onChange={props.onNewTaskTextChanged}
        />
        <RaisedButton
        label= 'Add new task'
        primary={true}
        fullWidth={true}
        onClick={props.onAddNewTaskClickHandler}
        />
        </PaperRefined>
)

export default Forms