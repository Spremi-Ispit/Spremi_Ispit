import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Navbar from '../../components/navbar/Navbar';
import Post from './components/Post';
import { CreateComment } from './components/CreateComment/CreateComment';
import Comments from './components/Comments';
import Footer from './components/Footer/Footer';

const ContentDiv = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;

export const ViewPost = () => {
  const createCommentRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <ContentDiv>
        <Post />
        <Comments />
        <CreateComment ref={createCommentRef} />
      </ContentDiv>
      <Footer ref={createCommentRef} />
    </>
  );
};

export default ViewPost;
