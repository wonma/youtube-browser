import React from 'react';
import './VideoItem.css';

const VideoItem = ({video, onVideoSelect }) => {

    return (
        <div className="video-item item" onClick={() => {onVideoSelect(video)}}>
            <img className="ui image" src={video.snippet.thumbnails.default.url} />
            <div className="content">
                <h4 className="header">{video.snippet.title}</h4>
            </div>
        </div>
    );
}

export default VideoItem;