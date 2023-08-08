import axios from 'axios';
import { useQuery } from 'react-query';

import IAlbumProfileInfo from '../../interfaces/hooks/IAlbumProfileInfo';
import toast from 'react-hot-toast';
import { t } from 'i18next';

async function getAlbumProfile(id: number) {
  return await axios
    .get<IAlbumProfileInfo>(
      `${import.meta.env.VITE_API_BACKEND_URL}/albumProfile/${id}`
    )
    .then((res) => res.data)
    .catch((err) => err.response.data);
}

export const GetAlbumProfileInfo = (id: number) => {
  return useQuery({
    enabled: id != null,
    queryKey: ['albumProfileAdmin', id!],
    queryFn: () => getAlbumProfile(id!),
    refetchOnWindowFocus: false,
    onError: () => {
      toast.error(t('labelErrorConnectionServer'));
    },
  });
};
