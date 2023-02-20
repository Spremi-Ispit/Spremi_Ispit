import React, { useEffect } from 'react';
import { useState } from 'react';
import services from '../../../../../../services';
import Loader from '../../../../../loader';
import ErrorDialog from '../../../../../errorDialog';
import { VideoContainer } from './styles';

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

  const viewToRender = () => {
    if (videoFile)
      return (
        <VideoContainer>
          <video controls>
            <source src={videoFile} type="video/mp4" />
          </video>
        </VideoContainer>
      );
    else return <h1>no video file</h1>;
  };

  return error ? (
    <ErrorDialog error={error} setError={setError} />
  ) : loading ? (
    <Loader />
  ) : (
    viewToRender()
  );
};
