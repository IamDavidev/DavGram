import { useState, useEffect } from 'react';
import GetGifs from '../services/GetGifs';
const useGiffys = ({ limit = 10 }) => {
  const [giffs, SetGiffs] = useState([]);
  useEffect(() => {
    GetGifs({ limit: limit }).then((giffy) => {
      SetGiffs(giffy);
    });
  }, [limit]);
  return giffs;
};

export default useGiffys;
