import React from 'react';
import "./relatedVideos.css";
import VideoCard from "../VideoCard/videoCard";


export default function relatedVideos(props) {
 
 
    return (
        
        <div className="relatedVideos alignThatBar">
            <h2>related</h2>
            <VideoCard 
            title="I've been challenged to a CSS Battle rematch | Can I beat him again???"
            description="A rematch between me and @Web Dev Simplified at https://cssbattle.dev">
            </VideoCard>
        </div>
    )
    }


