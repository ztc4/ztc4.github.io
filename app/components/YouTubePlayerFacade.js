// components/YouTubePlayerFacade.js
"use client";
import { useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import YouTubePlayer from './YoutubePlayer';


function YouTubePlayerFacade({ videoId, startTime }) {
  const [loadPlayer, setLoadPlayer] = useState(false);

  const handleLoadPlayer = () => {
    setLoadPlayer(true);
  };

  return (
    <div className="youtube-facade">
      {loadPlayer ? (
        <YouTubePlayer videoId={videoId} startTime={startTime} />
      ) : (
        <div className="thumbnail" onClick={handleLoadPlayer}>
          <Image  height={367/1.3} width={632/1.3} src={`/version-4/youtube.png`} alt="Video Thumbnail" />
        </div>
      )}
    </div>
  );
}

export default YouTubePlayerFacade;