import React, { useEffect, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import styled from 'styled-components';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import { useFetch, useFetchOnLoad } from '../../../../../../../../api/useFetch';
import { getTutor } from '../../../../../../../../api/tutor/getTutor';
import Subjects from './components/Subjects/Subjects';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormHelperText from '@mui/material/FormHelperText';
import Button from '../../../../../../../../components/buttons/Button';
import Error from '../../../../../../../../components/dialogs/Error';
import Loader from '../../../../../../../../components/Loader';
import { updateTutorProfile } from '../../../../../../../../api/tutor/updateTutorProfile';

const TutorProfile = ({ onSave, tutorId }) => {
  const [tutor, setTutor] = useState(null);
  const { data, error, refetch, loading } = useFetchOnLoad(() =>
    getTutor(tutorId)
  );
  const {
    data: updateData,
    error: updateError,
    fetch: updateFetch,
    loading: updateLoading,
  } = useFetch(updateTutorProfile);

  useEffect(() => {
    if (data) {
      setTutor(data);
    }
  }, [data]);

  useEffect(() => {
    refetch();
  }, [tutorId]);

  useEffect(() => {
    if (updateData) {
      onSave();
    }
  }, [updateData]);

  if (!tutor) {
    return null;
  }

  if (error) {
    return <Error error={error} />;
  }

  if (updateError) {
    return <Error error={updateError} />;
  }

  if (loading || updateLoading) {
    return <Loader />;
  }

  console.log(tutor);

  return (
    <TutorProfileDiv>
      <TutorProfileH3>Predavč ID: {tutorId}</TutorProfileH3>
      <Subjects tutorId={tutorId} />
      <InfoDiv>
        <h3>Ime:</h3>
        <input
          value={tutor.name}
          onChange={(ev) => {
            setTutor((prev) => ({ ...prev, name: ev.target.value }));
          }}
        />
      </InfoDiv>
      <InfoDiv>
        <h3>Link:</h3>
        <input
          value={tutor.link}
          onChange={(ev) => {
            setTutor((prev) => ({ ...prev, link: ev.target.value }));
          }}
        />
      </InfoDiv>
      <InfoDiv>
        <h3>Telefon:</h3>
        <input
          value={tutor.phone}
          onChange={(ev) => {
            setTutor((prev) => ({ ...prev, phone: ev.target.value }));
          }}
        />
      </InfoDiv>

      <InfoDiv>
        <h3>Pojedinačno:</h3>
        <input
          value={tutor.price}
          onChange={(ev) =>
            setTutor((prev) => ({ ...prev, price: ev.target.value }))
          }
        />
      </InfoDiv>
      <InfoDiv>
        <h3>Grupno:</h3>
        <input
          value={tutor.groupPrice}
          onChange={(ev) =>
            setTutor((prev) => ({ ...prev, groupPrice: ev.target.value }))
          }
        />
      </InfoDiv>
      <InfoDiv>
        <h3>Likes:</h3>
        <input
          value={tutor.likes}
          onChange={(ev) =>
            setTutor((prev) => ({ ...prev, likes: ev.target.value }))
          }
        />
      </InfoDiv>
      <InfoDiv>
        <h3>Dislikes:</h3>
        <input
          value={tutor.dislikes}
          onChange={(ev) =>
            setTutor((prev) => ({ ...prev, dislikes: ev.target.value }))
          }
        />
      </InfoDiv>
      <DescriptionDiv>
        <h3>Opis:</h3>
        <DescriptionTextarea
          value={tutor.message}
          onChange={(ev) =>
            setTutor((prev) => ({ ...prev, message: ev.target.value }))
          }
        />
      </DescriptionDiv>
      <EnableTutorDiv>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={tutor.isEnabled}
                onChange={(ev) =>
                  setTutor((prev) => ({
                    ...prev,
                    isEnabled: ev.target.checked,
                  }))
                }
              />
            }
            label="Aktivan predavač"
          />
        </FormGroup>
      </EnableTutorDiv>
      <SaveDiv>
        <Button onClick={() => updateFetch(tutor)}>Sačuvaj</Button>
      </SaveDiv>
    </TutorProfileDiv>
  );
};

export default TutorProfile;

const InfoDiv = styled.div`
  display: flex;
  width: 280px;
  justify-content: space-between;
`;

const SaveDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const EnableTutorDiv = styled.div`
  display: flex;
`;

const TutorProfileH3 = styled.h3`
  text-align: center;
`;
const TutorProfileDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0px;
  gap: 10px;
`;

const DescriptionDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const DescriptionTextarea = styled.textarea`
  flex: 1;
  outline: none;
  padding-left: 5px;
  font-size: 18px;
`;
