import { useEffect, useState } from 'react';
import axios from 'axios';

const usePokemon = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Added error state

  useEffect(() => {
    if (!url) return;

    let isMounted = true;
    setLoading(true);
    setError(null); // Reset error when URL changes

    axios.get(url)
      .then((res) => {
        if (isMounted) {
          setData(res.data);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err);
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [url]);

  return { data, loading, error }; // Return error in hook response
};

export default usePokemon;

