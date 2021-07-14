import React, { Component } from 'react';
import axios from 'axios';
import TitleBar from './TitleBar/titleBar';
import Comments from './Comments/comments';
import SearchBar from './SearchBar/searchBar';
import RelatedVideos from './RelatedVideos/relatedVideos';
import VideoPlayer from './VideoPlayer/videoPlayer';


export default class App extends Component {
    constructor(props) {
        super(props);
    
    this.state = { 
        videoData: [],
        filters: "",
    }
}

handleChange(event){
    event.preventDefault();
    this.setState({filters:event.target.value});
    console.log(this.state.filters);
}

    // componentDidMount() {
    //     this.fetchVideos();
    // }

    // async fetchVideo() {
    //     try {
    //         let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q={SEARCH QUERY HERE}&key=${API_KEY}`);
    //         this.setState({ videoData: response.data });
    //         console.log(this.state.videoData);
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
                <SearchBar handleChange={(event)=>this.handleChange(event)}/>
                <VideoPlayer/>
                <Comments/>
                <RelatedVideos />          
            </React.Fragment>
        )
    }
}