// https://www.youtube.com/watch?v=Jl4q2cccwf0 Full React Tutorial #20 - Making a Custom Hook
// https://www.youtube.com/watch?v=XO77Fib9tSI async/await Part 1 - Topics of JavaScript/ES8

import { useState, useEffect } from 'react';

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);

      const res = await fetch(url);
      const json = await res.json();
      setData(json);

      setIsPending(false);
    };
    fetchData();
  }, [url]);

  return { data, isPending };
};
