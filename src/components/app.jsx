import React, { Component } from 'react';
import axios from 'axios';

export default class App extends Component {
    state = { 
        commentData: [],
    }

    componentDidMount() {
        // this.fetchVideos();
        this.fetchComments();
    }

    // async fetchVideos() {
    //     try {
    //         let response = await axios.get("https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=star wars&key=AIzaSyANrDPu3iDPgceB80QmFwv8nkzZcp1w4WU");
    //      } catch (err) {
    //        console.log(err);
    //      }
    // }

    async fetchRelatedVideos() {

    }

    async fetchComments() {
        try {
            let response = await axios.get("http://localhost:5000/api/collections");
            this.setState({ commentData: response.data});
         } catch (err) {
           console.log(err);
         }
    }

    render() {
        console.log(this.state.commentData);
        if(this.state.commentData[0] ===  undefined){
            console.log(this.state.commentData);
            return (
            <div>Loading...</div>
            )
        }
        return(
            <React.Fragment>
                <div>{this.state.commentData.entries}</div>
            </React.Fragment>
        )

    }
}