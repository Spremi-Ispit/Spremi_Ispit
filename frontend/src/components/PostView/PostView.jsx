import React from 'react';
import styled from 'styled-components';
import colors from '../../theme/colors';
import { Divider } from '@mui/material';
import NavLink from '../navbar/components/components/NavLink';
import { profilePostsRoute } from '../../router/routes';
import { allowedUrlParams } from '../../utils/managers/UrlManager';
import FileViewer from '../fileViewer/FileViewer';
import LikeDislike from './components/LikeDislike';
import Delete from './components/Delete';
import Report from './components/Report';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import env from '../../config/env';

const StyledDivider = styled(Divider)`
  && {
    margin-left: auto;
    margin-right: auto;
  }
`;

const PostViewDiv = styled.div`
  background-color: white;
  margin-bottom: 20px;
  box-shadow: rgba(0, 0, 0, 0.75) 0px 1px 3px;
  flex: 1;
  overflow-wrap: anywhere;
`;

const HeaderDiv = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

const DescriptionDiv = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 10px;
`;

const FooterDiv = styled.div`
  font-weight: bold;
  justify-content: space-between;
  display: flex;
  padding: 10px;
  background-color: ${colors.background};
  align-items: center;
`;

const PostedByNavlink = styled(NavLink)`
  color: black;

  :hover {
    color: black;
  }
`;

const UserDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AttachmentsDiv = styled.div``;

const MainDiv = styled.div`
  padding: 10px;
`;

const PostView = ({
  data,
  addLike,
  removeLike,
  addDislike,
  removeDislike,
  report,
  delete: deletePost,
  onSuccessfulDeletion,
  className,
}) => {
  const {
    id,
    title,
    text,
    date,
    likes,
    dislikes,
    postedBy,
    userId,
    owner,
    likeStatus,
    files,
  } = data; //files: [{id, ext, path}]

  return (
    <PostViewDiv className={className}>
      <MainDiv>
        <HeaderDiv>{title}</HeaderDiv>
        <DescriptionDiv>
          <Markdown remarkPlugins={[remarkGfm]}>{text}</Markdown>
        </DescriptionDiv>
        <AttachmentsDiv>
          {files.length > 0 && (
            <FileViewer
              files={files.map((file) => {
                const src = env.BACKEND_URL + '/files/' + file.path; //'http://localhost:4000/files/1.png' or .../1.pdf

                return {
                  src,
                  name: file.path, //'1.png' or '1.pdf'
                };
              })}
            />
          )}
        </AttachmentsDiv>
      </MainDiv>
      <StyledDivider />
      <FooterDiv>
        <LikeDislike
          postId={id}
          likes={likes}
          dislikes={dislikes}
          likeStatus={likeStatus}
          addPostLike={addLike}
          removePostLike={removeLike}
          addPostDislike={addDislike}
          removePostDislike={removeDislike}
        />
        <UserDiv>
          <PostedByNavlink
            to={`${profilePostsRoute}?${allowedUrlParams.username}=${postedBy}`}
          >
            {postedBy}
          </PostedByNavlink>
          <Delete
            postId={id}
            deletePost={deletePost}
            onSuccessfulDeletion={onSuccessfulDeletion}
            postedBy={postedBy}
          />
          <Report postId={id} reportPost={report} />
        </UserDiv>
      </FooterDiv>
    </PostViewDiv>
  );
};

export default PostView;
