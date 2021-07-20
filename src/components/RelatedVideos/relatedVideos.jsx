import React from 'react';
import "./relatedVideos.css";
import VideoCard from "../VideoCard/videoCard"



export default function relatedVideos(props) { 
    return (
        <div className="relatedVideos alignThatBar">
            <h2>related</h2>
            <VideoCard>
                <div className=""></div>
            </VideoCard>
        </div>
    )
    }


