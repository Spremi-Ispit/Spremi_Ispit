import styled from 'styled-components';
import Paper from '@mui/material/Paper';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { FormControl } from '@mui/material';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const StyledDeleteButton = styled(Button)`
  && {
    margin-left: 10px;
  }
`;

export const ControllsText = styled(Typography)`
  && {
    text-transform: none;
  }
`;

export const StyledPaper = styled(Paper)`
  && {
    padding: 10px;
    margin-bottom: 30px;
    min-height: 150px;
    border: 0.5px solid #c9cace;
  }
`;

export const StyledTextareaAutosize = styled(TextareaAutosize)`
  width: 100%;
  max-width: 100%;
  min-width: 100%;
  font-size: 1rem;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.00938em;
  margin-bottom: 10px;
  padding: 10px;
`;

export const Type = styled(FormControl)`
  && {
    width: 200px;
  }
`;

export const Tile = styled(TextField)`
  && {
    margin-bottom: 10px;
  }
`;

export const ControllsContainer = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
`;

export const SubmitButton = styled(Button)`
  && {
    margin-left: 10px;
  }
`;

export const CancelButton = styled(Button)`
  && {
    margin-right: 10px;
  }
`;

export const ImageUploaderViewerContainer = styled.div`
  margin-bottom: 10px;
`;

export const FileUploaderViewerContainer = styled.div`
  margin-bottom: 10px;
`;

export const VideoUploaderViewerContainer = styled.div`
  margin-bottom: 10px;
`;

export const AttatchemntsContainer = styled.div`
  display: ${({ attatchemntExists }) => (attatchemntExists ? 'block' : 'flex')};
`;
