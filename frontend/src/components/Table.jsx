import * as React from 'react';
import { styled } from '@mui/material/styles';
import MUITable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function Table({ columns, payload }) {
  return (
    <TableContainer component={Paper}>
      <MUITable sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <StyledTableRow>
            {columns.map((column) => {
              const { name, width } = column;
              return (
                <StyledTableCell align="left" width={width} key={name}>
                  {name}
                </StyledTableCell>
              );
            })}
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {payload.map((rowData, index) => {
            return (
              <StyledTableRow key={index}>
                {columns.map((column) => {
                  const { accessor, name } = column;

                  return (
                    <StyledTableCell key={name} align="left">
                      {accessor(rowData)}
                    </StyledTableCell>
                  );
                })}
              </StyledTableRow>
            );
          })}
        </TableBody>
      </MUITable>
    </TableContainer>
  );
}
