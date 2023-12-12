import * as React from 'react';
import PropTypes from 'prop-types';

const PostViewContext = React.createContext();

const valueType = ({ type }) => {
  return { type };
};

function PostViewProvider({ value, children }) {
  const data = valueType(value);

  return (
    <PostViewContext.Provider value={data}>{children}</PostViewContext.Provider>
  );
}

PostViewProvider.propTypes = {
  // eslint-disable-next-line
  value: PropTypes.any,
  children: PropTypes.node,
};

PostViewProvider.defaultProps = {
  value: undefined,
  children: undefined,
};

function usePostViewContext() {
  return valueType(React.useContext(PostViewContext));
}

export { PostViewProvider, usePostViewContext };
