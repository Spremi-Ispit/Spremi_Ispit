import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Paper from '@mui/material/Paper';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Typography from '@mui/material/Typography';
import UploadProgress from '../../../../../components/UploadProgress';
import FileUploader from '../../../../../components/FileUploader';
import { useUrlManager } from '../../../../../utils/managers/UrlManager';
import Dialog from '../../../../..//components/dialogs/Dialog';
import { Button } from '../../../../../components/buttons/Button';
import { useAppActions } from '../../../../../redux/useAppActions';
import { loginRoute } from '../../../../../router/routes';
import { useSelector } from 'react-redux';
import { selectToken } from '../../../../../redux/app/selectors';
import { useNavigate } from 'react-router-dom';
import { useApiActions } from '../../../../../api/useApiActions';
import Error from '../../../../../components/dialogs/Error';

const ControllsText = styled(Typography)`
  && {
    text-transform: none;
  }
`;

const StyledPaper = styled(Paper)`
  && {
    padding: 10px;
    margin-bottom: 30px;
    min-height: 150px;
    border: 0.5px solid #c9cace;
    width: 100%;
    max-width: 850px;
  }
`;

const StyledTextareaAutosize = styled(TextareaAutosize)`
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

const ControllsContainer = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
`;

const UploadedDiv = styled.div`
  display: flex;
  gap: 5px;
`;

export const Form = () => {
  const token = useSelector(selectToken);
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [files, setFiles] = useState([]);
  const [description, setDescription] = useState('');
  const [uploadProgress, setUploadProgress] = useState(0);
  const urlManager = useUrlManager();
  const { urlPostId } = urlManager.getParams();
  const { addComment } = useApiActions();
  const { loading, error, action, response } = addComment;
  const { viewPostActions } = useAppActions();
  const { setCommentsLoading } = viewPostActions;
  const [activeFileIndex, setActiveFileIndex] = useState(0);

  useEffect(() => {
    if (response) {
      reloadComments();
    }
  }, [response]);

  useEffect(() => {
    if (!loading) {
      setMessage('');
      setDescription('');
      setFiles([]);
    }
  }, [loading]);

  const handleTextareaChange = (event) => {
    const value = event.target.value;
    setDescription(value);
  };

  const checkCommentParams = () => {
    if (description.trim() === '') {
      setMessage('Description can not be empty.');
      return false;
    }

    return true;
  };

  const reloadComments = () => {
    setCommentsLoading(true);
  };

  const onSubmit = () => {
    if (checkCommentParams()) {
      const comment = {
        description,
        attachments: files,
      };
      action(comment, urlPostId, setUploadProgress);
    }
  };

  const loader = () => {
    if (loading) {
      return <UploadProgress uploadProgress={uploadProgress} />;
    }

    return null;
  };

  const handleFormClick = () => {
    if (!token) {
      navigate(loginRoute);
    }
  };

  const errorDialog = () => {
    if (error) {
      return <Error error={error} />;
    }

    return null;
  };

  const handleChange = (event) => {
    const value = event.target.value;
    const selectedFileIndex = files.findIndex((el) => el.name === value);
    setActiveFileIndex(selectedFileIndex);
  };

  return (
    <StyledPaper elevation={0} onClick={handleFormClick}>
      <StyledTextareaAutosize
        minRows={10}
        onChange={handleTextareaChange}
        value={description}
      />
      {!!files.length && (
        <UploadedDiv>
          <label>Dodali ste:</label>
          <select value={files[activeFileIndex].name} onChange={handleChange}>
            {files.map((file, index) => {
              return (
                <option value={file.name} key={index}>
                  {file.name.split('/').pop()}
                </option>
              );
            })}
          </select>
        </UploadedDiv>
      )}
      <FileUploader setFiles={setFiles} files={files} />
      <ControllsContainer>
        <Button disabled={loading} onClick={onSubmit} variant="outlined">
          <ControllsText variant="button" color="inherit">
            Postavi komentar
          </ControllsText>
        </Button>
        <Dialog message={message} setMessage={setMessage} />
      </ControllsContainer>
      {loader()}
      {errorDialog()}
    </StyledPaper>
  );
};

export default Form;
