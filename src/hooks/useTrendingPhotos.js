import React, { useEffect, useState } from 'react';
import Search from '../pages/search';
import {GetTrendingPhotos} from '../services/GetTrendingphotos';

const useTrendingPhotos = () => {
  const [trending, setTrending] = useState([]);
  useEffect(() => {
    GetTrendingPhotos().then((res) => {
      setTrending(res);
    });
  },[Search]);

  return trending;
};

export default useTrendingPhotos;
