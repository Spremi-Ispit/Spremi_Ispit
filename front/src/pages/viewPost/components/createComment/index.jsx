import React from 'react';
import Form from './components/form';

const CreateComment = React.forwardRef((props, ref) => {
  return (
    <>
      <h1 ref={ref}>Kreiraj komentar</h1>
      <Form />
    </>
  );
});

export default CreateComment;
