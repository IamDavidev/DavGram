import { useState, useEffect } from 'react';
import useSWR from 'swr';
import { fetchUser } from '../utils/Fetchers';
const useUser = ({ user }) => {
  const { data, error } = useSWR(
    `https://api.unsplash.com/users/${user}?client_id=E7tdtB2AMzvzRrM9QO37LvN5Xf-5A77tJhmL8xC5eOE`,
    fetchUser
  );
  if (!data) return {};
  return data;
};

export default useUser;
