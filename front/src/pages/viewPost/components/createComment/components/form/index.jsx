import React, { useEffect, useState } from 'react';
import {
  StyledPaper,
  StyledTextareaAutosize,
  ControllsContainer,
  ControllsText,
  SubmitButton,
  ErrorHolder,
} from './styles';
import Dialog from '../../../../../../components/dialog';
import { FileViewer } from '../../../../../../components/fileViewer';
import { FileUploader } from '../../../../../../components/fileUploader';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { addComment } from '../../../../reduxThunk/actions';
import LinearWithValueLabel from '../../../../../../components/linearPogressWithLabel';
import {
  selectImages,
  selectPdfDocuments,
  selectVideos,
  selectWordDocuments,
} from '../../../../../../utils/filesSelector';

const Form = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [attachments, setAttachemnts] = useState([]);
  const [images, setImages] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [videos, setVideos] = useState([]);
  const [description, setDescription] = useState('');
  const [uploadProgress, setUploadProgress] = useState(0);

  const [searchParams] = useSearchParams();
  let postID = searchParams.get('postId');

  const dispatch = useDispatch();

  useEffect(() => {
    setImages(selectImages(attachments));
    setVideos(selectVideos(attachments));
    setDocuments(
      selectWordDocuments(attachments).concat(selectPdfDocuments(attachments))
    );
  }, [attachments]);

  useEffect(() => {
    if (!loading) {
      setMessage('');
      setDescription('');
      setImages([]);
      setDocuments([]);
      setVideos([]);
      setAttachemnts([]);
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
    } else return true;
  };

  const onSubmit = () => {
    if (checkCommentParams()) {
      const comment = {
        postID,
        description,
        images,
        documents,
        videos,
      };
      dispatch(
        addComment(setError, setLoading, comment, postID, setUploadProgress)
      );
    }
  };

  return (
    <StyledPaper elevation={0}>
      <FileViewer
        files={attachments.map((attachment) => ({
          src: URL.createObjectURL(attachment),
          name: attachment.name,
        }))}
      />
      <StyledTextareaAutosize
        minRows={10}
        placeholder="Sadrzaj"
        onChange={handleTextareaChange}
        value={description}
      />
      <FileUploader setFiles={setAttachemnts} files={attachments} />
      <ControllsContainer>
        <SubmitButton disabled={loading} onClick={onSubmit} variant="outlined">
          <ControllsText variant="button" color="inherit">
            Postavi komentar
          </ControllsText>
        </SubmitButton>
        <Dialog message={message} setMessage={setMessage} />
      </ControllsContainer>
      {loading > 0 ? (
        <LinearWithValueLabel uploadProgress={uploadProgress} />
      ) : null}
      <ErrorHolder exists={error === '' ? false : true}>
        {error + '   '}
        <span onClick={() => setError('')}>Ok</span>
      </ErrorHolder>
    </StyledPaper>
  );
};

export default Form;
