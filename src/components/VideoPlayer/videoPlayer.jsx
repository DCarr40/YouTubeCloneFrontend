import React from 'react'
import './VideoPlayer.css'

function VideoPlayer(props) {
    console.log("videoPlayer props.videoData.items", props.videoData.items);
    if(props.videoData.items){
        console.log("videoPlayer props.videoData.items[0].id.videoId", props.videoData.items[0].id.videoId);
        document.getElementById("showVideo").src="https://www.youtube.com/embed/" + props.videoData.items[0].id.videoId
        
    }
    
    
    return (
        <div>
           <h3 className="alignThatTitle">{props.videoData.items[0].snippet.title}</h3>
           
            <div className="alignThatBox">
            <iframe id="showVideo" width="560" height="315" src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>        
            
            </div>

            <h4 className="alignThatTitle">{props.videoData.items[0].snippet.description}</h4>
        </div>
    )
}

export default VideoPlayer
