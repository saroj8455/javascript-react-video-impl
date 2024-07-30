import { useEffect, useRef, useState } from 'react';

export function useFetchData(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  // create a ref of useEffect run
  const effectRan = useRef(false);

  useEffect(() => {
    // wrap everything in ref
    if (!effectRan.current) {
      const fetchData = async () => {
        setLoading(true);
        try {
          const response = await fetch(url);
          if (!response.ok) {
            setError('Network response was not ok.');
            return;
          }
          const jsonData = await response.json();
          setData(jsonData);
        } catch (error) {
          setError(error);
          console.log(error);
        } finally {
          console.log('always execute finally');
          setLoading(false);
        }
      };
      fetchData();
      return () => {
        // clean up
        effectRan.current = true;
      };
    }
  }, [url]);

  return { data, loading, error };
}
