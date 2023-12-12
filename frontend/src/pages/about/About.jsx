import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import styled from 'styled-components';
import { assets } from '../../assets';

const { logo } = assets;

const Title = styled.div`
  display: inline-block;
  text-align: center;
  margin-top: 10px;
  font-family: Poppins;
  font-weight: 600;
  font-size: 20px;
`;

const Paragraph = styled(Title)``;

const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;
const LogoImg = styled.img`
  width: 30%;
  height: 30%;
`;

const AboutDiv = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const About = () => {
  return (
    <>
      <Navbar />
      <AboutDiv>
        <ContentDiv>
          <Title>
            <h1>O projektu</h1>
            <Paragraph>
              Ovo je open-source projekat koji razvijaju studenti da bi olaksali
              pripremu/polaganje ispita. Cilj platforme je da olaksa deljenje
              materijala, postavljanje blanketa i resenja, beleski sa racunskih
              vezbi i predavanja kako bi svi materijali za pripremu ispita bili
              na jednom mestu.
            </Paragraph>
            <br />
            <br />
            <b>Zelis da se prikljucis razvoju?</b>
            <br />
            <a href="https://docs.google.com/document/d/1ktu2u97ZVWWkA9iWx_NgcXP7n91FJ2GnkX14wuvooW0/edit?usp=sharing">
              Rad na projektu
            </a>
          </Title>
        </ContentDiv>
        <LogoImg src={logo} alt="" />
      </AboutDiv>
    </>
  );
};

export default About;
