import { useState, useEffect } from 'react';

export const useFetch = (url) => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setData(data)
    setLoading(false)
  }

  useEffect(() => {
    getData()
  }, [url]);

  return { loading, data };
};