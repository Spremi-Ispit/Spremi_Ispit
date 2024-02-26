import React from 'react';
import Card from '../../components/Card/Card';
import logoSrc from './logo.jpg';

const tags = [
  '.NET',
  'Java',
  'nopCommerce',
  'NodeJS',
  'Angular',
  'Vue.js',
  'React',
  'NextJS',
  'Svelte(Kit)',
  'Swift',
  'Kotlin',
  'Flutter',
  'React Native',
  '.NET MAUI',
  'PostgreSQL',
  'SQL Server',
  'MySQL',
  'MongoDB',
  'Redis',
  'TimescaleDB',
  'Apache Kafka',
  'Elasticsearch',
  'Docker',
  'AWS',
  'Azure',
  'Google Cloud',
  'Firebase',
  'Netlify',
  'Vercel',
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
      linkName="ingsoftware.com"
    />
  );
};
