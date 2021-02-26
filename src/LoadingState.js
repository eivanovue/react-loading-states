import { useState, useEffect } from 'react';
import axios from 'axios';

const useRequest = (initUrl) => {
  
  
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({});

  useEffect(() => {
    let ignore = false;
    const fetchProduct = async () => {
      setLoading(true);
      try {
        setError({});
        const response = await axios(initUrl);
        if (!ignore) setData(response.data);
        await sleep(1000); // my crazy idea of looking at the spinner for a little longer
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    fetchProduct();
    return (() => { ignore = true; });
  }, [initUrl]);

  return { data, loading, error };
};

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


export default useRequest;