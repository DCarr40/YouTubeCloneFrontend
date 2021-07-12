import React, { Component } from 'react';
import axios from 'axios';
import TitleBar from './TitleBar/TitleBar';
import Comments from './Comments/Comments';
import SearchBar from './SearchBar/SearchBar';
import RelatedVideos from './RelatedVideos/RelatedVideos';


export default class App extends Component {
    constructor(props) {
        super(props);
    
    this.state = { 
        videoData: [],
    }
}
    componentDidMount() {
        // this.fetchVideos();
    }

    // async fetchVideo() {
    //     try {
    //         let response = await axios.get("https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=star wars&key=AIzaSyANrDPu3iDPgceB80QmFwv8nkzZcp1w4WU");
    //      } catch (err) {
    //        console.log(err);
    //      }
    // }

    async fetchRelatedVideos() {

    }

    render() {
        return(
            <React.Fragment>
                <TitleBar />
                <SearchBar />
                <Comments/>
                <RelatedVideos />          
            </React.Fragment>
        )
    }
}