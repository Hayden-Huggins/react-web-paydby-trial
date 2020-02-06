import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Nav extends Component{
    // navbar markup with Links which route to different pages of the application
    render(){
        return <div className="nav container-fluid">
                <a className="col-lg-1 col-sm-4"><Link to={"/"}>Home</Link></a>
                <a className="col-lg-1 col-sm-4"><Link to={"/Tasks"}>Tasks</Link></a>
                <a className="col-lg-1 col-sm-4"><Link to={"/Posts"}>Posts</Link></a>
              </div>
    }
}

export default Nav