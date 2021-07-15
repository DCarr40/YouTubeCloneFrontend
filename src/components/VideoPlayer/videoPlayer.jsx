import React from 'react'
import './VideoPlayer.css'

function VideoPlayer(props) {
    return (
        <div>
            <div className="alignThatBox">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/20QiX8rmHnU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            </div>
        </div>
    )
}

export default VideoPlayer
