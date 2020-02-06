import React, {Component} from 'react'
import Post from './Post'

// member variable used to hold posts and is passed through the sort function to be resourted
// this is then iterated over by the map variable and individual posts are passed through instances of Post
let PostList = [];

// need to refactor state into a store
class Posts extends Component{
    state={
        loading: true,
        posts: null
    }

            // making asyncronus API call to API endpoint
            async componentDidMount(){
            const url = "https://www.mocky.io/v2/5b9755c43000006a000bd53f";
            const response = await fetch(url);
            const postsData = await response.json();
            // storing the data in state, Still need to actually pull this data from the store
            this.setState({posts: postsData.data, loading: false})
            // setting the Post list to a member variable
            PostList = postsData.data;
        }

    render(){
        // a list of posts which are sorted then iterated over to return instances of Post which contain their respective variables
        // need to refactor loading state and create prettier loading element
        // loading logic, if state is loading and waiting on posts show loading, if post state is set then show post

        // need to fix tasks not loading on first page enter, will work on subsequent page entries
         return  <div> {this.state.loading || !this.state.posts ? (<div>Loading...</div>) : (
                PostList.sort(function (x, y){return x.order < y.order}).map(post => <Post post={post}/>))}
         </div>
    }
}

export default Posts