import React from 'react';
import Card from '../../components/Card/Card';
import logoSrc from './logo.jpg';

const tags = [
  'CMS WordPress (PHP, JavaScript, HTML, CSS)',
  'Grafičkim dizajn',
  'Google Ads',
  'SMM (Social Media Marketing)',
];

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
