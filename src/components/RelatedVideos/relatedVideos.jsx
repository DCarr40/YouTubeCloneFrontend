import React from 'react';
import "./relatedVideos.css";
import VideoCard from "../VideoCard/videoCard";

function relatedVideos() {
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


// export default function RelatedVideos (){

// return(
// //     // https://www.googleapis.com/youtube/v3/search?relatedToVideoId={VIDEO ID 
// //     // HERE}&type=video&key={API KEY HERE}
    


    
// //     {/* // <div className="list-group list-group-flush border-bottom scrollarea">

// //     //  </div>
// // ) */}

// // }

export default relatedVideos;
