import { func } from 'prop-types';
import React from 'react';
import './SearchBar.css';
import {API_KEY} from '../../config/requests';

export default function SearchBar(props) {


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

    // function videoSearch (key, Search, maxResults) {
    //     $.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${search}&maxResults=${maxResults}key=${API_KEY}`)
    // }



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