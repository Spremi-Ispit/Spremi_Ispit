import React, { useState } from 'react';
import styled from 'styled-components';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import useElementSizeOnResize from '../../../../../utils/useElementSizeOnResize';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import IconButtonMUI from '@mui/material/IconButton';

export const IconButton2 = styled(IconButtonMUI)`
  && {
    background-color: white;
  }
`;

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url
).toString();

const FileContainer = styled.div`
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  canvas {
    width: 100% !important;
    height: auto !important;
  }
`;

const PDFViewDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
`;

const ControllsDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PDFView = ({ file }) => {
  const { width, ref } = useElementSizeOnResize();
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const leftArrow = () => {
    if (numPages > 1) {
      return (
        <IconButtonMUI
          onClick={() =>
            pageNumber > 1 ? setPageNumber((page) => page - 1) : undefined
          }
        >
          <ChevronLeftIcon />
        </IconButtonMUI>
      );
    }

    return null;
  };

  const rigthArrow = () => {
    if (numPages > 1) {
      return (
        <IconButtonMUI
          onClick={() =>
            pageNumber < numPages
              ? setPageNumber((page) => page + 1)
              : undefined
          }
        >
          <ChevronRightIcon />
        </IconButtonMUI>
      );
    }

    return null;
  };

  return (
    <PDFViewDiv>
      <FileContainer ref={ref}>
        <Document file={file.src} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} width={width} />
        </Document>
      </FileContainer>
      <ControllsDiv>
        {leftArrow()}
        <p>
          Page {pageNumber} of {numPages}
        </p>
        {rigthArrow()}
      </ControllsDiv>
    </PDFViewDiv>
  );
};
