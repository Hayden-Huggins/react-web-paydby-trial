import React, {Component} from 'react'

class UserDetails extends Component{

    // need to refactor state into the store
    state={
        loading: true,
        person: null
    }

            // making asyncronus API call to API endpoint
            async componentDidMount(){
            const url = "https://www.mocky.io/v2/5b9751e5300000332a0bd52d";
            const response = await fetch(url);
            const data = await response.json();
            // storing the data in state, Still need to actually pull this data from the store
            this.setState({person: data, loading: false})
        }

    render(){
        // need to refactor loading state and create prettier loading element
        // loading logic, if state is loading and waiting on tasks show loading, if task state is set then show tasks
        return <div> {this.state.loading || !this.state.person ? (<div>Loading...</div>) : (
        <ul>
                <li><img src={this.state.person.data.avatar} alt="My Profile Pic"></img></li>
                <li>{this.state.person.data.first_name}</li>
                <li>{this.state.person.data.last_name}</li>
                <li>{this.state.person.data.email}</li>
               </ul>)} </div>
    }
}

export default UserDetails