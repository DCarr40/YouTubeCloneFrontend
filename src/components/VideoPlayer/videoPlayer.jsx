import React from 'react'
import './VideoPlayer.css'

function VideoPlayer(props) {
    return (
        <div>
           <h3 className="alignThatTitle">"I've been challenged to a CSS Battle rematch | Can I beat him again???"</h3>
           
            <div className="alignThatBox">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/20QiX8rmHnU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            </div>
            <h4 className="alignThatTitle">"A rematch between me and @Web Dev Simplified at https://cssbattle.dev"</h4>
        </div>
    )
}

export default VideoPlayer
