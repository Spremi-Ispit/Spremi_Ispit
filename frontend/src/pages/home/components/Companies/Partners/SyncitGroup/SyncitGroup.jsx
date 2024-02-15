import React from 'react';
import Card from '../../components/Card/Card';
import logoSrc from './logo.png';

const tags = [
  'Computer Vision',
  'NLP',
  'Transformers',
  'PyTorch',
  'TensorFlow',
  'Scikit Learn',
  'Pandas',
  'Python',
  'Laravel',
  'WordPress',
  'Magento',
  'Vue.js',
  'Android',
  'JavaScript',
  'PHP',
  'ReactJS',
  'Angular',
  'iOS',
  'jQuery',
  'Docker',
  'Drupal',
  'CakePHP',
  'WooCommerce',
];

export const SyncitGroup = () => {
  return (
    <Card
      name="Syncit Group"
      logo={{
        src: logoSrc,
        alt: 'Logo niške IT firme Syncit Group',
      }}
      tags={tags}
      link="https://itfirmeunisu.rs/syncit-group/website"
      linkName="syncitgroup.com"
    />
  );
};
