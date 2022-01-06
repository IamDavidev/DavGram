import { useState, useEffect } from 'react';
import GetGifs from '../services/GetGifs';
const useGiffys = ({page = 1}) => {
  const [giffs, SetGiffs] = useState([]);
  useEffect(() => {
    GetGifs().then((giffy) => {
      SetGiffs(giffy);
    });
  },[page]);
  return giffs;
};

export default useGiffys;
