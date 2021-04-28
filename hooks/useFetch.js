import { useEffect, useState } from 'react';

const useFetch = (url, options = {}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, options);
        const data = await response.json();
        // data is fetched then set it into setData state
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
    // run again if any change in url or options
  }, [url, options]);

  return { error, loading, data };
};

export default useFetch;
