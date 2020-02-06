import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Post extends Component{
    render()
    {
        // passing in the current post as a prop from the Posts class and setting it to a variable
        const post = this.props.post;
        // a post markup using variables passed in as props
        return <ul>
        <li><img src={post.image} alt="Blog post pic"></img></li>
        <li>{post.name}</li>
        <li>{post.subtitle}</li>
        <li>{post.content}</li>
        <button><Link to="/Post/${post.index}">View Post</Link></button> {/* need to fix linking here, post page should take in index to view on its own page */}
       </ul>
    }
}

export default Post