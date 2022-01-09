import { useState, useEffect } from 'react';
import GetPhotos from '../services/GetPhotos';

const usePhotos = ({ limit }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    GetPhotos({ limit: limit }).then((photo) => {
      setData(photo);
    });
    setLoading(false);
  }, [limit]);
  if (data) {
    return { data, loading };
  }
};

export default usePhotos;
