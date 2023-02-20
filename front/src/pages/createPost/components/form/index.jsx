import React, { useEffect, useState } from 'react';
import {
  StyledPaper,
  StyledTextareaAutosize,
  Type,
  Tile,
  ControllsContainer,
  ControllsText,
  CancelButton,
  SubmitButton,
  StyledImage,
  StyledMenuItem,
  StyledSelect,
} from './styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Dialog from '../../../../components/dialog';
import Tags from './components/tags';
import { FileViewer } from '../../../../components/fileViewer';
import { FileUploader } from '../../../../components/fileUploader';
import { useNavigate } from 'react-router';
import { homeRoute } from '../../../../app/router/routes';
import { addPost } from '../../reduxThunk/actions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import * as routes from '../../../../app/router/routes';
import LinearWithValueLabel from '../../../../components/linearPogressWithLabel';
import {
  selectImages,
  selectPdfDocuments,
  selectVideos,
  selectWordDocuments,
} from '../../../../utils/filesSelector';
import { postType } from '../../../../utils/enums';
import { assets } from '../../../../assets';

const Form = () => {
  const [type, setType] = useState('question');
  const [message, setMessage] = useState('');
  const [attachments, setAttachemnts] = useState([]);
  const [images, setImages] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [videos, setVideos] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.createPost.loading);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const tagsLoading = useSelector((state) => state.createPost.tags.loading);

  const handleTextareaChange = (event) => {
    const value = event.target.value;
    setDescription(value);
  };

  useEffect(() => {
    setImages(selectImages(attachments));
    setVideos(selectVideos(attachments));
    setDocuments(
      selectWordDocuments(attachments).concat(selectPdfDocuments(attachments))
    );
  }, [attachments]);

  useEffect(() => {
    if (submitSuccess) navigate(routes.homeRoute);
  }, [submitSuccess, navigate]);

  const handleTypeChange = (event) => {
    const value = event.target.value;
    setType(value);
  };

  const handleTtileChange = (event) => {
    const value = event.target.value;
    setTitle(value);
  };

  const checkPostParams = () => {
    if (title.trim() === '') {
      setMessage('Title can not be empty.');
      return false;
    } else if (description.trim() === '') {
      setMessage('Description can not be empty.');
      return false;
    } else if (selectedTags.length === 0) {
      setMessage('Select at least one tag for your post.');
      return false;
    } else return true;
  };

  const onSubmit = () => {
    if (checkPostParams()) {
      const post = {
        title,
        description,
        selectedTags,
        type,
        images,
        documents,
        videos,
      };
      dispatch(addPost(post, () => setSubmitSuccess(true), setUploadProgress));
    }
  };

  const onCancel = () => {
    navigate(homeRoute);
  };

  return (
    <StyledPaper elevation={0}>
      <Tile label="Naslov" fullWidth onChange={handleTtileChange} />
      <FileViewer
        files={attachments.map((attachment) => ({
          src: URL.createObjectURL(attachment),
          name: attachment.name,
        }))}
      />
      <StyledTextareaAutosize
        minRows={10}
        placeholder="Sadržaj"
        onChange={handleTextareaChange}
      />
      <Type>
        <InputLabel>Tip</InputLabel>
        <StyledSelect value={type} onChange={handleTypeChange} label="Tip">
          <StyledMenuItem value={postType.question}>
            Pitanje
            <StyledImage src={assets.postType.question} />
          </StyledMenuItem>
          <StyledMenuItem value={postType.material}>
            Materijal
            <StyledImage src={assets.postType.book} />
          </StyledMenuItem>
        </StyledSelect>
      </Type>
      <Tags selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
      <FileUploader setFiles={setAttachemnts} files={attachments} />
      <ControllsContainer>
        <CancelButton onClick={onCancel} variant="outlined">
          <ControllsText variant="button" color="inherit">
            Odustani
          </ControllsText>
        </CancelButton>
        <SubmitButton
          onClick={onSubmit}
          variant="outlined"
          disabled={loading || tagsLoading}
        >
          <ControllsText variant="button" color="inherit">
            Potvrdi
          </ControllsText>
        </SubmitButton>
      </ControllsContainer>
      <Dialog message={message} setMessage={setMessage} />
      {loading > 0 ? (
        <LinearWithValueLabel uploadProgress={uploadProgress} />
      ) : null}
    </StyledPaper>
  );
};

export default Form;
