import React, { useState, useEffect } from 'react';
import getSearchPhotos from '../services/GetSearchPhotos';

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
