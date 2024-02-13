import React from 'react';
import styled from 'styled-components';
import NavLink from '../../../../../../components/NavLink';

const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
  width: 100%;
  padding: 10px;
  background-color: #fff;
  border-radius: 4px;
  gap: 10px;
`;

const HeaderDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const TagsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
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

const TagDiv = styled.div`
  font-size: 12px;
  line-height: 12px;
  margin: 4px;
  padding: 4px 6px;
  background-color: #e3e3e3;
  color: black;
`;

const Card = ({ tags, logo, name, link, linkName }) => {
  const { src, alt } = logo;

  return (
    <CardDiv>
      <HeaderDiv>
        <LogoImg alt={alt} src={src} />
        <NameDiv>
          <h3>{name}</h3>
          <StyledNavlink as="a" href={link} target="_blank">
            {linkName}
          </StyledNavlink>
        </NameDiv>
      </HeaderDiv>
      <TagsDiv>
        {tags.map((tag) => (
          <TagDiv>{tag}</TagDiv>
        ))}
      </TagsDiv>
    </CardDiv>
  );
};

export default Card;
