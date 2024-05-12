import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import GroupsIcon from '@mui/icons-material/Groups';
import colors from '../../../theme/colors';
import BoyIcon from '@mui/icons-material/Boy';
import Button from '../../../components/buttons/Button';
import SendRequestDialog from './components/SendRequestDialog';
import { images } from '../../../constants';
import { useUrlManager } from '../../../utils/managers/UrlManager';

const defaultDescription =
  'Rado ću ti pomoći da se spremiš za ispit ili laboratorijsku vežbu!';

const Tutor = ({ tutor }) => {
  const { id, name, description, subjects, price, rating, userId } = tutor;
  const { personally, group } = price;
  const userRating = [0, 0]; // TODO: request user rating
  const [open, setOpen] = useState(false);
  const urlManager = useUrlManager();
  const { urlSubject } = urlManager.getParams();

  const closeSendMessageDialog = () => {
    setOpen(false);
  };

  const openSendMessageDialog = () => {
    if (!urlSubject) {
      return alert('Odaberite predmet prvo');
    }

    setOpen(true);
  };

  return (
    <TutorDiv>
      <TutorHeaderDiv>
        <ProfileImg
          src={`https://ui-avatars.com/api/?name=${name}&background=random&color=random&bold=true`}
        />
        <TutorIdDiv>{name}</TutorIdDiv>
        <LikesDislikesDiv>
          <ThumbUpOffAltIcon />
          <UserRatingDiv>{userRating[0]}</UserRatingDiv>
          <DividerDiv />
          <UserRatingDiv>{userRating[1]}</UserRatingDiv>
          <ThumbDownOffAltIcon />
        </LikesDislikesDiv>
      </TutorHeaderDiv>

      <TutorContentDiv>
        <TutorDescriptionDiv>
          {description !== '' ? description : defaultDescription}
        </TutorDescriptionDiv>
        <SubjectsDiv>
          Predmeti:
          {subjects.map((subject, index) => (
            <SubjectDiv key={index}>{subject.name}</SubjectDiv>
          ))}
        </SubjectsDiv>
        <TutorFooterDiv>
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
          <LessonScheduleDiv>
            <TutorButton onClick={openSendMessageDialog}>
              <WhatsAppImg src={images.WhatsApp1} />
              <h4>Zakaži čas</h4>
            </TutorButton>
            <SendRequestDialog
              open={open}
              onClose={closeSendMessageDialog}
              subjects={subjects}
              tutorId={id}
            />
          </LessonScheduleDiv>
        </TutorFooterDiv>
      </TutorContentDiv>
    </TutorDiv>
  );
};

export default Tutor;

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
  align-items: center;
  gap: 10px;
`;
