"use client";
import YouTube from 'react-youtube';

function  YouTubePlayer ({ videoId }) {
  const opts = {
    height: 367/1.3,
    width: 632/1.3,
    playerVars: {
      autoplay: 0,
    },
  };

  const onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  return <YouTube videoId={videoId} opts={opts} onReady={onReady} />;
};

export default YouTubePlayer;