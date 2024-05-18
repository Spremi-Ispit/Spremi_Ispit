import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import Loader from '../../../../Loader';
import services from '../../../../../utils/services';
import Error from '../../../../dialogs/Error';

const VideoContainer = styled.div`
  border-radius: 10px;
  position: relative;
  height: 100%;

  video {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`;

export const VideoView = ({ file }) => {
  //file = {src: URL.createObjectURL(...), name: "fileName"}
  const [videoFile, setVideoFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadVideoFile = async () => {
      if (file.src.split(':')[0] !== 'blob') {
        try {
          setLoading(true);
          const video = await services.getVideoFile(file.src);
          setVideoFile(video);
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      } else {
        setVideoFile(file.src);
      }
    };

    loadVideoFile();
  }, [file]);

  if (error) {
    return <Error error={error} />;
  }
  if (loading) {
    return Loader;
  }

  if (videoFile)
    return (
      <VideoContainer>
        <video controls>
          <source src={videoFile} type="video/mp4" />
        </video>
      </VideoContainer>
    );

  return <h1>no video file</h1>;
};
