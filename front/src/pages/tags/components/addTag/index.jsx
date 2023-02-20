import React, { useState } from "react";
import {StyledButton} from "./styles";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { addTag } from "../../reduxThunk/actions";
import Typography from '@mui/material/Typography';
import { useSelector } from "react-redux"
import { Container } from './styles';

export default function SimpleSelect() {
  const [tag, setTag] = useState("");
  const loading  = useSelector(state => state.tags.loading);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setTag(event.target.value);
  };

  const submit = () => {
    dispatch(addTag(tag));
  };

  return (
    <Container>
      <TextField
        value={tag}
        onChange={handleChange}
        label="Unesite tag"
        variant="outlined"
      />
      <StyledButton disabled={loading} onClick={submit} variant='outlined'>
        <Typography
          variant="button"
          color="inherit"
        >
          Dodaj tag
        </Typography>
      </StyledButton>
    </Container>
  );
}
