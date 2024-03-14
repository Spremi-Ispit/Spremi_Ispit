import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NavLink from '../../../components/NavLink';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import useElementSizeOnResize from '../../../utils/useElementSizeOnResize';
import Internship from './components/Internship';

const minCardHeight = 130;

const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
  width: 100%;
  padding: 10px;
  background-color: #fff;
  border-radius: 4px;
  gap: 10px;
  max-width: 330px;
  height: ${({ $open }) => !$open && `${minCardHeight}px`};
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
  color: #535cb5;
  :hover {
    color: #333da8;
  }

  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 18px;
  text-decoration: none;
`;

const TagsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
`;

const TagDiv = styled.div`
  font-size: 12px;
  line-height: 12px;
  margin: 4px;
  padding: 4px 6px;
  background-color: #e3e3e3;
  color: black;
`;

const HeaderArrowDiv = styled.div`
  flex: 1;
  display: flex;
  justify-content: end;
`;

const StyledKeyboardArrowDownIcon = styled(KeyboardArrowDownIcon)`
  cursor: pointer;
`;

const StyledKeyboardArrowUpIcon = styled(KeyboardArrowUpIcon)`
  cursor: pointer;
`;

const Card = ({ tags, logo, name, link, linkName, internship }) => {
  const { src, alt } = logo;
  const [open, setOpen] = useState(true);
  const { height, ref } = useElementSizeOnResize();
  const [initialized, setInitialized] = useState(false);
  const [arrows, setArrows] = useState(false);

  useEffect(() => {
    if (!initialized && height > minCardHeight) {
      setOpen(false);
      setArrows(true);
      setInitialized(true);
    }
  }, [height]);

  return (
    <CardDiv $open={open} ref={ref}>
      <HeaderDiv>
        <LogoImg alt={alt} src={src} />
        <NameDiv>
          <h3>{name}</h3>
          <StyledNavlink as="a" href={link} target="_blank">
            {linkName}
          </StyledNavlink>
        </NameDiv>
        {arrows && (
          <HeaderArrowDiv>
            {open ? (
              <StyledKeyboardArrowUpIcon
                onClick={() => setOpen((prev) => !prev)}
              />
            ) : (
              <StyledKeyboardArrowDownIcon
                onClick={() => setOpen((prev) => !prev)}
              />
            )}
          </HeaderArrowDiv>
        )}
      </HeaderDiv>
      <TagsDiv>
        {tags.map((tag, index) => (
          <TagDiv key={index}>{tag}</TagDiv>
        ))}
      </TagsDiv>
      {open && <Internship internship={internship} name={name} />}
    </CardDiv>
  );
};

export default Card;
