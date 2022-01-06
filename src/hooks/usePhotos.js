import { useState, useEffect } from 'react';
import GetPhotos from '../services/GetPhotos';

const usePhotos = ({ page = 15 }) => {
  const [phots, setPhots] = useState([]);
  useEffect(() => {
    GetPhotos({ page }).then((photo) => {
      setPhots(photo);
    });
  }, [page]);
  return phots;
};

export default usePhotos;
