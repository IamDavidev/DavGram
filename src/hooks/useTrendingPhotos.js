import React, { useEffect, useState } from 'react';
import Search from '../pages/search';
import GetTrendingGifs from '../services/GetTrendingGifs';

const useTrendingPhotos = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    GetTrendingGifs().then((res) => {
      setTrending(res);
    });
  },[Search]);

  return trending;
};

export default useTrendingPhotos;
