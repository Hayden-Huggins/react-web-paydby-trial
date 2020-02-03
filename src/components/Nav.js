import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Nav extends Component{
    render(){
        return <ul>
                <li><Link to={"/Tasks"}>Tasks</Link></li>
                <li><Link to={"/Posts"}>Posts</Link></li>
              </ul>
    }
}

export default Nav