import React from 'react';
import Video from './VideoItem';

const VideoList = ({videos, onVideoSelect}) => {

    const videoList = videos.map((video) => {
        console.log(video);
        return <Video key={video.id.videoId} video={video} onVideoSelect={onVideoSelect} />
    });

    return (
        <div className="ui relaxed divided list">
            {videoList}
        </div>
    );
}

export default VideoList;