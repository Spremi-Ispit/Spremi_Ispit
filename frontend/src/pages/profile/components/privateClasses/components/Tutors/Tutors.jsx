import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Table from '../../../../../../components/Table';
import Error from '../../../../../../components/dialogs/Error';
import Loader from '../../../../../../components/Loader';
import { getTutors } from '../../../../../../api/tutor/getTutors';
import { useFetchOnLoad } from '../../../../../../api/useFetch';
import Button from '../../../../../../components/buttons/Button';

const Tutors = ({ reloadTutors, setReloadTutors, setTutorId }) => {
  const { data, error, loading, refetch } = useFetchOnLoad(getTutors);
  const [tutors, setTutors] = useState([]);

  useEffect(() => {
    if (reloadTutors) {
      refetch();
      setReloadTutors(false);
    }
  }, [reloadTutors]);

  useEffect(() => {
    if (data) {
      setTutors(data);
    }
  }, [data]);

  if (error) {
    return <Error error={error} />;
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <TutorsDiv>
      <TutorsH2> Predavači </TutorsH2>
      <Table
        columns={[
          {
            name: 'Id predavača',
            accessor: (payload) => payload.id,
          },
          {
            name: 'Telefon',
            accessor: (payload) => payload.phone,
          },
          {
            name: 'Aktivan',
            accessor: (payload) => (payload.isEnabled ? 'Da' : 'Ne'),
          },
          {
            name: 'Detaljnije',
            accessor: (payload) => (
              <Button
                onClick={() =>
                  setTutorId(tutors.find((tutor) => tutor.id === payload.id).id)
                }
              >
                Prikaži
              </Button>
            ),
          },
        ]}
        payload={tutors}
      />
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
