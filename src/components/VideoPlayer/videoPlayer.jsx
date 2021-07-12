import React from 'react'
import './VideoPlayer.css'

function VideoPlayer() {
    return (
        <div>
            <div className="container alignThatBox">
                <iframe src="" frameborder="1" className=""></iframe>
                <div>
                    <button id="playpause" type="button" data-state="play">Play/Pause</button>
                    <button id="stop" type="button" data-state="stop">Stop</button>
                    <button id="mute" type="button" data-state="mute">Mute/Unmute</button>
                    <button id="volup" type="button" data-state="volup">Vol+</button>
                    <button id="voldown" type="button" data-state="voldown">Vol-</button>
                    <button id="fs" type="button" data-state="fullscreen">Full</button>
                </div>
            </div>
        </div>
    )
}

export default VideoPlayer
