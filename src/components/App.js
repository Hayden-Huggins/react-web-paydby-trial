import React from 'react'
import Tasks from './Tasks'
import Posts from './Posts'
import Nav from './Nav'
import Welcome from './Welcome'
import UserDetails from './UserDetails'
import {Link} from 'react-router-dom'
import {Route} from 'react-router-dom'

export default class App extends React.Component{

    state={
        loading: true,
        person: null
    }

    // making asyncronus API call to API endpoint
    async componentDidMount(){
        const url = "https://www.mocky.io/v2/5b9751e5300000332a0bd52d";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({person: data, loading: false})
        console.log(data);
        console.log(this.state.person.data.first_name);
    }

    render(){
        return <div>
                <div><Nav/></div>
            <Route exact path = "/" render={() => (
                <div>
                    <Welcome/>
                    <UserDetails/>
                </div>
            )}/>

            <Route path = "/Tasks" render={() => (
                <div>
                    <Tasks/>
                </div>
            )}/>

            <Route path = "/Posts" render={() => (
                <div>
                    <Posts/>
                </div>
            )}/>

                </div>
                     
        
    }
} 

