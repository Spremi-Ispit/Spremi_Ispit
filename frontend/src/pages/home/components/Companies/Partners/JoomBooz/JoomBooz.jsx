import React from 'react';
import Card from '../../components/Card/Card';
import logoSrc from './logo.jpg';

const tags = [
  'CMS WordPress ',
  'Digitalni Marketing',
  'JavaScript',
  'PHP',
  'MySQL',
  'jQuery',
];

export const JoomBooz = () => {
  return (
    <Card
      name="Joombooz"
      logo={{
        src: logoSrc,
        alt: 'Logo niške IT firme JoomBooz',
      }}
      tags={tags}
      link="https://www.joombooz.com/?ref=itfirmeunisu.rs"
      linkName="joombooz.com"
    />
  );
};
