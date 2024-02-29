import React, { useState } from 'react';
import styled from 'styled-components';
import NavLink from '../../../components/NavLink';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import logoSrc from './logo.jpg';

const SpremiIspitDiv = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
  width: 100%;
  padding: 10px;
  background-color: #fff;
  border-radius: 4px;
  gap: 10px;
  max-width: 650px;
  align-self: center;
`;

const HeaderDiv = styled.div`
  display: flex;
  gap: 10px;
`;

const LogoImg = styled.img`
  width: 72px;
  height: 72px;
  background-color: #fff;
  border: 4px solid #ebebeb;
  border-radius: 50%;
`;

const NameDiv = styled.div``;

const StyledNavlink = styled(NavLink)`
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

const StyledNavlink2 = styled(StyledNavlink)`
  gap: 5px;
  margin-left: 5px;
`;

const ArrowDiv = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;

  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 14px;
  text-decoration: none;
  cursor: pointer;
`;

const SpremiIspitHeaderDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const SpremiIspitDescription = styled.div``;

const SpremiIspit = () => {
  const [open, setOpen] = useState(false);

  return (
    <SpremiIspitDiv>
      <HeaderDiv>
        <LogoImg alt={'SpremiIspit'} src={logoSrc} />
        <NameDiv>
          <h3>SpremiIspit</h3>
          <StyledNavlink as="a" href="spremiispit.com" target="_blank">
            spremiispit.com
          </StyledNavlink>
        </NameDiv>
      </HeaderDiv>
      <ArrowDiv onClick={() => setOpen((prev) => !prev)}>
        Detaljnije
        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </ArrowDiv>
      {open && (
        <>
          <SpremiIspitHeaderDiv>
            <h3>Softver za kreiranje testova</h3>
          </SpremiIspitHeaderDiv>
          <SpremiIspitDescription>
            U toku prakse studenti bi imali priliku da rade na unapređenju
            postojećeg softvera za kreiranje testova. Na početku prakse studenti
            bi se upoznali sa postojećim sistemom, a posle toga bi njihov
            zadatak bio da pokrenu sistem na server. Obezbeđena je podrška
            mentora, minimalno trajanje prakse je dve nedelje. Nakon obavljene
            stručne prakse studenti mogu da očekuju ponudu da rade na
            unapređenju sistema.
            <br />
            <br />
            Kontakt:
            <StyledNavlink2
              as="a"
              target="_blank"
              href="mailto:spremiispit@gmail.com"
            >
              spremiispit@gmail.com
            </StyledNavlink2>
          </SpremiIspitDescription>
        </>
      )}
    </SpremiIspitDiv>
  );
};

export default SpremiIspit;
