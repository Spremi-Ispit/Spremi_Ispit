import React from 'react';
import Card from '../../components/Card/Card';
import logoSrc from './logo.jpg';

const tags = [
  'JavaScript',
  '.NET',
  'ReactJS',
  'Java',
  'MySQL',
  'PostgreSQL',
  'Redis',
  'ReactNative',
  'Xamarin',
  'Vue.js',
  'Swift',
  'Elasticsearch',
  'Kafka',
  'MongoDB',
  'Amazon Web Services',
  'Azure',
  'Google Cloud Platform',
  'Docker',
  'Kotlin',
  'Flutter',
  'MS SQL',
  'TimescaleDB',
  'Firebase',
  'Netlify',
];

export const Ingsoftware = () => {
  return (
    <Card
      name="Ingsoftware"
      logo={{
        src: logoSrc,
        alt: 'Logo niške IT firme Ingsoftware',
      }}
      tags={tags}
      link="https://itfirmeunisu.rs/ingsoftware/website"
      linkName="Ingsoftware"
    />
  );
};
