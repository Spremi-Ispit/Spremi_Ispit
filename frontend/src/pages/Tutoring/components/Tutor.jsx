import React, { useState } from 'react';
import styled from 'styled-components';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import GroupsIcon from '@mui/icons-material/Groups';
import colors from '../../../theme/colors';
import BoyIcon from '@mui/icons-material/Boy';

const Tutor = ({ tutor }) => {
  const { id, name, description, subjects, price, rating } = tutor;
  const { personally, group } = price;
  const [open, setOpen] = useState(false);

  const userRating = (rate) =>
    rating.reduce(
      (accumulator, user) => (accumulator + user.rate === rate ? 1 : 0),
      0
    );

  return (
    <TutorDiv $open={open}>
      <TutorHeaderDiv>
        <ProfileImg
          src={`https://ui-avatars.com/api/?name=${name}&background=random&color=random&bold=true`}
        />
        <TutorIdDiv>Id predavača: {id}</TutorIdDiv>
        <LikesDislikesDiv>
          <ThumbUpOffAltIcon />
          <UserRatingDiv>{userRating(1)}</UserRatingDiv>
          <DividerDiv />
          <UserRatingDiv>{userRating(-1)}</UserRatingDiv>
          <ThumbDownOffAltIcon />
        </LikesDislikesDiv>
        <HeaderArrowDiv $open={open}>
          <StyledKeyboardArrowDownIcon
            onClick={() => setOpen((prev) => !prev)}
          />
        </HeaderArrowDiv>
      </TutorHeaderDiv>
      {open && (
        <TutorContentDiv>
          <TutorDescriptionDiv>{description}</TutorDescriptionDiv>
          <SubjectsDiv>
            Predmeti:
            {subjects.map((subject) => (
              <SubjectDiv>{subject}</SubjectDiv>
            ))}
          </SubjectsDiv>
          <PricesDiv>
            Cena:
            <BoyIcon />
            {personally}
            <DividerDiv />
            <GroupsIcon />
            {group}
          </PricesDiv>
        </TutorContentDiv>
      )}
    </TutorDiv>
  );
};

export default Tutor;

const UserRatingDiv = styled.div``;

const TutorDescriptionDiv = styled.div`
  font-style: italic;
`;

const TutorContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SubjectsDiv = styled.div`
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  align-items: center;
`;

const SubjectDiv = styled.div`
  background-color: ${colors.footer};
  padding: 5px;
  border-radius: 5px;
`;

const TutorIdDiv = styled.div`
  flex: 1;
  justify-content: center;
  text-align: center;
  font-weight: bold;
`;

const DividerDiv = styled.div`
  border: 1px solid black;
  margin: 5px;
`;

const PricesDiv = styled.div`
  background: ${colors.background};
  padding: 5px 10px 5px 5px;
  border-radius: 10px;
  display: flex;
  width: fit-content;
`;

const LikesDislikesDiv = styled.div`
  background: ${colors.background};
  padding: 5px 10px;
  border-radius: 10px;
  display: flex;
  font-weight: 500;
`;

const ProfileImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
`;

const TutorDiv = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
  padding: 10px;
  background-color: #fff;
  border-radius: 4px;
  gap: 10px;
  width: 400px;
  max-height: ${({ $open }) => !$open && '56px'};
  height: fit-content;
  overflow: hidden;
`;

const TutorHeaderDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const StyledKeyboardArrowDownIcon = styled(KeyboardArrowDownIcon)`
  cursor: pointer;
`;

const HeaderArrowDiv = styled.div`
  display: flex;

  transform: ${({ $open }) => $open && 'rotate(180deg);'};
`;
