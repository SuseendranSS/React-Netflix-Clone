import React, { useState, useEffect } from 'react';
import './Card.css';
import axios from 'axios';

export default function Card(props) {
  // Assuming `props.poster` is a partial path, prepend base URL
  const imageUrl = `https://image.tmdb.org/t/p/w500/${props.poster}`;
  const [video, setVideo] = useState('');
  const youtubeURL = `https://www.youtube.com/embed/`;
  const [videoFound, setVideoFound] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  }

  const handleMouseLeave = () => {
    setIsHovered(false);
  }

  const fetchURL = async () => {
    try {
      const response = await axios.get(`/movie/${props.id}/videos`, {
        params: {
          api_key: 'f0fc2c2ea8db74c1852293bba58ac8d9',
          append_to_response: 'videos',
        },
      });
      const videoKey = response.data.results[0]?.key;
      if (videoKey) {
        setVideo(videoKey);
        setVideoFound(true);
      }
    } catch (error) {

    }
  };

  useEffect(() => {
    fetchURL();
  }, []);

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {videoFound && (
        <img className='card-poster' alt='poster' src={imageUrl} style={{ display: isHovered ? 'none' : 'block' }} />
      )}
      {isHovered && video && (
        <iframe
          className='card-video'
          width='231px'
          height='100%'
          src={`${youtubeURL}${video}`}
          title='Youtube video player'
          frameBorder='0'
          allow='autoplay; encrypted-media; accelerometer; clipboard-write; gyroscope; picture-in-picture'
          allowFullScreen
        />
      )}
    </div>
  );
}
