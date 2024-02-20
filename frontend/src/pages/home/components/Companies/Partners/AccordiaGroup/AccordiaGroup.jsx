import React from 'react';
import Card from '../../components/Card/Card';
import logoSrc from './logo.png';

const tags = [
  'C#',
  'NodeJS',
  'Angular',
  'Java',
  'Spring',
  'Spring Boot',
  'SQL Server',
  'ReactNative',
  'WCF',
  'WPF',
  '.NET core',
  'Azure',
  'Maven',
  'Docker',
  'Sybase',
  'Kubernetes',
  'Nginx',
  'Entity Framework',
  'Azure DevOps',
  'JUnit',
  'TestNG',
  'Gradle',
];

export const AccordiaGroup = () => {
  return (
    <Card
      name="AccordiaGroup"
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
