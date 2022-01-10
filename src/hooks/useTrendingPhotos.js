import React, { useEffect, useState } from 'react';
import { GetTrendingPhotos } from '../services/GetTrendingphotos';

const useTrendingPhotos = () => {
  const [loading, setLoading] = useState(true);
  const [trending, setTrending] = useState([]);
  useEffect(() => {
    GetTrendingPhotos().then((res) => {
      setTrending(res);
    });
  }, [loading]);
  console.log(trending);

  return trending;
};

export default useTrendingPhotos;
