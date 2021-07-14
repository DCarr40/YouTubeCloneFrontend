import { func } from 'prop-types';
import React from 'react';
import axios from 'axios';
import './searchBar.css';
import {API_KEY} from '../../config/requests';

export default function SearchBar(props) {
    return(
        <div>
            <input type="text" placeholder="Search for videos..." onChange={props.handleChange} />
        </div>
    )

    // handleSubmit(event){
    //     const myform = document.getElementById("myform");
    //     myform.addEventListener("submit",(event) => {
    //         event.preventDefault();// prevents whole page from reloading on event change
    //         const req = new XMLHttpRequest();//instance of an XMLHttpRequest object
    //         console.log(myform)
    //         req.open("post", "http://localhost:5000/api/songs")// opens the request and use the post method at the URL
    //         req.onload = () => {
    //           console.log(req.responseText);// logs whatever the request spits out to the console
    //         }
    //         let formData = new FormData(myform);
    //         for (let [key, value] of formData.entries())
    //         console.log(key,value);
    //         req.send(formData);// sends the request and FormData matches name and value pairs easily with backend
    //         console.log("Form submitted");
            
    //     })
    //   }

    // function handleSearch (event) {
    //     event.preventDefault();

    //     const search = $("#search").val(search);
    //      videoSearch (API_KEY, search,1) {

    //     }
    // }

    function videoSearch (key, Search, maxResults) {
        axios.get(`https://www.googleapis.com/youtube/v3/search?q={SEARCH QUERY HERE}&key=${API_KEY}`)
    }

    // class AddSong extends Component {
    //     constructor(props){
    //         super(props);
    //         this.state = {
    //             title: "",
    //             album: "",
    //             artist: "",
    //             genre: "",
    //             releaseDate: ""
    //         }
    //         this.handleChange = this.handleChange.bind(this);
    //         this.handleSubmit = this.handleSubmit.bind(this);
    //     }
    
    //     handleChange(event){
    //         this.setState({
    //             [event.target.name]: event.target.value
    //         })
    //     }
    
    //     handleSubmit(event){
    //         event.preventDefault();
    //         const song = {
    //             title: this.state.title,
    //             album: this.state.album,
    //             artist: this.state.artist,
    //             genre: this.state.genre,
    //             releaseDate: this.state.releaseDate
    //         }
    //         this.props.addNewSong(song);
    //         this.setState({
    //             title: "",
    //             album: "",
    //             artist: "",
    //             genre: "",
    //             releaseDate: ""
    //         });
    //     }
    
    //     render(){
    //         return(
    //             <div>
    //                 <hr />
    //                 <center>
    //                     <h3>Add a song here!</h3>
    //                 </center>
    //                 <form onSubmit={this.handleSubmit}>
    //                     <div className="row col-align">
    //                         <div className="col-md-4">
    //                             <label>Title:</label>
    //                             <input type="text" name="title" value={this.state.title}
    //                             onChange={this.handleChange} />
    //                         </div>
    //                         <div className="col-md-4">
    //                             <label>Album:</label>
    //                             <input type="text" name="album" value={this.state.album}
    //                             onChange={this.handleChange} />
    //                         </div>
    //                         <div className="col-md-4">
    //                             <label>Artist</label>
    //                             <input type="text" name="artist" value={this.state.artist} 
    //                             onChange={this.handleChange}
    //                             />
    //                         </div>
    //                         <div className="col-md-4">
    //                             <label>Genre</label>
    //                             <input type="text" name="genre" value={this.state.genre} 
    //                             onChange={this.handleChange}
    //                             />
    //                         </div>
    //                         <div className="col-md-4">
    //                             <label>Release Date</label>
    //                             <input type="text" name="releaseDate" value={this.state.releaseDate} 
    //                             onChange={this.handleChange}
    //                             />
    //                         </div>
    //                         <div className="col-md-4">
    //                             <input type="submit" value="Add" />
    //                         </div>
    //                     </div>
    //                 </form>
    //             </div>
    //         );
    //     }
    // }
//Jenelle song form look above... hello.
    return (
        <div className= "container rightFace alignThatBar">
            <form id="myform">
                <div className = "form-group ">
                    <input type="text" className="form-control " id="search"/>
                    <input type="submit"  value="search"/>
                </div>
            </form>
        </div>
    )
}