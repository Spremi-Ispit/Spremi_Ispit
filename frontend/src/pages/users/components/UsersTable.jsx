import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useSelector } from 'react-redux';
import ErrorDialog from '../../../components/dialogs/ErrorDialog';
import Loader from '../../../components/Loader';
import { useNavigate } from 'react-router-dom';
import { userRole } from '../../../redux/app/state';
import { Button } from '@mui/material';
import styled from 'styled-components';
import { useAppActions } from '../../../redux/useAppActions';
import { selectRole, selectUsername } from '../../../redux/app/selectors';
import { selectLoadUsersTable } from '../../../redux/users/selectors';
import { profilePostsRoute } from '../../../router/routes';
import { useScreens, screens } from '../../../utils/useScreens';
import { useApiActions } from '../../../api/useApiActions';
import { allowedUrlParams } from '../../../utils/managers/UrlManager';

const StyledButton = styled(Button)`
  && {
    display: flex;
    justify-content: flex-start;
  }
`;

export const mapUserRoleToView = (role) => {
  if (role === userRole.admin) return 'admin';

  if (role === userRole.moderator) return 'moderator';

  if (role === userRole.visitor) return 'član';
};

export const UsersTable = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(100);
  const role = useSelector(selectRole);
  const username = useSelector(selectUsername);
  const loadUsersTable = useSelector(selectLoadUsersTable);
  const { usersActions } = useAppActions();
  const { setLoadUsersTable } = usersActions;
  const navigate = useNavigate();
  const { loadUsersForUsersTable } = useApiActions();
  const { response, loaded, error, setError, action } = loadUsersForUsersTable;
  const screen = useScreens();

  useEffect(() => {
    if (!loadUsersTable) {
      setLoadUsersTable(true);
    }
  }, []);

  useEffect(() => {
    if (response) {
      setLoadUsersTable(false);
      setUsers(response);
      console.log(response);
    }
  }, [response]);

  useEffect(() => {
    if (loadUsersTable) {
      action();
    }
  }, [loadUsersTable]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    if (users.length > 0) {
      const myRating = users.findIndex((user) => user.username === username);
      setPage(Math.floor(myRating / rowsPerPage));
    }
  }, [users]);

  const handleVisitUserProfile = (username) => {
    navigate({
      pathname: profilePostsRoute,
      search: `${allowedUrlParams.username}=${username}`,
    });
  };

  if (error) {
    return <ErrorDialog error={error} setError={setError} />;
  }

  if (!loaded) {
    return <Loader />;
  }

  return (
    <Paper
      sx={{
        width: screen > screens.tablet ? '70%' : '100%',
        overflow: 'hidden',
      }}
    >
      <TableContainer sx={{ maxHeight: 400 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>Redni broj</TableCell>
              <TableCell>Korisnik</TableCell>
              <TableCell>Objave</TableCell>
              <TableCell>Komentari</TableCell>
              <TableCell>Lajkovi</TableCell>
              <TableCell>Ukupno</TableCell>
              {role === userRole.admin && <TableCell>Rola</TableCell>}
            </TableRow>
          </TableHead>
          <TableBody>
            {users
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((user) => {
                const {
                  username: tableUsername,
                  likes,
                  posts,
                  comments,
                } = user;

                return (
                  <TableRow
                    hover
                    selected={tableUsername === username}
                    role="checkbox"
                    key={JSON.stringify(user)}
                  >
                    <TableCell>
                      {users.findIndex(
                        (someUser) => someUser.username === tableUsername
                      ) + 1}
                    </TableCell>
                    <TableCell>
                      <StyledButton
                        onClick={() => handleVisitUserProfile(tableUsername)}
                      >
                        {tableUsername}
                      </StyledButton>
                    </TableCell>

                    <TableCell>{posts}</TableCell>
                    <TableCell>{comments}</TableCell>
                    <TableCell>{likes}</TableCell>
                    <TableCell>{likes + posts + comments}</TableCell>
                    {role === userRole.admin && (
                      <TableCell>{mapUserRoleToView(user.role)}</TableCell>
                    )}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[100]}
        component="div"
        count={users.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default UsersTable;
