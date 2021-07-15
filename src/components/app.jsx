import React, { Component } from 'react';
import axios from 'axios';
import TitleBar from './TitleBar/titleBar';
import Comments from './Comments/comments';
import SearchBar from './SearchBar/searchBar';
import RelatedVideos from './RelatedVideos/relatedVideos';
import VideoPlayer from './VideoPlayer/videoPlayer';
import {API_KEY} from './config/requests';


export default class App extends Component {
    constructor(props) {
        super(props);
    
    this.state = { 
        videoData: [],
        searchVal:""
    }

    this.handleChange= this.handleChange.bind(this);
    this.handleSubmit= this.handleSubmit.bind(this);
}

    handleChange(event){
        this.setState({searchVal: event.target.value});
        console.log(this.state.searchVal);
    }


    handleSubmit(event){
        event.preventDefault();
        console.log('handleSubmit triggered!')
        this.fetchVideos()
    };


    componentDidMount() {
        this.fetchVideos();
    }

    async fetchVideos() {
        try {
            console.log(this.state.searchVal)
            let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${this.state.searchVal}&key=${API_KEY}`);
            this.setState({ videoData: response.data });
            console.log(this.state.videoData);
         } catch (err) {
           console.log(err);
         }
    }

    // async fetchRelatedVideos() {

    // }

    render() {
        return(   
            <React.Fragment>
                <TitleBar />
                <SearchBar handleChange={(event)=>this.handleChange(event)}  handleSubmit={(event)=>this.handleSubmit(event)}  searchValue = {this.state.searchVal}/>
                <VideoPlayer videoData= {this.state.videoData}/>
                <Comments/>
                <RelatedVideos />          
            </React.Fragment>
        )
    }
}