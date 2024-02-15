import React from 'react';
import styled from 'styled-components';
import NavLink from '../../../components/NavLink';

const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
  width: 100%;
  padding: 10px;
  background-color: #fff;
  border-radius: 4px;
  gap: 10px;
  max-width: 800px;
`;

const CardHeaderDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const CardDescription = styled.div``;

const StyledNavlink = styled(NavLink)`
  gap: 5px;
  margin-left: 5px;

  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 18px;
  text-decoration: none;

  color: #535cb5;
  :hover {
    color: #333da8;
  }
`;

const Card = () => {
  return (
    <CardDiv>
      <CardHeaderDiv>
        <h3>Softver za kreiranje testova</h3>
      </CardHeaderDiv>
      <CardDescription>
        U toku prakse studenti bi imali priliku da rade na unapređenju
        postojećeg softvera za kreiranje testova. Na početku prakse studenti bi
        se upoznali sa postojećim sistemom, a posle toga bi njihov zadatak bio
        da pokrenu sistem na server. Obezbeđena je podrška mentora, minimalno
        trajanje prakse je dve nedelje. Nakon obavljene stručne prakse studenti
        mogu da očekuju ponudu da rade na unapređenju sistema.
        <br />
        <br />
        Kontakt:
        <StyledNavlink
          as="a"
          target="_blank"
          href="mailto:spremiispit@gmail.com"
        >
          spremiispit@gmail.com
        </StyledNavlink>
      </CardDescription>
    </CardDiv>
  );
};

export default Card;
