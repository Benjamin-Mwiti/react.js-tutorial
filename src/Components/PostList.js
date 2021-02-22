import React, { Component } from 'react';
import axios from 'axios';

class PostList extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             posts: [],
             errorMsg: ""
        }
    }
    
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response);
                this.setState({
                    posts: response.data
                })
            })
            .catch(error => {
                console.log(error);
                this.setState({errorMsg: "Error retrieving data!"});
            })
    }
    
    render() {
        const {posts, errorMsg} = this.state
        return (
            <div>
                <h1>List of posts</h1>
                {
                    posts.length ?
                    posts.map(post =>
                    <h3 key={post.id}>{post.title}</h3>
                        ) :
                        null
                }
                { errorMsg ? <h2>{errorMsg}</h2> : null }
            </div>
        )
    }
}

export default PostList;
