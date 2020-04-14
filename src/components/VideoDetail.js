import React from 'react';

const VideoDetail = ({selectedVideo}) => {
    if (!selectedVideo) {
        return <p>Loading..</p>;
    } 

    return (
        <div>
            <div className="ui embed">
                <iframe title="video player" src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`} />
            </div>
            <h3>{selectedVideo.snippet.title}</h3>
            <p>{selectedVideo.snippet.description}</p>
        </div>
    );
}

export default VideoDetail;