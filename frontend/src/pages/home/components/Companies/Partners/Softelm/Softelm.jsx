import React from 'react';
import Card from '../../components/Card/Card';
import logoSrc from './logo.jpg';

const tags = ['Laravel', 'ReactJS', 'Angular', 'ReactNative', 'Ionic'];

export const Softelm = () => {
  return (
    <Card
      name="Softelm"
      logo={{
        src: logoSrc,
        alt: 'Logo niške IT firme Softelm',
      }}
      tags={tags}
      link="https://softelm.com/?ref=itfirmeunisu.rs"
      linkName="softelm.com"
    />
  );
};
