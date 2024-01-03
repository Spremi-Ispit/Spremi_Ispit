import React from 'react';

const GoogleDocsViewer = ({ file }) => {
  const { src, name } = file;

  return (
    <iframe
      src={`https://docs.google.com/gview?url=${encodeURIComponent(
        src
      )}&embedded=true`}
      style={{ width: '100%', height: '600px' }}
      frameBorder="0"
    ></iframe>
  );
};

export default GoogleDocsViewer;
