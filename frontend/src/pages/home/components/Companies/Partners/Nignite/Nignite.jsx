import React from 'react';
import Card from '../../components/Card/Card';
import logoSrc from './logo.jpg';

const tags = ['C#', 'JavaScript', 'Angular'];

export const Nignite = () => {
  return (
    <Card
      name="Nignite"
      logo={{
        src: logoSrc,
        alt: 'Logo niške IT firme Nignite',
      }}
      tags={tags}
      link="https://www.nignite.com"
      linkName="Nignite"
    />
  );
};
