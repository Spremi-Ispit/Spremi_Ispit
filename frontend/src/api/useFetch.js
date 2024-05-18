import { useState, useEffect } from 'react';

export const useFetchOnLoad = (fn) => {
  const response = useFetch(fn);
  const { fetch, ...rest } = response;

  useEffect(() => {
    fetch();
  }, []);

  return { ...rest, refetch: fetch };
};

export const useFetch = (fn) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);

  const fetch = async (...params) => {
    setLoading(true);
    setLoaded(false);

    try {
      const response = await fn(...params);
      setData(response);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
      setLoaded(true);
    }
  };

  return { data, loading, loaded, error, fetch };
};
