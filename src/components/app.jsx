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
        videoData: {},
        searchVal:"",
        relatedVideoData: {},
        video: {},
        videoId: ''

    }

    this.handleChange= this.handleChange.bind(this);
    this.handleSubmit= this.handleSubmit.bind(this);
}

    handleChange(event){
        event.preventDefault();
        this.setState({searchVal: event.target.value});
    }


    handleSubmit(event){
        event.preventDefault();
        this.fetchVideos()
    };


    componentDidMount() {
        console.log('Component mounted!')
        this.fetchVideos();
        this.fetchRelatedVideos();
    }

    componentDidUpdate(){
        console.log('Component updated!')
    }

    async fetchVideos() {

        try {
            console.log('fetchVideos ran!')
            let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${this.state.searchVal}&key=${API_KEY}`);
            this.setState({ videoData: response.data, video: response.data.items[0], videoId: response.data.items[0].id.videoId});
         
         } catch (err) {
           console.log(err);
         }
    }


    async fetchRelatedVideos() {
        try {
            let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${this.state.searchVal}=video&key=${API_KEY}`);
            this.setState({ relateVideoData: response.data});
         } catch (err) {
           console.log(err);
         }
    }

    render() {

        if(this.state.videoData ===  undefined){
            return (
            <div>Loading...</div>
            )
        }
        console.log(this.state)

        return(   
            <React.Fragment>
                <TitleBar />
                <SearchBar handleChange={(event)=>this.handleChange(event)}  handleSubmit={(event)=>this.handleSubmit(event)}  searchValue = {this.state.searchVal}/>
                <RelatedVideos relatedVideoData= {this.state.relatedVideoData} />  
                <VideoPlayer videoData= {this.state.videoData}/>
                <Comments/>         
            </React.Fragment>
        )
    }
}