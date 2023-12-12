import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  allowedUrlParams,
  useUrlManager,
} from '../../../../../utils/managers/UrlManager';
import Button from '../../../../../components/buttons/Button';

const PrevButton = styled(Button)`
  text-transform: uppercase;
`;

export const PrevPost = () => {
  const [postIds, setPostIds] = useState([]);
  const urlManager = useUrlManager();
  const { urlPostId, urlOrder } = urlManager.getParams();

  useEffect(() => {
    if (urlPostId && !postIds.includes(urlPostId)) {
      setPostIds((prev) => [...prev, urlPostId]);
    }
  }, [urlPostId]);

  const handlePreviousPost = () => {
    const prevId = postIds[postIds.length - 2];
    urlManager.updateUrlParam(allowedUrlParams.postId, prevId);
    setPostIds((prev) => prev.slice(0, -1));
  };

  if (!urlOrder || postIds.length < 2) {
    return null;
  }

  return <PrevButton onClick={handlePreviousPost}>prethodna «</PrevButton>;
};

export default PrevPost;
