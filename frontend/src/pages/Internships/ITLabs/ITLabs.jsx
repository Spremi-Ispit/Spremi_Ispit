import React, { useState } from 'react';
import styled from 'styled-components';
import NavLink from '../../../components/NavLink';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import logoSrc from './logo.png';

const ITLabsDiv = styled.div`
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

const ITLabsHeaderDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const ITLabsDescription = styled.div``;

const ITLabs = () => {
  const [open, setOpen] = useState(true);

  return (
    <ITLabsDiv>
      <HeaderDiv>
        <LogoImg alt={'SpremiIspit'} src={logoSrc} />
        <NameDiv>
          <h3>IT Labs</h3>
          <StyledNavlink as="a" href="https://www.it-labs.com/" target="_blank">
            it-labs.com
          </StyledNavlink>
        </NameDiv>
      </HeaderDiv>
      <ArrowDiv onClick={() => setOpen((prev) => !prev)}>
        Detaljnije
        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </ArrowDiv>
      {open && (
        <>
          <ITLabsHeaderDiv>
            <h3>Tech academy</h3>
          </ITLabsHeaderDiv>
          <ITLabsDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac
            sodales lorem, non feugiat dui. Sed a purus mauris. Etiam dapibus
            mauris vel felis sagittis malesuada. Quisque efficitur nisl sed nisi
            tempor, at tempus sem laoreet. Cras in placerat dui. Etiam tincidunt
            ex at congue bibendum. Aenean tortor diam, suscipit id sodales ac,
            sagittis nec neque. Nullam ac vulputate velit. Sed imperdiet diam
            enim. Nam eu orci fermentum enim bibendum laoreet. Vivamus et mi
            leo. Pellentesque dolor ipsum, finibus non cursus at, porta dictum
            nisi. Morbi ultrices enim vitae rhoncus aliquam. Vestibulum aliquet
            lectus vel metus sagittis aliquet. Curabitur nisl nunc, placerat
            quis sem eu, condimentum egestas eros.
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
          </ITLabsDescription>
        </>
      )}
    </ITLabsDiv>
  );
};

export default ITLabs;
