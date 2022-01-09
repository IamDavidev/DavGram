import { useState, useEffect } from 'react';
import GetPhotos from '../services/GetPhotos';

const usePhotos = ({ limit }) => {
  const [phots, setPhots] = useState([]);
  useEffect(() => {
    GetPhotos({ limit: limit }).then((photo) => {
      setPhots(photo);
    });
  }, [limit]);
  return phots;
};

export default usePhotos;
