'use client';

import React from 'react';
import YouTube, { YouTubeEvent, YouTubeProps } from 'react-youtube';

interface YoutubePlayerProps {
  videoId?: string;
  width?: string | number;
  height?: string | number;
}

const YoutubePlayer: React.FC<YoutubePlayerProps> = ({
  videoId = 'cLVNUl5Qf40',
  width = '100%',
  height = '100%',
}) => {
  const opts: YouTubeProps['opts'] = {
    height: height,
    width: width,
    playerVars: {
      autoplay: 0,
      controls: 1,
      modestbranding: 1,
      keyboard: 0,
      cc_load_policy: 0,
    },
  };

  return (
    <div className='relative' style={{ width, height }}>
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
};

export default YoutubePlayer;
