import React, {Component} from 'react';

class Task extends Component{
    render()
    {
        // passing in the current post as a prop from the Posts class and setting it to a variable
        const task = this.props.task;
        // a task markup using variables passed in as props
        return <ul>
        <li>{task.name}</li>
        <li>{task.subtitle}</li>
        <li>{task.description}</li>
        <li>{task.tags}</li>
       </ul>
    }
}

export default Task