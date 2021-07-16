import React from 'react';
import "./relatedVideos.css";
import VideoCard from "../VideoCard/videoCard"



export default function relatedVideos(props) {
    console.log("relatedVideoPlayer props.relatedVideoData", props.relatedVideoData);
 
    return (
        <div className="relatedVideos alignThatBar">
            <h2>related</h2>
            <VideoCard>
                <div className=""></div>
            </VideoCard>
        </div>
    )
    }


