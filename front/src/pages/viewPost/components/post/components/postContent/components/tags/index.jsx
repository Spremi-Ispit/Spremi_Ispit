import React from 'react';
import { StyledChip } from './styles';

const Tags = (props) => {
  const { tags } = props;

  return (
    <div>
      {tags.map((tag, index) => (
        <StyledChip label={tag.tag} key={index} />
      ))}
    </div>
  );
};

export default Tags;
