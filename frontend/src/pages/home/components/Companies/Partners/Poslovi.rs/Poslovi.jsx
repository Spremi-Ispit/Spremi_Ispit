import React from 'react';
import Card from '../../components/Card/Card';
import logoSrc from './logo.png';

const tags = ['Trazis posao?', 'Portal poslovi.rs je pravo mesto za tebe!'];

export const Poslovi = () => {
  return (
    <Card
      name="Poslovi"
      logo={{
        src: logoSrc,
        alt: 'Logo firme Poslovi.rs',
      }}
      tags={tags}
      link="https://www.poslovi.rs/"
      linkName="poslovi.rs"
    />
  );
};
