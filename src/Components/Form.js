import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: "",
             comments: "",
             topic: "react"
        }
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handleTopicChange = event => {
        this.setState({
            topic: event.target.value
        });
    }

    handleSubmit = event => {
        this.setState({});
        event.preventDefault();
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Username</label>
                        <input type="text" value={this.state.username} onChange={this.handleUsernameChange}/>
                    </div>
                    <div>
                        <label>Comments</label>
                        <textarea rows="5" cols="25" value={this.state.comments} onChange={this.handleCommentsChange}></textarea>
                    </div>
                    <div>
                        <label>Topic</label>
                        <select style={{cursor: "pointer"}} value={this.state.topic} onChange={this.handleTopicChange}>
                            <option value="react">React</option>
                            <option value="angular">Angular</option>
                            <option value="vue">Vue</option>
                        </select>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Form;
