import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Paper from '@mui/material/Paper';
import Footer from './components/footer/Footer';
import Info from './components/Info';
import Content from './components/Content';
import { PostViewProvider } from './PostViewContext';
import { allowedUrlParams } from '../../utils/managers/UrlManager';
import { useLocation, useNavigate } from 'react-router-dom';
import { viewPostRoute } from '../../router/routes';
import detectMouseButton, { mouseButtons } from '../../utils/detectMouseButton';
import ContextMenu, { contextMenuOption } from '../ContextMenu';

const StyledPaper = styled(Paper)`
  min-height: 150px;
  display: flex;
  flex-direction: column;
  width: 100%;
  cursor: ${({ link }) => (link ? 'pointer' : '')};
  height: fit-content;
  padding: 5px;
  margin-bottom: 15px;
  margin-top: 8px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.75) !important;
`;

export const postViewType = {
  post: 'post',
  comment: 'comment',
};

export const PostView = ({
  data,
  enableDelete = false,
  enableReport = false,
  enableFiles = false,
  enableShowPost = false,
  enableOpenInNewTab = false,
  type,
  shortDescription = false,
}) => {
  const {
    id,
    title,
    text,
    files,
    likes,
    dislikes,
    date,
    postedBy,
    likeStatus,
  } = data;
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const navigate = useNavigate();

  const createNewLocation = () => {
    const urlPostId = `${allowedUrlParams.postId}=${id}`;
    let newLocation = {
      pathname: viewPostRoute,
      search: `${location.search}&${urlPostId}`,
    };
    return newLocation;
  };

  const openInNewTab = () => {
    const { pathname, search } = createNewLocation();
    const newWindow = window.open(
      `${pathname}?${search}`,
      '_blank',
      'noopener,noreferrer'
    );
    if (newWindow) newWindow.opener = null;
  };

  const open = () => {
    const newLocation = createNewLocation();
    navigate(newLocation);
  };

  const showContextMenu = (ev) => {
    setShowMenu(true);
    setMouseX(ev.pageX - 75);
    setMouseY(ev.pageY - 20);
  };

  const handleOnMouseDown = (ev) => {
    if (location.pathname === viewPostRoute) {
      return;
    }

    const button = detectMouseButton(ev);

    if (button === mouseButtons.left) {
      open();
    }

    if (button === mouseButtons.right) {
      showContextMenu(ev);
    }

    if (button === mouseButtons.middle) {
      openInNewTab();
    }
  };

  return (
    <PostViewProvider value={{ type }}>
      <StyledPaper
        elevation={1}
        link={enableShowPost ? 1 : 0}
        onMouseDown={handleOnMouseDown}
        onContextMenu={(e) => e.preventDefault()}
      >
        <Content
          files={files}
          title={title}
          description={text}
          enableFiles={enableFiles}
          shortDescription={shortDescription}
        />
        <Info postedBy={postedBy} date={date} />
        <Footer
          likes={likes}
          dislikes={dislikes}
          likeStatus={likeStatus}
          postId={id}
          postedBy={postedBy}
          enableShowPost={enableShowPost}
          enableDelete={enableDelete}
          enableReport={enableReport}
        />
        <ContextMenu
          showMenu={showMenu}
          onMouseLeave={() => setShowMenu(false)}
          mouseX={mouseX}
          mouseY={mouseY}
          options={[
            contextMenuOption({
              name: 'Open in new tab',
              action: openInNewTab,
            }),
          ]}
        />
      </StyledPaper>
    </PostViewProvider>
  );
};

export default PostView;
