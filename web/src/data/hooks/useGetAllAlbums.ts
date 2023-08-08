import axios from 'axios';
import { t } from 'i18next';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';

import IAllAlbums from '../../interfaces/hooks/IAllAlbums';

const getAllAlbums = async () => {
  return await axios
    .get<IAllAlbums[]>(`${import.meta.env.VITE_API_BACKEND_URL}/allAlbums`)
    .then((res) => res.data)
    .catch((error) => error.response.data);
};

export const GetAllAlbums = () => {
  return useQuery({
    queryKey: ['allAlbums'],
    queryFn: getAllAlbums,
    retry: false,
    staleTime: Infinity,
    onError: () => {
      toast.error(t('labelErrorConnectionServer'));
    },
  });
};
