import React from 'react';

const GoogleDocsViewer = ({ documentUrl }) => {
  return (
    <iframe
      src={`https://docs.google.com/gview?url=${encodeURIComponent(
        documentUrl
      )}&embedded=true`}
      style={{ width: '100%', height: '600px' }}
      frameBorder="0"
    ></iframe>
  );
};

export default GoogleDocsViewer;
