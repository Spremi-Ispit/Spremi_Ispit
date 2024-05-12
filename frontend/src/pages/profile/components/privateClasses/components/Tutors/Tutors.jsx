import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Table from '../../../../../../components/Table';
import ErrorDialog from '../../../../../../components/dialogs/ErrorDialog';
import Loader from '../../../../../../components/Loader';
import { getTutors } from '../../../../../../api/tutor/getTutors';
import { useFetchOnLoad } from '../../../../../../api/useFetch';
import Button from '../../../../../../components/buttons/Button';
import TutorDialog from './components/TutorDialog/TutorDialog';

const Tutors = () => {
  const { data, error, loading } = useFetchOnLoad(getTutors);
  const [tutors, setTutors] = useState([]);
  const [tutor, setTutor] = useState(null);

  useEffect(() => {
    if (data) {
      console.log(data);
      setTutors(data);
    }
  }, [data]);

  if (error) {
    return <ErrorDialog error={error} />;
  }

  if (loading) {
    return <Loader />;
  }

  // {
  //   id: 1,
  //   phone: '123',
  //   description: 'SVE ZNAM dodji na cas',
  //   price: { personally: 1500, group: 700 },
  //   enabled: true,
  //   rating: [],
  //   subjects: [
  //     { id: 26, name: 'Digitalna elektronika' },
  //     { id: 16, name: 'Digitalna elektronika' },
  //     { id: 13, name: 'Arhitektura i organizacija računara 1' }
  //   ]
  // },

  return (
    <TutorsDiv>
      <TutorsH2> Predavači </TutorsH2>
      <Table
        columns={[
          {
            name: 'Id predavača',
            width: '25%',
            accessor: (payload) => payload.id,
          },
          {
            name: 'Telefon',
            width: '25%',
            accessor: (payload) => payload.phone,
          },
          {
            name: 'Aktivan',
            width: '25%',
            accessor: (payload) => (payload.enabled ? 'Da' : 'Ne'),
          },
          {
            name: 'Detaljnije',
            width: '25%',
            accessor: (payload) => (
              <Button
                onClick={() =>
                  setTutor(tutors.find((tutor) => tutor.id === payload.id))
                }
              >
                Prikaži
              </Button>
            ),
          },
        ]}
        payload={tutors}
      />
      {tutor && (
        <TutorDialog
          onClose={() => setTutor(null)}
          open={true}
          tutorId={tutor.id}
        />
      )}
    </TutorsDiv>
  );
};

export default Tutors;

const TutorsDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const TutorsH2 = styled.h2`
  text-align: center;
  margin-bottom: 10px;
`;
