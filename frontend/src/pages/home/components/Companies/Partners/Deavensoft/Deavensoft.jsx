import React from 'react';
import Card from '../../components/Card/Card';
import logoSrc from './logo.jpg';

const tags = [
  'ReactJS',
  'Java',
  'Spring',
  'Vue.js',
  'Elasticsearch',
  'Docker',
  'Scala',
  'SAP Hibris',
];

export const Deavensoft = () => {
  return (
    <Card
      name="Deavensoft"
      logo={{
        src: logoSrc,
        alt: 'Logo niške IT firme Deavensoft',
      }}
      tags={tags}
      link="https://itfirmeunisu.rs/deavensoft/website"
      linkName="deavensoft.com"
    />
  );
};
