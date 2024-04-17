import styled from 'styled-components';
import Button from '../../../../../../../../../components/buttons/Button';
import { tutorRequestRoute } from '../../../../../../../../../router/routes';
import useTimeFormat from '../../../../../../../../../utils/useTimeFormat';
import NavLink from '../../../../../../../../../components/NavLink';

const StyledNavlink = styled(NavLink)`
  :hover {
    text-decoration: none;
  }
`;

export const useTableColumns = () => {
  const { formatDate, timeFormat } = useTimeFormat();

  return [
    {
      name: 'Korisnik',
      width: '25%',
      accessor: (payload) => payload.students[0].username,
    },
    {
      name: 'Datum',
      width: '25%',
      accessor: (payload) =>
        formatDate(payload.date, timeFormat.YYYY_MM_DD_HH_mm_ss),
    },
    {
      name: 'Predmet',
      width: '25%',
      accessor: (payload) => payload.subject.name,
    },
    {
      name: 'Prikaži zahtev',
      width: '25%',
      accessor: (payload) => (
        <StyledNavlink to={tutorRequestRoute(payload.id)}>
          <Button>Prikaži zahtev</Button>
        </StyledNavlink>
      ),
    },
  ];
};
