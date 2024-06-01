import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export const useRedux = (fn) => {
  const dispatch = useDispatch();

  return (...params) => dispatch(fn(...params));
};
