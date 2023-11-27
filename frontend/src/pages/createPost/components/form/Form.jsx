import React, { useEffect, useState } from 'react';
import Dialog from '../../../..//components/dialogs/Dialog';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import Paper from '@mui/material/Paper';
import ErrorDialog from '../../../../components/dialogs/ErrorDialog';
import { homeRoute } from '../../../../router/routes';
import UploadProgress from '../../../../components/UploadProgress';
import Actions from './components/Actions';
import Files from './components/Files';
import Title from './components/Title';
import Content from './components/Content';
import FiltersWrapper from './components/FiltersWrapper';
import { useUrlManager } from '../../../../utils/managers/UrlManager';
import { useApiActions } from '../../../../api/useApiActions';

const StyledPaper = styled(Paper)`
  && {
    padding: 10px;
    margin-bottom: 30px;
    min-height: 150px;
    border: 0.5px solid #c9cace;
  }
`;

export const Form = () => {
  const [message, setMessage] = useState('');
  const [attachments, setAttachemnts] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();
  const [uploadProgress, setUploadProgress] = useState(0);
  const { createPost } = useApiActions();
  const { error, setError, action, loaded, loading } = createPost;
  const urlManager = useUrlManager();

  const onSubmit = () => {
    const {
      urlYearOfStudy,
      urlDepartment,
      urlSubject,
      urlType,
      urlYearOfExam,
      urlExaminationPeriod,
    } = urlManager.getParams();

    if (title.trim() === '') {
      setMessage('Title can not be empty.');
      return;
    }

    if (description.trim() === '') {
      setMessage('Description can not be empty.');
      return;
    }

    if (!urlYearOfStudy) {
      setMessage('Year of study can not be empty.');
      return;
    }

    if (!urlDepartment) {
      setMessage('Department can not be empty.');
      return;
    }

    if (!urlSubject) {
      setMessage('Subject can not be empty.');
      return;
    }

    const post = {
      title,
      description,
      attachments,
      filters: {
        subject: urlSubject,
        type: urlType,
        yearOfExam: urlYearOfExam,
        examinationPeriod: urlExaminationPeriod,
      },
    };

    action(post, setUploadProgress);
  };

  useEffect(() => {
    if (loaded) {
      navigate(homeRoute);
    }
  }, [loaded]);

  const onCancel = () => {
    navigate(homeRoute);
  };

  if (error) {
    return <ErrorDialog error={error} setError={setError} />;
  }

  const uploadProgessComponent = () => {
    if (loading) {
      return <UploadProgress uploadProgress={uploadProgress} />;
    }

    return null;
  };

  return (
    <StyledPaper elevation={0}>
      <Title setTitle={setTitle} />
      <Content setDescription={setDescription} />
      <Files files={attachments} setFiles={setAttachemnts} />
      <FiltersWrapper />
      <Actions onSubmit={onSubmit} onCancel={onCancel} uploading={loading} />
      {uploadProgessComponent()}
      <Dialog message={message} setMessage={setMessage} />
    </StyledPaper>
  );
};

export default Form;
