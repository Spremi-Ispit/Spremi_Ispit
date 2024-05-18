import React, { useEffect, useState } from 'react';
import Dialog from '../../../..//components/dialogs/Dialog';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import Paper from '@mui/material/Paper';
import Error from '../../../../components/dialogs/Error';
import { homeRoute } from '../../../../router/routes';
import UploadProgress from '../../../../components/UploadProgress';
import Actions from './components/Actions';
import Title from './components/Title';
import Content from './components/Content';
import { useUrlManager } from '../../../../utils/managers/UrlManager';
import { useApiActions } from '../../../../api/useApiActions';
import Filters from './components/Filters/Fliters';
import FileUploader from '../../../../components/FileUploader';

const StyledPaper = styled(Paper)`
  && {
    padding: 10px;
    margin-bottom: 30px;
    min-height: 150px;
    border: 0.5px solid #c9cace;
  }
`;

const UploadedDiv = styled.div`
  display: flex;
  gap: 5px;
`;

export const Form = () => {
  const [message, setMessage] = useState('');
  const [files, setFiles] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();
  const [uploadProgress, setUploadProgress] = useState(0);
  const { createPost } = useApiActions();
  const { error, action, response, loading } = createPost;
  const urlManager = useUrlManager();
  const [activeFileIndex, setActiveFileIndex] = useState(0);

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
      setMessage('Unesite naslov');
      return;
    }

    if (!urlYearOfStudy) {
      setMessage('Odaberite godinu studija');
      return;
    }

    if (!urlDepartment) {
      setMessage('Odaberite smer');
      return;
    }

    if (!urlSubject) {
      setMessage('Odaberite predmet');
      return;
    }

    const post = {
      title,
      description,
      attachments: files,
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
    if (response) {
      navigate(homeRoute);
    }
  }, [response]);

  const onCancel = () => {
    navigate(homeRoute);
  };

  if (error) {
    return <Error error={error} />;
  }

  const uploadProgessComponent = () => {
    if (loading) {
      return <UploadProgress uploadProgress={uploadProgress} />;
    }

    return null;
  };

  const handleChange = (event) => {
    const value = event.target.value;
    const selectedFileIndex = files.findIndex((el) => el.name === value);
    setActiveFileIndex(selectedFileIndex);
  };

  return (
    <StyledPaper elevation={0}>
      <Title setTitle={setTitle} />
      <Content setDescription={setDescription} />
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
      <Filters />
      <Actions onSubmit={onSubmit} onCancel={onCancel} uploading={loading} />
      {uploadProgessComponent()}
      <Dialog message={message} setMessage={setMessage} />
    </StyledPaper>
  );
};

export default Form;
