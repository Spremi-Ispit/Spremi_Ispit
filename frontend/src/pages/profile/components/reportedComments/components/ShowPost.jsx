import React from 'react';
import { useNavigate } from 'react-router-dom';
import { viewPostRoute } from '../../../../../router/routes';
import Button from '../../../../../components/buttons/Button';
import { allowedUrlParams } from '../../../../../utils/managers/UrlManager';

export const ShowPost = ({ postId }) => {
  const navigate = useNavigate();

  const handleShowPost = () => {
    navigate({
      pathname: viewPostRoute,
      search: `${allowedUrlParams.postId}=${postId}`,
    });
  };

  return (
    <Button onClick={handleShowPost}>
      <h3> Prikaži objavu</h3>
    </Button>
  );
};

export default ShowPost;
