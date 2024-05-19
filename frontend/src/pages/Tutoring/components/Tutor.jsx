import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import GroupsIcon from '@mui/icons-material/Groups';
import colors from '../../../theme/colors';
import BoyIcon from '@mui/icons-material/Boy';
import Button from '../../../components/buttons/Button';
import { images } from '../../../constants';
import { useUrlManager } from '../../../utils/managers/UrlManager';

const defaultDescription =
  'Rado ću ti pomoći da se spremiš za ispit ili laboratorijsku vežbu!';

const Tutor = ({ tutor }) => {
  const {
    id,
    name,
    message,
    tutorSubjects,
    price,
    groupPrice,
    isEnabled,
    phone,
    likes,
    dislikes,
    link,
  } = tutor;

  const { personally, group } = price;
  const [open, setOpen] = useState(false);
  const urlManager = useUrlManager();
  const { urlSubject } = urlManager.getParams();

  if (!isEnabled) {
    return null;
  }

  return (
    <TutorDiv>
      <TutorHeaderDiv>
        <InfoDiv>
          <ProfileImg
            src={`https://ui-avatars.com/api/?name=${name}&background=random&color=random&bold=true`}
          />
          <LikesDislikesDiv>
            <ThumbUpOffAltIcon />
            <UserRatingDiv>{likes}</UserRatingDiv>
            <DividerDiv />
            <UserRatingDiv>{dislikes}</UserRatingDiv>
            <ThumbDownOffAltIcon />
          </LikesDislikesDiv>
        </InfoDiv>
        <TutorIdDiv>ID: {id}</TutorIdDiv>
      </TutorHeaderDiv>

      <TutorContentDiv>
        <TutorDescriptionDiv>
          {message !== '' ? message : defaultDescription}
        </TutorDescriptionDiv>
        <SubjectsDiv>
          Predmeti:
          {tutorSubjects.map((subject, index) => (
            <SubjectDiv key={index}>{subject.subject.name}</SubjectDiv>
          ))}
        </SubjectsDiv>
        <TutorFooterDiv>
          <PricesDiv>
            <PriceDiv>Cena:</PriceDiv>
            {!!groupPrice && (
              <>
                <StyledGroupsIcon />
                {groupPrice}
              </>
            )}
            {!!price && !!groupPrice && <DividerDiv />}
            {!!price && (
              <>
                <BoyIcon />
                {price}
              </>
            )}
          </PricesDiv>
          <LessonScheduleDiv>
            <TutorButton
              onClick={() => {
                location.href = `https://wa.me/381607154400?text=Želim da zakažem čas kod predavača čiji je ID=${id}`;
              }}
            >
              <WhatsAppImg src={images.WhatsApp1} />
              <h4>Zakaži čas</h4>
            </TutorButton>
          </LessonScheduleDiv>
        </TutorFooterDiv>
      </TutorContentDiv>
    </TutorDiv>
  );
};

export default Tutor;

const InfoDiv = styled.div`
  display: flex;
  width: 150px;
  gap: 5px;
`;

const TutorButton = styled(Button)`
  background-color: #32d851;
  color: white;
  gap: 5px;

  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 2px;

  :hover {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 2px 2px;
    color: white;
    background-color: #32d851;
  }
`;

const WhatsAppImg = styled.img`
  width: 24px;
  height: 24px;
`;

const LessonScheduleDiv = styled.div``;

const TutorFooterDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledGroupsIcon = styled(GroupsIcon)`
  margin-right: 5px;
`;

const SubjectsDiv = styled.div`
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  align-items: center;
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
  margin-right: 150px;
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

  max-width: 750px;
  width: 100%;

  @media (max-width: 800px) {
  }
`;

const TutorHeaderDiv = styled.div`
  display: flex;
  gap: 10px;
`;
