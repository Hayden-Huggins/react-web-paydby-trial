import React from 'react'
import Tasks from './Tasks'
import Posts from './Posts'
import Nav from './Nav'
import Welcome from './Welcome'
import UserDetails from './UserDetails'
import {Route} from 'react-router-dom'

export default class Main extends React.Component{

    render(){
        // navigation element to appear on all pages without needing to double dip on code
        return <div>
                <div><Nav/></div>
                {/* Route to the home page, loading in the welcome message and the user details */}
            <Route exact path = "/" render={() => (
                <div>
                    <Welcome/>
                    <UserDetails/>
                </div>
            )}/>
                {/* Route to the tasks page, loading in the tasks list */}
            <Route path = "/Tasks" render={() => (
                <div>
                    <Tasks/>
                </div>
            )}/>
                {/* Route to the posts page, loading in the tasks list */}
            <Route path = "/Posts" render={() => (
                <div>
                    <Posts/>
                </div>
            )}/>

                </div>
                     
        
    }
} 

