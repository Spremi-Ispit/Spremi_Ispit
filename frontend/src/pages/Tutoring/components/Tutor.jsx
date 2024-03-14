import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import GroupsIcon from '@mui/icons-material/Groups';
import colors from '../../../theme/colors';
import BoyIcon from '@mui/icons-material/Boy';
import useElementSizeOnResize from '../../../utils/useElementSizeOnResize';

const minCardHeight = 200;
const minSubjectsHeight = 32;

const defaultDescription =
  'Rado ću ti pomoći da se spremiš za ispit ili laboratorijsku vežbu!';

const Tutor = ({ tutor }) => {
  const { id, name, description, subjects, price, rating } = tutor;
  const { personally, group } = price;

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

  const userRating = (rate) =>
    rating.reduce(
      (accumulator, user) => (accumulator + user.rate === rate ? 1 : 0),
      0
    );

  return (
    <TutorDiv $open={open} ref={ref}>
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
        {arrows && (
          <HeaderArrowDiv $open={open}>
            <StyledKeyboardArrowDownIcon
              onClick={() => setOpen((prev) => !prev)}
            />
          </HeaderArrowDiv>
        )}
      </TutorHeaderDiv>

      <TutorContentDiv>
        <TutorDescriptionDiv $open={open}>
          {description !== '' ? description : defaultDescription}
        </TutorDescriptionDiv>
        <SubjectsDiv $open={open}>
          Predmeti:
          {subjects.map((subject) => (
            <SubjectDiv>{subject}</SubjectDiv>
          ))}
        </SubjectsDiv>
        <PricesDiv>
          <PriceDiv>Cena:</PriceDiv>
          {group && (
            <>
              <StyledGroupsIcon />
              {group}
            </>
          )}
          {personally && group && <DividerDiv />}
          {personally && (
            <>
              <BoyIcon />
              {personally}
            </>
          )}
        </PricesDiv>
      </TutorContentDiv>
    </TutorDiv>
  );
};

export default Tutor;

const StyledGroupsIcon = styled(GroupsIcon)`
  margin-right: 5px;
`;

const SubjectsDiv = styled.div`
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  align-items: center;
  height: ${({ $open }) => !$open && minSubjectsHeight}px;
  overflow: ${({ $open }) => !$open && 'hidden'};
`;

const PriceDiv = styled.div`
  margin-right: 5px;
`;

const PricesDiv = styled.div`
  background: ${colors.background};
  padding: 5px 10px 5px 5px;
  border-radius: 10px;
  display: flex;
  width: fit-content;
  align-items: center;
`;

const UserRatingDiv = styled.div``;

const TutorDescriptionDiv = styled.div`
  font-style: italic;

  ${({ $open }) =>
    !$open &&
    `  
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;  
    `}
`;

const TutorContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
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
  height: 15px;
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
  height: ${({ $open }) => !$open && `${minCardHeight}px`};
  height: fit-content;
  overflow: hidden;

  width: 350px;

  @media (max-width: 800px) {
    width: 330px;
  }
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
