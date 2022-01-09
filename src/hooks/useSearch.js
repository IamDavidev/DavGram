import React, { useState, useEffect } from 'react';
import Search from '../pages/search';
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
