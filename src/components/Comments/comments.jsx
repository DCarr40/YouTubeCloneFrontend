import React from 'react';
import axios from 'axios';

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
            this.setState({ commentData: response.data});
            console.log(this.state.commentData);
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
            <div className= "Comments" >{JSON.stringify(this.state.commentData)}</div>
        )
    }
}