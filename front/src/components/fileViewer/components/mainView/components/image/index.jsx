import React from 'react';
import { Image } from './styles';

export const ImageView = ({ file }) => {
  //file = {src: URL.createObjectURL(...), name: "fileName"}

  return (
    <Image>
      <img src={file.src} alt="loading..."/>
    </Image>
  );
};
