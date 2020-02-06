import React, {Component} from 'react'
import Task from './Task'

// member variable used to hold tasks
// this is then iterated over by the map variable and individual tasks are passed through instances of Task
let TaskList = [];

// need to refactor state into a store
class Tasks extends Component{
    state={
        loading: true,
        tasks: null
    }

            // making asyncronus API call to API endpoint
            async componentDidMount(){
            const url = "https://www.mocky.io/v2/5b97533d30000070000bd533";
            const response = await fetch(url);
            const tasksData = await response.json();
            // storing the data in state, Still need to actually pull this data from the store
            this.setState({tasks: tasksData.data, loading: false})
            // setting the Task list to a member variable
            TaskList = tasksData.data;
        }

    render(){
        // a list of tasks which are iterated over to return instances of Task which contain their respective variables
        // need to refactor loading state and create prettier loading element
        // loading logic, if state is loading and waiting on tasks show loading, if task state is set then show tasks

        // need to fix tasks not loading on first page enter, will work on subsequent page entries
         return  <div> {this.state.loading || !this.state.tasks ? (<div>Loading...</div>) : (
             TaskList.map(task => <Task task={task}/>))}
         </div>
    }
}

export default Tasks