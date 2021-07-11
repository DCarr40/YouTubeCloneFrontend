import React from 'react'
import './TitleBar.css';

function TitleBar() {
    return (
    <>
        <nav className="navbar backStyle">
            <div className="container-fluid alignThatText">
                <span className="navbar-brand mb-0 h1">YouTubeClone Project</span>
                {/* Search Bar can also go in here if you want*/}
            </div>
        </nav>
    </>
    )
}

export default TitleBar;
