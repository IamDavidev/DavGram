import { useState, useEffect } from 'react';

import { fetchergifs } from '../utils/Fetchers';

import useSWR from 'swr';

const useGiffys = ({ limit = 10 }) => {
  const { data, error } = useSWR(
    `https://api.giphy.com/v1/gifs/trending?limit=${limit}&api_key=shM3obwOZz45bCiiBEjvjq9a5kagrzqR`,
    fetchergifs
  );
  if (!data) return [];
  return data;
};

export default useGiffys;
