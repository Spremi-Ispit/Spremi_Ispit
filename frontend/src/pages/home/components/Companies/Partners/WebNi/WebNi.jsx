import React from 'react';
import Card from '../../components/Card/Card';
import logoSrc from './logo.jpg';

const tags = ['WordPress'];

export const WebNi = () => {
  return (
    <Card
      name="WebNi"
      logo={{
        src: logoSrc,
        alt: 'Logo niške IT firme WebNi',
      }}
      tags={tags}
      link="https://itfirmeunisu.rs/webni/website"
      linkName="webni.me"
    />
  );
};
