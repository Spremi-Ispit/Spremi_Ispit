import React from 'react';
import Card from '../../components/Card/Card';
import logoSrc from './logo.jpg';

const tags = ['Android', 'JavaScript', 'HTML', 'CSS'];

export const InfinitoMedia = () => {
  return (
    <Card
      name="InfinitoMedia"
      logo={{
        src: logoSrc,
        alt: 'Logo niške IT firme Infinito Media',
      }}
      tags={tags}
      link="https://itfirmeunisu.rs/infinito-media"
      linkName="infinitomedia.rs"
    />
  );
};
