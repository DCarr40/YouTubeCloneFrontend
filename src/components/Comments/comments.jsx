import React from 'react';
import axios from 'axios';
import "./comments.css";

export default class Comments extends React.Component {

    constructor(props) {
        super(props);
    
    this.state = { 
        commentData: [],
    }
}

    componentDidMount() {this.fetchComments();}

    async fetchComments() {
        try {
            let response = await axios.get("http://localhost:5000/api/collections");
            this.setState({ commentData: response.data });
         } catch (err) {
           console.log(err);
         }
    }

    render() {
        if(this.state.commentData[0] ===  undefined){
            return (
            <div>Loading...</div>
            )
        }
        return (
            <div>
                <div className="second" >Comment: {this.state.commentData[0].text}
                    <div>Replies: {this.state.commentData[0].reply[0].text}</div>
                    <button className="button button1">Like {this.state.commentData[0].like}</button>
                </div>
                <div className= "Likes" >Likes: {this.state.commentData[0].like}</div>
                <div className= "Dislikes" >Dislikes: {this.state.commentData[0].dislike}</div>
            </div>
        )
    } //Add form to add comment, and reply.
}