import axios from 'axios';
import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from 'react-query';

import Album from '../Album';
import { t } from 'i18next';

const createAlbum = async (album: Album) => {
  const formData = new FormData();

  formData.append('albumName', album.albumName);
  formData.append('albumPassword', album.albumPassword);
  formData.append('role', album.role || 'user');
  if (album.images) {
    album.images.forEach((image: File) => {
      formData.append('images', image);
    });
  }

  return await axios
    .post(`${import.meta.env.VITE_API_BACKEND_URL}/registerAlbum`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((res) => res.data)
    .catch((error) => error.response.data);
};

export const RegisterAlbum = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createAlbum,
    onSuccess: (data) => {
      if (data.hasOwnProperty('message')) {
        toast.success(JSON.stringify(data.message).replaceAll('"', ''));

        //! This bassicaly refteches the query with the key 'allAlbums'
        queryClient.invalidateQueries('allAlbums');
      }

      if (data.hasOwnProperty('error')) {
        toast.error(JSON.stringify(data.error).replaceAll('"', ''));
      }
    },
    onError: () => {
      toast.error(t('labelErrorConnectionServer'));
    },
  });
};
