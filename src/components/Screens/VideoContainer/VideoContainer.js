import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const VideoContainer = ({ sources, poster }) => {
  const videoRef = useRef(null);
  const { ref, inView } = useInView({
    threshold: .6,
  });

  useEffect(() => {
    if (inView) {
      videoRef.current?.play()
    } else {
      videoRef.current?.pause()
    }
  }, [inView]);

  return (
    <div ref={ref} className="video__container">
      <div className="video__mask mask"></div>
      <video key={poster} ref={videoRef} type="video/mp4" muted="muted" autoPlay={true} loop={true} poster={poster}>
        {sources.map(({ src, type }) => <source key={src} src={src} type={type} />)}
      </video>
      <div className="video__mask mask"></div>
    </div>
  )
};

export default VideoContainer;
