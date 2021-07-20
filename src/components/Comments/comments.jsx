import React from 'react';
import axios from 'axios';
import "./comments.css";


export default class Comments extends React.Component {

    constructor(props) {
        super(props);
    
    
    this.state = { 
        commentData: [],
        formData: {},
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
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

    handleChange(event){
        console.log(this.state.formData)
        this.setState({formData: event.target.value});
        console.log("Where you at")
    }

    handleSubmit(event){
        event.preventDefault();
        console.log("Made it past insertComment")
        console.log(this.props.videoId)
        this.postComment();
        
    };

    async postComment(props) {
        try{
            console.log("")
            let response = await axios.post('http://localhost:5000/api/collections/', {text: this.state.formData, videoId: this.props.videoId})
            console.log(response)
        } catch(err){
            console.log(err)
        }
    }

    displayComment(){
        
    }

    render() {
        if(this.state.commentData[0] ===  undefined){
            return (
            <div>Loading...</div>
            )
        }
        return (
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <input placeholder="Drop a Comment" type="text" onChange={this.handleChange} />
                    <button type="submit">Submit Comment</button>
                </form>
                {/* <div className="second" >Comment:// {this.state.commentData.filter((relatedC)=> relatedC.includes(`${this.videoID}`))}
                    <form id="insertreply" placeholder="insert a reply" name="" action=""><input type="text" /></form>
                    <div>Replies: {this.state.commentData[0].reply[0].text}</div>
                    <button className="button button1">Like {this.state.commentData[0].like}</button>
                </div> */}
                <div className= "Likes" >Likes: {this.state.commentData[0].like}</div>
                <div className= "Dislikes" >Dislikes: {this.state.commentData[0].dislike}</div>


            </div>
        )
    } //Add form to add comment, and reply.
}