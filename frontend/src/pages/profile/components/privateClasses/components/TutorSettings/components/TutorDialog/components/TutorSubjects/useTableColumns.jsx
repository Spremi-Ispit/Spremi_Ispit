import Button from '../../../../../../../../../../components/buttons/Button';

export const useTableColumns = () => {
  return (onRemove) => [
    {
      name: 'Godina studija',
      width: '25%',
      accessor: (payload) => payload.yearsOfStudy[0].name,
    },
    {
      name: 'Smer',
      width: '25%',
      accessor: (payload) => payload.departments[0].name,
    },
    {
      name: 'Predmet',
      width: '25%',
      accessor: (payload) => payload.name,
    },
    {
      name: 'Obriši predmet',
      width: '25%',
      accessor: (payload) => (
        <Button onClick={() => onRemove(payload.id)}>Obriši predmet</Button>
      ),
    },
  ];
};
