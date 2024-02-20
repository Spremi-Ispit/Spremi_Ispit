import React from 'react';
import Card from '../../components/Card/Card';
import logoSrc from './logo.png';

const tags = [
  'C#',
  'Java',
  'JavaScript',
  'Angular',
  'React',
  'nodeJS',
  'Python',
  'PHP',
  'Vue.js',
  'AWS',
  'Google Cloud',
  'Microsoft Azure',
  'Ruby',
];

export const ITLabs = () => {
  return (
    <Card
      name="ITLabs"
      logo={{
        src: logoSrc,
        alt: 'Logo IT firme IT Labs',
      }}
      tags={tags}
      link="https://www.ITLabs.com"
      linkName="IT Labs"
    />
  );
};
