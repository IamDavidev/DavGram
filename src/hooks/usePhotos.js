import useSWR from 'swr';
import { fetcher } from '../utils/Fetchers';

const usePhotos = ({ limit = 15 }) => {
  const { data, error } = useSWR(
    `https://api.unsplash.com/photos/?per_page=${limit}&client_id=E7tdtB2AMzvzRrM9QO37LvN5Xf-5A77tJhmL8xC5eOE`,
    fetcher
  );
  if (!data) return [];
  return data;
};

export default usePhotos;
