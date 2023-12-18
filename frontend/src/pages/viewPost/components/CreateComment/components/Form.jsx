import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Paper from '@mui/material/Paper';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Typography from '@mui/material/Typography';
import UploadProgress from '../../../../../components/UploadProgress';
import FileUploader from '../../../../../components/FileUploader';
import { useUrlManager } from '../../../../../utils/managers/UrlManager';
import FileViewer from '../../../../../components/fileViewer/FileViewer';
import Dialog from '../../../../..//components/dialogs/Dialog';
import { Button } from '../../../../../components/buttons/Button';
import { useAppActions } from '../../../../../redux/useAppActions';
import { loginRoute } from '../../../../../router/routes';
import { useSelector } from 'react-redux';
import { selectToken } from '../../../../../redux/app/selectors';
import { useNavigate } from 'react-router-dom';
import { useApiActions } from '../../../../../api/useApiActions';
import ErrorDialog from '../../../../../components/dialogs/ErrorDialog';

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

export const Form = () => {
  const token = useSelector(selectToken);
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [attachments, setAttachemnts] = useState([]);
  const [description, setDescription] = useState('');
  const [uploadProgress, setUploadProgress] = useState(0);
  const urlManager = useUrlManager();
  const { urlPostId } = urlManager.getParams();
  const { addComment } = useApiActions();
  const { loading, error, setError, loaded, action } = addComment;
  const { viewPostActions } = useAppActions();
  const { setCommentsLoading } = viewPostActions;

  useEffect(() => {
    if (!loading) {
      setMessage('');
      setDescription('');
      setAttachemnts([]);
    }
  }, [loading]);

  useEffect(() => {
    if (loaded) {
      reloadComments();
    }
  }, [loaded]);

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
        attachments,
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
      return <ErrorDialog error={error} setError={setError} />;
    }

    return null;
  };

  return (
    <StyledPaper elevation={0} onClick={handleFormClick}>
      <FileViewer
        files={attachments.map((attachment) => ({
          src: URL.createObjectURL(attachment),
          name: attachment.name,
        }))}
      />
      <StyledTextareaAutosize
        minRows={10}
        onChange={handleTextareaChange}
        value={description}
      />
      <FileUploader setFiles={setAttachemnts} files={attachments} />
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
