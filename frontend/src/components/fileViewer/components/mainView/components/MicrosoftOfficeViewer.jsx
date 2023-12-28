import React from 'react';

const MicrosoftOfficeViewer = ({ documentUrl }) => {
  return (
    <iframe
      src={`https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(
        documentUrl
      )}`}
      width="100%"
      height="600px"
      frameBorder="0"
    ></iframe>
  );
};

export default MicrosoftOfficeViewer;
