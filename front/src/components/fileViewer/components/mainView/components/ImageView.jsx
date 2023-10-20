import React from 'react';
import styled from 'styled-components';

const Image = styled.div`
  border-radius: 10px;
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    border-radius: 10px;
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

export const ImageView = ({ file }) => {
  //file = {src: URL.createObjectURL(...), name: "fileName"}

  return (
    <Image>
      <img src={file.src} alt="loading..." />
    </Image>
  );
};
