import React from 'react';
import Card from '../../components/Card/Card';
import logoSrc from './logo.png';

const tags = [
  'MS SQL Server',
  ' WCF',
  ' WPF',
  'C#',
  'Java',
  'Sybase',
  'Spring',
  'SpringBoot',
  'JUnit',
  'TestNG',
  'Maven',
  'Gradle',
  '.NET',
  'Entity Framework',
  'Angular',
  'Node.js',
  'nginx',
  'Docker',
  'Kubernetes',
  'Azure',
  'Azure DevOps',
  'Cloudflare',
  'React',
  'Ractnative',
];

export const AccordiaGroup = () => {
  return (
    <Card
      name="Accordia Group"
      logo={{
        src: logoSrc,
        alt: 'Logo niške IT firme Accordia Group',
      }}
      tags={tags}
      link="https://itfirmeunisu.rs/accordia-group/website"
      linkName="Accordia Group"
    />
  );
};
