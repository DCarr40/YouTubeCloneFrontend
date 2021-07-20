import React from 'react'
import './VideoPlayer.css'

function VideoPlayer(props) {
    // console.log("videoPlayer props.videoData.items", props.videoData.items[0]);

    if(!props.videoData.items){
        return (
        <div id="showVideo">Loading...</div>
        )
    }
    else{

        document.getElementById("showVideo").src="https://www.youtube.com/embed/" + props.videoData.items[0].id.videoId; 
    
    return (
        <div>

        
            <h3 className="alignThatTitle">{props.videoData.items[0].snippet.title}</h3>
            {/* <h3 id="header3" src="" ></h3> */}
            <div className="alignThatBox">
                <iframe id="showVideo" width="560" height="315" src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <h4 className="alignThatTitle">{props.videoData.items[0].snippet.description}</h4>
        </div>
    )
    }
}

export default VideoPlayer
