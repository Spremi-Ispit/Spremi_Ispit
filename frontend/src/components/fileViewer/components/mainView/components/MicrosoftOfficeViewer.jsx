import React from 'react';

const MicrosoftOfficeViewer = ({ file }) => {
  const { src, name } = file;

  return (
    <iframe
      src={`https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(
        src
      )}`}
      width="100%"
      height="600px"
      frameBorder="0"
    ></iframe>
  );
};

export default MicrosoftOfficeViewer;
