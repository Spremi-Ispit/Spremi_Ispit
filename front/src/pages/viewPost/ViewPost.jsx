import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Navbar from '../../components/navbar/Navbar';
import Breadcrumbs from '../../components/Breadcrumbs';
import Post from './components/Post';
import { CreateComment } from './components/createComment/CreateComment';
import { useSelector } from 'react-redux';
import Comments from './components/Comments';
import FooterOverlay from './components/footerOverlay/FooterOverlay';
import Footer from '../../components/Footer';
import { selectToken } from '../../redux/app/selectors';

const ContentContainer = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ViewPost = () => {
  const createCommentRef = useRef(null);
  const token = useSelector(selectToken);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <Breadcrumbs />
      <ContentContainer>
        <Post />
        <Comments />
        <CreateComment ref={createCommentRef} />
      </ContentContainer>
      <FooterOverlay ref={createCommentRef} />
      <Footer />
    </>
  );
};

export default ViewPost;
