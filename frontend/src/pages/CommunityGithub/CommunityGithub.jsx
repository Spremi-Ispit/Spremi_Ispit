import React from 'react';
import styled from 'styled-components';
import Navbar from '../../components/navbar/Navbar';
import SettingsSidePanel from '../../components/SettingsSidePanel/SettingsSidePanel';

const MainDiv = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const CommunityGithubDiv = styled.div`
  display: flex;
  flex: 1;
`;

const GithubLinkDiv = styled.div`
  display: flex;
  flex: 1;
  padding-left: 20px;
  flex-direction: column;
`;

const PlaylistH2 = styled.h2`
  text-align: center;
`;

const CommunityGithub = () => {
  return (
    <>
      <Navbar />
      <CommunityGithubDiv>
        <SettingsSidePanel />
        <MainDiv>
          {githubs.map((github) => (
            <div key={github.name}>
              <PlaylistH2>{github.name}</PlaylistH2>
              {github.subjects.map((subject) => (
                <GithubLinkDiv key={subject.name}>
                  <h3>{subject.name}</h3>
                  <ul>
                    {subject.links.map((link) => (
                      <li key={link.name}>
                        <a href={link.link}>{link.name}</a>
                      </li>
                    ))}
                  </ul>
                  <br />
                </GithubLinkDiv>
              ))}
            </div>
          ))}
        </MainDiv>
      </CommunityGithubDiv>
    </>
  );
};

const githubs = [
  {
    name: 'Github linkovi',
    subjects: [
      {
        name: 'sssteeefaaan',
        links: [
          {
            name: 'DS-Priprema-20-21',
            link: 'https://github.com/sssteeefaaan/DS-Priprema-20-21',
          },
          {
            name: 'VIII-Semestar',
            link: 'https://github.com/sssteeefaaan/VIII-Semestar',
          },
          {
            name: 'VII-Semestar',
            link: 'https://github.com/sssteeefaaan/VII-Semestar',
          },
          {
            name: 'DistribuiraniSistemi',
            link: 'https://github.com/sssteeefaaan/DistribuiraniSistemi',
          },
          {
            name: 'VI-SemestarVI-Semestar',
            link: 'https://github.com/sssteeefaaan/VI-Semestar',
          },
          {
            name: 'II-Godina',
            link: 'https://github.com/sssteeefaaan/II-Godina',
          },
        ],
      },
      {
        name: 'Liz3r',
        links: [
          {
            name: 'AI-ProjekatAI-Projekat',
            link: 'https://github.com/Liz3r/AI-Projekat',
          },
          {
            name: 'MPI_Zadaci',
            link: 'https://github.com/Liz3r/MPI_Zadaci',
          },
          {
            name: 'VHDLVHDL',
            link: 'https://github.com/Liz3r/VHDL',
          },
          {
            name: 'NBP-Redis',
            link: 'https://github.com/Liz3r/NBP-Redis',
          },
        ],
      },
      {
        name: 'stefan-foo',
        links: [
          {
            name: 'DSnesto',
            link: 'https://github.com/stefan-foo/DSnesto',
          },
          {
            name: 'Mobilni sistemi i servisi - climb ',
            link: 'https://github.com/stefan-foo/climb',
          },
          {
            name: 'bye-world',
            link: 'https://github.com/stojkovic-milan/bye-world',
          },
          {
            name: 'domineering-ai',
            link: 'https://github.com/stefan-foo/domineering-ai',
          },
        ],
      },
      {
        name: 'MixXz',
        links: [
          {
            name: 'elfak-todo/studnet',
            link: 'https://github.com/elfak-todo/studnet',
          },
          {
            name: 'elfak-todo/domineering',
            link: 'https://github.com/elfak-todo/domineering',
          },
          {
            name: 'elfak-todo/prove-me-wrong',
            link: 'https://github.com/elfak-todo/prove-me-wrong',
          },
          {
            name: 'elfak-rwa-rxjs',
            link: 'https://github.com/MixXz/elfak-rwa-rxjs',
          },
          {
            name: 'elfak-todo/standb',
            link: 'https://github.com/elfak-todo/standb',
          },
          {
            name: 'elfak-data-security',
            link: 'https://github.com/MixXz/elfak-data-security',
          },
        ],
      },
    ],
  },
];

export default CommunityGithub;
