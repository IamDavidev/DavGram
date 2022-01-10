import React, { useState, useEffect } from 'react';
import getSearchPhotos from '../services/getSearchPhotos';

const useSearch = ({ title }) => {
  const [Search, setSearch] = useState([]);
  useEffect(() => {
    getSearchPhotos({ title: title }).then((res) => {
      setSearch(res);
    });
  }, [title]);

  return Search;
};

export default useSearch;
