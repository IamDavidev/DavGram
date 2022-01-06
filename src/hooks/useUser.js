import { useState, useEffect } from 'react';
import GetUser from '../services/GetUser';

const useUser = ({ user }) => {
  const [profile, setProfile] = useState({});
  useEffect(() => {
    GetUser({ user }).then((use) => {
      setProfile(use);
    });
  }, [user]);
  return profile;
};

export default useUser;
